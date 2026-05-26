"use strict";

const MODULE_TITLES = [
  "Intro to Excel",
  "Cell Selection Shortcuts",
  "COUNT Function",
  "SUM Function",
  "True & False",
  "Number Formatting Shortcuts",
  "Fill Right & Fill Down",
  "IF Function",
  "Arrow Keys",
  "Intro to SUMIF",
  "Wildcard Characters",
  "SUMIF & Sum Range",
  "SUMIFS Function",
  "SUM Functions Skill Summary",
  "SUMIF Practice",
  "SUMIFS Practice",
  "COUNTIF Function",
  "COUNTIFS Function",
  "COUNT Practice",
  "COUNT Skill Summary",
  "AND, OR, XOR Functions",
  "IS Functions",
  "IFS Function",
  "SWITCH Function",
  "Larger Cell Selections",
  "Row and Column Selections",
  "Cell Selection Shortcuts 2",
  "Larger Cell Selections 2",
  "Cell Selection Skill Summary",
  "VLOOKUP Function",
  "VLOOKUP Function 2",
  "VLOOKUP Practice",
  "HLOOKUP Function",
  "HLOOKUP Function 2",
  "XLOOKUP Function",
  "XLOOKUP Function 2",
  "MATCH Function",
  "INDEX Function",
  "INDEX MATCH Lookup",
  "INDEX MATCH Practice",
  "Index Match Skill Summary",
  "LEN, LEFT, and RIGHT Functions",
  "MID Function",
  "LEN, LEFT, RIGHT, MID Practice",
  "FIND Function",
  "SEARCH Function",
  "Intro to Shortcuts",
  "Text Formatting Shortcuts",
  "Cut, Copy, Paste",
  "Data Shortcuts",
  "AVERAGE Function",
  "MIN, MAX, LARGE, SMALL Functions",
  "MIN, MAX, LARGE, SMALL Practice",
  "FLOOR & CEILING Functions",
  "DATE Function",
  "TODAY Function",
  "DATEDIF Function",
  "DAYS Function",
  "DATE Functions Skill Summary",
  "CONCAT Function",
  "TEXTJOIN Function",
  "UPPER, LOWER, and PROPER Functions",
  "SUBSTITUTE Function",
  "Pivot Tables 1",
  "Pivot Tables 2",
  "Table Filters",
  "Tables Skill Summary",
  "ODD and EVEN Functions",
  "Worksheets",
  "Conditional Formatting",
  "MEDIAN Function",
  "MODE Function",
  "More VLOOKUP Practice",
  "VLOOKUP Approximate Match",
  "IF Combinations",
  "MATCH Practice",
  "Debugging SUM Functions",
  "TEXTBEFORE & TEXTAFTER",
  "XLOOKUP & Wildcards",
  "Other Count Functions"
];

const CATEGORY_RULES = [
  { name: "Basics & navigation", ids: [1, 2, 5, 6, 7, 9, 25, 26, 27, 28, 29, 47, 48, 49, 50, 69, 70] },
  { name: "SUM skills", ids: [4, 10, 11, 12, 13, 14, 15, 16, 77] },
  { name: "COUNT skills", ids: [3, 17, 18, 19, 20, 80] },
  { name: "Logic", ids: [8, 21, 22, 23, 24, 75] },
  { name: "Lookup", ids: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 73, 74, 76, 79] },
  { name: "Text", ids: [42, 43, 44, 45, 46, 60, 61, 62, 63, 78] },
  { name: "Date, math & stats", ids: [51, 52, 53, 54, 55, 56, 57, 58, 59, 68, 71, 72] },
  { name: "Tables & analysis", ids: [64, 65, 66, 67] }
];

const STORAGE_KEY = "excel-practice-lab-display-order-state-v1";
const TODAY = new Date();
const CURRENCY = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const NUMBER = new Intl.NumberFormat("en-US");

const sourceModules = window.EXTERNAL_QUESTIONS?.modules?.length
  ? window.EXTERNAL_QUESTIONS.modules.slice(0, 80).map((module) => module.title)
  : MODULE_TITLES;

const modules = sourceModules.map((title, index) => ({
  id: index + 1,
  title: title || "undefined"
}));

const defaultState = {
  activeModuleId: 1,
  selectedFilter: "all",
  search: "",
  globalStreak: 0,
  userPoints: 0,
  totalAttempts: 0,
  firstTryCorrect: 0,
  moduleStats: {}
};

let state = loadState();
let currentProblem = null;
let selectedChoice = "";
let capturedShortcut = "";
let attemptStarted = false;
let readyForContinue = false;
let correctAdvanceTimer = null;
let activeSheetState = null;
let sheetMouseUpBound = false;

const REF_COLORS = ["#22c55e", "#d93025", "#7c3aed", "#0f766e", "#c2185b", "#b06000"];

const elements = {
  moduleSearch: document.querySelector("#moduleSearch"),
  moduleList: document.querySelector("#moduleList"),
  categoryGrid: document.querySelector("#categoryGrid"),
  dashboardView: document.querySelector("#dashboardView"),
  practiceView: document.querySelector("#practiceView"),
  screenTitle: document.querySelector("#screenTitle"),
  nextTitle: document.querySelector("#nextTitle"),
  nextReason: document.querySelector("#nextReason"),
  nextBadge: document.querySelector("#nextBadge"),
  nextProgressBar: document.querySelector("#nextProgressBar"),
  masteryStat: document.querySelector("#masteryStat"),
  streakStat: document.querySelector("#streakStat"),
  completedStat: document.querySelector("#completedStat"),
  accuracyStat: document.querySelector("#accuracyStat"),
  startRecommendedBtn: document.querySelector("#startRecommendedBtn"),
  dashboardStartBtn: document.querySelector("#dashboardStartBtn"),
  reviewWeakBtn: document.querySelector("#reviewWeakBtn"),
  resetProgressBtn: document.querySelector("#resetProgressBtn"),
  backToDashboardBtn: document.querySelector("#backToDashboardBtn"),
  lessonMeta: document.querySelector("#lessonMeta"),
  lessonTitle: document.querySelector("#lessonTitle"),
  questionArea: document.querySelector("#questionArea"),
  answerForm: document.querySelector("#answerForm"),
  answerLabel: document.querySelector("#answerLabel"),
  answerInput: document.querySelector("#answerInput"),
  keyboardCapture: document.querySelector("#keyboardCapture"),
  choiceArea: document.querySelector("#choiceArea"),
  hintBtn: document.querySelector("#hintBtn"),
  newQuestionBtn: document.querySelector("#newQuestionBtn"),
  skipLessonBtn: document.querySelector("#skipLessonBtn"),
  feedbackBox: document.querySelector("#feedbackBox"),
  lessonMastery: document.querySelector("#lessonMastery"),
  lessonProgressBar: document.querySelector("#lessonProgressBar"),
  lessonAttempts: document.querySelector("#lessonAttempts"),
  lessonAccuracy: document.querySelector("#lessonAccuracy"),
  lessonReview: document.querySelector("#lessonReview"),
  lessonTarget: document.querySelector("#lessonTarget"),
  gridTemplate: document.querySelector("#gridTemplate")
};

init();

function init() {
  elements.moduleSearch.value = state.search;
  bindEvents();
  renderAll();
}

function bindEvents() {
  elements.moduleSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    saveState();
    renderModuleList();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      saveState();
      renderModuleList();
    });
  });

  elements.startRecommendedBtn.addEventListener("click", () => startModule(getRecommendation().module.id));
  elements.dashboardStartBtn.addEventListener("click", () => startModule(getRecommendation().module.id));
  elements.reviewWeakBtn.addEventListener("click", () => startModule(state.activeModuleId || getRecommendation().module.id));
  elements.backToDashboardBtn.addEventListener("click", showDashboard);
  elements.newQuestionBtn.addEventListener("click", continueOriginalFlow);
  elements.skipLessonBtn.addEventListener("click", () => completeLesson(state.activeModuleId, { advance: true }));
  elements.hintBtn.addEventListener("click", showHint);

  elements.resetProgressBtn.addEventListener("click", () => {
    const okay = window.confirm("Reset all local progress for this practice site?");
    if (!okay) return;
    state = structuredClone(defaultState);
    saveState();
    showDashboard();
  });

  elements.answerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    checkAnswer();
  });

  elements.answerInput.addEventListener("input", syncSheetFromAnswer);
  elements.answerInput.addEventListener("focus", syncSheetFromAnswer);

  elements.keyboardCapture.addEventListener("keydown", (event) => {
    event.preventDefault();
    const pressed = shortcutFromEvent(event);
    capturedShortcut = currentProblem?.shortcutSequence
      ? capturedShortcut ? `${capturedShortcut} then ${pressed}` : pressed
      : pressed;
    elements.keyboardCapture.textContent = capturedShortcut || "Press the shortcut now";
    elements.keyboardCapture.classList.toggle("captured", Boolean(capturedShortcut));
  });
}

function renderAll() {
  renderFilterButtons();
  renderModuleList();
  renderDashboard();
  renderCategories();
}

function renderFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.selectedFilter);
  });
}

function renderModuleList() {
  const query = state.search.trim().toLowerCase();
  const filter = state.selectedFilter;
  const items = modules
    .filter((module) => {
      const stats = getStats(module.id);
      const searchable = `${module.id} ${module.title}`.toLowerCase();
      const matchesFilter = filter === "all" || (filter === "open" && !stats.completed) || (filter === "done" && stats.completed);
      return searchable.includes(query) && matchesFilter;
    });

  elements.moduleList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No matching modules yet.";
    elements.moduleList.append(empty);
    return;
  }

  items.forEach((module) => {
    const stats = getStats(module.id);
    const button = document.createElement("button");
    button.className = "module-button";
    button.classList.toggle("active", module.id === state.activeModuleId && !elements.practiceView.classList.contains("hidden"));
    button.type = "button";
    button.innerHTML = `
      <span class="module-number">${module.id}</span>
      <span>
        <span class="module-title">${escapeHTML(module.title)}</span>
      </span>
      <span class="module-score">${Math.round(stats.score)}%</span>
    `;
    button.addEventListener("click", () => startModule(module.id));
    elements.moduleList.append(button);
  });
}

function renderDashboard() {
  const recommendation = getRecommendation();
  const stats = getStats(recommendation.module.id);
  const summary = getCourseSummary();

  elements.nextTitle.textContent = `${recommendation.module.id}. ${recommendation.module.title}`;
  elements.nextReason.textContent = recommendation.reason;
  elements.nextBadge.textContent = stats.completed ? "Complete" : `${Math.round(stats.score)}% score`;
  elements.nextProgressBar.style.width = `${stats.score}%`;

  elements.masteryStat.textContent = `${Math.round(summary.completePercent)}%`;
  elements.streakStat.textContent = String(state.userPoints || 0);
  elements.completedStat.textContent = String(summary.completed);
  elements.accuracyStat.textContent = `${summary.accuracy}%`;
}

function renderCategories() {
  if (!elements.categoryGrid) return;
  elements.categoryGrid.innerHTML = "";
  CATEGORY_RULES.forEach((category) => {
    const categoryModules = modules.filter((module) => module.category === category.name);
    const average = averageValue(categoryModules.map((module) => getStats(module.id).score));
    const completed = categoryModules.filter((module) => getStats(module.id).completed).length;
    const button = document.createElement("button");
    button.className = "category-card";
    button.type = "button";
    button.innerHTML = `
      <h4>${escapeHTML(category.name)}</h4>
      <p><strong>${Math.round(average)}%</strong> average score across ${categoryModules.length} modules.</p>
      <p>${completed} lessons complete.</p>
    `;
    button.addEventListener("click", () => {
      const next = categoryModules.find((item) => !getStats(item.id).completed) || categoryModules[0];
      startModule(next.id);
    });
    elements.categoryGrid.append(button);
  });
}

function startModule(moduleId) {
  state.activeModuleId = moduleId;
  saveState();
  elements.dashboardView.classList.add("hidden");
  elements.practiceView.classList.remove("hidden");
  makeProblem(moduleId);
}

function showDashboard() {
  clearCorrectAdvance();
  elements.practiceView.classList.add("hidden");
  elements.dashboardView.classList.remove("hidden");
  elements.feedbackBox.classList.add("hidden");
  elements.screenTitle.textContent = "Practice dashboard";
  renderAll();
}

function makeProblem(moduleId) {
  clearCorrectAdvance();
  const module = modules.find((item) => item.id === moduleId);
  const stats = getStats(moduleId);
  currentProblem = generateProblem(module, stats);
  selectedChoice = "";
  capturedShortcut = "";
  attemptStarted = true;
  readyForContinue = false;

  elements.screenTitle.textContent = module.title;
  elements.lessonMeta.textContent = `Lesson ${module.id} of 80`;
  elements.lessonTitle.textContent = module.title;
  elements.feedbackBox.classList.add("hidden");
  elements.feedbackBox.className = "feedback hidden";
  elements.answerInput.value = "";
  elements.newQuestionBtn.textContent = "Skip question";
  elements.keyboardCapture.textContent = "Press the shortcut now";
  elements.keyboardCapture.classList.remove("captured");

  renderQuestion(currentProblem);
  renderLessonStats(moduleId);
  renderModuleList();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion(problem) {
  elements.questionArea.innerHTML = "";
  activeSheetState = null;

  const wrapper = document.createElement("div");
  wrapper.className = "question-card";

  const prompt = document.createElement("div");
  prompt.className = "prompt";
  prompt.innerHTML = sanitizeInlineHTML(problem.prompt);
  wrapper.append(prompt);

  wrapper.append(elements.answerForm);

  if (problem.sheet) wrapper.append(renderSheet(problem.sheet));

  if (problem.embedUrl) {
    const frame = document.createElement("iframe");
    frame.className = "workbook-frame";
    frame.title = "Embedded Excel workbook";
    frame.src = problem.embedUrl;
    frame.loading = "lazy";
    wrapper.append(frame);
  }

  if (problem.notes?.length) {
    const note = document.createElement("div");
    note.className = "side-note";
    note.innerHTML = `<h4>Context</h4><p>${problem.notes.map(escapeHTML).join("<br>")}</p>`;
    wrapper.append(note);
  }

  elements.questionArea.append(wrapper);

  elements.answerLabel.textContent = problem.answerLabel || "Your answer";
  elements.answerInput.placeholder = problem.placeholder || "Type a formula or result";
  elements.answerInput.classList.toggle("hidden", problem.type === "shortcut" || problem.type === "choice");
  elements.keyboardCapture.classList.toggle("hidden", problem.type !== "shortcut");
  elements.choiceArea.classList.toggle("hidden", problem.type !== "choice");

  if (problem.type === "choice") renderChoices(problem);
  if (problem.type === "shortcut") setTimeout(() => elements.keyboardCapture.focus(), 0);
  if (problem.type !== "shortcut" && problem.type !== "choice") setTimeout(() => {
    elements.answerInput.focus();
    syncSheetFromAnswer();
  }, 0);
}

function renderChoices(problem) {
  elements.choiceArea.innerHTML = "";
  problem.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      selectedChoice = option;
      elements.choiceArea.querySelectorAll(".choice-button").forEach((item) => item.classList.toggle("active", item === button));
    });
    elements.choiceArea.append(button);
  });
}

function renderSheet(sheet) {
  const node = elements.gridTemplate.content.firstElementChild.cloneNode(true);
  node.querySelector(".name-box").textContent = sheet.nameBox || "A1";
  node.querySelector(".formula-preview").textContent = sheet.formulaPreview || "";
  const table = node.querySelector(".sheet-grid");

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const head = document.createElement("thead");
  const topRow = document.createElement("tr");
  const colCount = sheet.rawRows ? sheet.rawRows[0]?.length || 7 : sheet.headers.length;
  topRow.innerHTML = `<th class="corner"></th>${Array.from({ length: colCount }, (_, index) => `<th class="col-head">${letters[index]}</th>`).join("")}`;
  head.append(topRow);

  if (sheet.rawRows) {
    table.append(head);
    const body = document.createElement("tbody");
    sheet.rawRows.forEach((row, rowIndex) => {
      const rowNumber = rowIndex + 1;
      const tr = document.createElement("tr");
      tr.innerHTML = `<th class="row-head">${rowNumber}</th>${row.map((cell, colIndex) => {
        const ref = `${letters[colIndex]}${rowNumber}`.toLowerCase();
        const isTarget = sheet.targetCells?.includes(ref);
        const isActive = ref === String(sheet.activeCell || "").toLowerCase();
        return `<td data-ref="${ref.toUpperCase()}" class="${isActive ? "active-cell" : isTarget ? "target" : ""}">${sanitizeInlineHTML(formatCell(cell))}</td>`;
      }).join("")}`;
      body.append(tr);
    });
    table.append(body);
    setupSheetInteractions(node, sheet);
    return node;
  }

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `<th class="row-head">1</th>${sheet.headers.map((header, index) => `<th class="${sheet.target?.row === 1 && sheet.target?.col === index + 1 ? "target" : ""}">${escapeHTML(header)}</th>`).join("")}`;
  head.append(headerRow);
  table.append(head);

  const body = document.createElement("tbody");
  sheet.rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    const rowNumber = rowIndex + 2;
    tr.innerHTML = `<th class="row-head">${rowNumber}</th>${row.map((cell, colIndex) => {
      const ref = `${letters[colIndex]}${rowNumber}`;
      const isTarget = sheet.target?.row === rowNumber && sheet.target?.col === colIndex + 1;
      return `<td data-ref="${ref}" class="${isTarget ? "active-cell" : ""}">${escapeHTML(formatCell(cell))}</td>`;
    }).join("")}`;
    body.append(tr);
  });
  table.append(body);

  setupSheetInteractions(node, sheet);
  return node;
}

function setupSheetInteractions(node, sheet) {
  const table = node.querySelector(".sheet-grid");
  const activeRef = String(sheet.activeCell || sheet.nameBox || "A1").toUpperCase();
  const originalValues = new Map();
  table.querySelectorAll("td[data-ref]").forEach((cell) => {
    originalValues.set(cell.dataset.ref, cell.innerHTML);
    if (cell.dataset.ref === activeRef) cell.classList.add("active-cell");
  });

  activeSheetState = {
    node,
    table,
    sheet,
    activeRef,
    originalValues,
    dragStart: null,
    dragCurrent: null,
    dragging: false
  };

  table.addEventListener("mousedown", (event) => {
    const cell = event.target.closest("td[data-ref]");
    if (!cell || !isFormulaInputAvailable()) return;
    event.preventDefault();
    activeSheetState.dragging = true;
    activeSheetState.dragStart = cell.dataset.ref;
    activeSheetState.dragCurrent = cell.dataset.ref;
    elements.answerInput.focus();
    paintTransientSelection();
  });

  table.addEventListener("mouseover", (event) => {
    const cell = event.target.closest("td[data-ref]");
    if (!cell || !activeSheetState?.dragging) return;
    activeSheetState.dragCurrent = cell.dataset.ref;
    paintTransientSelection();
  });

  if (!sheetMouseUpBound) {
    document.addEventListener("mouseup", finishSheetDrag);
    sheetMouseUpBound = true;
  }
  syncSheetFromAnswer();
}

function isFormulaInputAvailable() {
  return currentProblem && currentProblem.type !== "shortcut" && currentProblem.type !== "choice" && !elements.answerInput.classList.contains("hidden");
}

function finishSheetDrag() {
  if (!activeSheetState?.dragging) return;
  const refText = rangeText(activeSheetState.dragStart, activeSheetState.dragCurrent);
  activeSheetState.dragging = false;
  activeSheetState.dragStart = null;
  activeSheetState.dragCurrent = null;
  insertReferenceAtCursor(refText);
  syncSheetFromAnswer();
}

function insertReferenceAtCursor(refText) {
  const input = elements.answerInput;
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = `${input.value.slice(0, start)}${refText}${input.value.slice(end)}`;
  const nextPosition = start + refText.length;
  input.setSelectionRange(nextPosition, nextPosition);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function syncSheetFromAnswer() {
  if (!activeSheetState) return;
  const { table, activeRef, originalValues } = activeSheetState;
  const answer = elements.answerInput.value;

  table.querySelectorAll("td[data-ref]").forEach((cell) => {
    cell.classList.remove("formula-ref", "drag-ref", "ref-color-0", "ref-color-1", "ref-color-2", "ref-color-3", "ref-color-4", "ref-color-5");
    cell.style.removeProperty("--ref-color");
    if (cell.dataset.ref !== activeRef) {
      cell.innerHTML = originalValues.get(cell.dataset.ref) || "";
    }
  });

  const activeCell = table.querySelector(`td[data-ref="${CSS.escape(activeRef)}"]`);
  if (activeCell) {
    activeCell.classList.add("active-cell");
    activeCell.innerHTML = answer.trim().startsWith("=") ? colorizeFormulaHTML(answer) : escapeHTML(answer);
  }

  const preview = activeSheetState.node.querySelector(".formula-preview");
  if (preview) preview.innerHTML = answer.trim().startsWith("=") ? colorizeFormulaHTML(answer) : escapeHTML(answer || activeSheetState.sheet.formulaPreview || "");

  getFormulaReferences(answer).forEach((entry, index) => {
    cellsInRange(entry.text).forEach((ref) => {
      if (ref === activeRef) return;
      const cell = table.querySelector(`td[data-ref="${CSS.escape(ref)}"]`);
      if (!cell) return;
      cell.classList.add("formula-ref", `ref-color-${index % REF_COLORS.length}`);
      cell.style.setProperty("--ref-color", REF_COLORS[index % REF_COLORS.length]);
    });
  });
}

function paintTransientSelection() {
  if (!activeSheetState) return;
  activeSheetState.table.querySelectorAll(".drag-ref").forEach((cell) => cell.classList.remove("drag-ref"));
  if (!activeSheetState.dragStart || !activeSheetState.dragCurrent) return;
  cellsInRange(rangeText(activeSheetState.dragStart, activeSheetState.dragCurrent)).forEach((ref) => {
    const cell = activeSheetState.table.querySelector(`td[data-ref="${CSS.escape(ref)}"]`);
    if (cell && ref !== activeSheetState.activeRef) cell.classList.add("drag-ref");
  });
}

function colorizeFormulaHTML(value) {
  const text = String(value || "");
  const refs = getFormulaReferences(text);
  if (!refs.length) return escapeHTML(text);
  let html = "";
  let cursor = 0;
  refs.forEach((entry, index) => {
    html += escapeHTML(text.slice(cursor, entry.index));
    html += `<span style="color:${REF_COLORS[index % REF_COLORS.length]};font-weight:800">${escapeHTML(entry.text)}</span>`;
    cursor = entry.index + entry.text.length;
  });
  html += escapeHTML(text.slice(cursor));
  return html;
}

function getFormulaReferences(value) {
  const text = String(value || "");
  const refs = [];
  const pattern = /([A-Ga-g][1-8](?::[A-Ga-g][1-8])?)/g;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    refs.push({ text: match[1].toUpperCase(), index: match.index });
  }
  return refs;
}

function rangeText(startRef, endRef) {
  if (!startRef || !endRef || startRef === endRef) return String(startRef || endRef || "").toUpperCase();
  const start = parseCellRef(startRef);
  const end = parseCellRef(endRef);
  if (!start || !end) return String(startRef).toUpperCase();
  const first = cellRef(Math.min(start.col, end.col), Math.min(start.row, end.row));
  const last = cellRef(Math.max(start.col, end.col), Math.max(start.row, end.row));
  return first === last ? first : `${first}:${last}`;
}

function cellsInRange(text) {
  const [startText, endText = startText] = String(text || "").split(":");
  const start = parseCellRef(startText);
  const end = parseCellRef(endText);
  if (!start || !end) return [];
  const refs = [];
  const minCol = Math.min(start.col, end.col);
  const maxCol = Math.max(start.col, end.col);
  const minRow = Math.min(start.row, end.row);
  const maxRow = Math.max(start.row, end.row);
  for (let row = minRow; row <= maxRow; row += 1) {
    for (let col = minCol; col <= maxCol; col += 1) {
      refs.push(cellRef(col, row));
    }
  }
  return refs;
}

function cellRef(col, row) {
  return `${String.fromCharCode(64 + col)}${row}`;
}

function checkAnswer() {
  if (!currentProblem) return;
  if (readyForContinue) {
    continueOriginalFlow();
    return;
  }

  const answer = currentProblem.type === "choice"
    ? selectedChoice
    : currentProblem.type === "shortcut"
      ? capturedShortcut
      : elements.answerInput.value;

  const result = evaluateAnswer(answer, currentProblem);
  const progress = updateStats(currentProblem.moduleId, result.correct);
  renderLessonStats(currentProblem.moduleId);
  renderDashboard();
  renderCategories();
  renderModuleList();
  showFeedback(result, progress);
}

function evaluateAnswer(rawAnswer, problem) {
  const answer = String(rawAnswer || "").trim();
  if (!answer) {
    return {
      correct: false,
      tone: "warning",
      title: "Give it a try first.",
      message: "Enter a formula, final value, choice, or shortcut before checking."
    };
  }

  if (problem.type === "shortcut") {
    const expectedShortcut = problem.shortcutSequence || problem.shortcut;
    const correct = normalizeShortcut(answer) === normalizeShortcut(expectedShortcut);
    return correct
      ? successResult(problem)
      : missResult(`Expected <code>${escapeHTML(expectedShortcut)}</code>. You pressed <code>${escapeHTML(answer)}</code>.`, problem);
  }

  if (problem.type === "choice") {
    const correct = normalizeText(answer) === normalizeText(problem.expectedText);
    return correct ? successResult(problem) : missResult(`The best choice is <code>${escapeHTML(problem.expectedText)}</code>.`, problem);
  }

  const normalizedAnswer = normalizeFormula(answer);
  const normalizedExpected = normalizeFormula(problem.expectedFormula || "");
  const normalizedText = normalizeText(answer);
  const expectedValue = problem.expectedValue;

  if (problem.acceptFinalValue && normalizeValue(answer) === normalizeValue(expectedValue)) {
    return successResult(problem, `You used the final result, <code>${escapeHTML(String(expectedValue))}</code>.`);
  }

  if (normalizedExpected && normalizedAnswer === normalizedExpected) return successResult(problem);

  if (problem.acceptedFormulas?.some((formula) => normalizeFormula(formula) === normalizedAnswer)) return successResult(problem);

  const requiredFunctions = problem.requiredFunctions || [];
  const requiredTokens = problem.requiredTokens || [];
  const hasFunctions = requiredFunctions.every((fn) => normalizedAnswer.includes(`${fn.toUpperCase()}(`) || normalizedAnswer.includes(`${fn.toUpperCase()}.`));
  const hasTokens = requiredTokens.every((token) => normalizedAnswer.includes(normalizeFormula(token)));

  if (requiredFunctions.length && hasFunctions && hasTokens) {
    return successResult(problem, "The formula pattern is valid for this task.");
  }

  if (problem.expectedText && normalizedText === normalizeText(problem.expectedText)) return successResult(problem);

  const assistant = formulaAssistant(answer, problem);
  return missResult(assistant, problem);
}

function successResult(problem, extra = "") {
  return {
    correct: true,
    tone: "correct",
    title: "Correct.",
    message: `${extra ? `${extra} ` : ""}${problem.explanation || "Nice work."}`
  };
}

function missResult(message, problem) {
  return {
    correct: false,
    tone: "incorrect",
    title: "Not quite yet.",
    message: `${message}<br>Solution: <code>${escapeHTML(problem.solution || problem.expectedFormula || problem.expectedText || problem.shortcut)}</code>`
  };
}

function showFeedback(result, progress = {}) {
  clearCorrectAdvance();
  elements.feedbackBox.className = `feedback ${result.tone}`;
  elements.feedbackBox.innerHTML = `<strong>${result.title}</strong><br>${result.message}`;
  elements.feedbackBox.classList.remove("hidden");
  if (result.correct) {
    readyForContinue = true;
    elements.newQuestionBtn.textContent = progress.completed ? "Next lesson" : "Continue";
    playCorrectAnimation(progress);
    correctAdvanceTimer = window.setTimeout(() => {
      correctAdvanceTimer = null;
      continueOriginalFlow();
    }, 1050);
  } else {
    readyForContinue = false;
  }
}

function clearCorrectAdvance() {
  if (correctAdvanceTimer) {
    window.clearTimeout(correctAdvanceTimer);
    correctAdvanceTimer = null;
  }
  document.querySelector(".correct-burst")?.remove();
  elements.feedbackBox.classList.remove("correct-pulse");
}

function playCorrectAnimation(progress = {}) {
  elements.feedbackBox.classList.add("correct-pulse");

  const burst = document.createElement("div");
  burst.className = "correct-burst";
  burst.setAttribute("role", "status");
  burst.innerHTML = `
    <span class="correct-burst-icon">✓</span>
    <span>
      <strong>Correct</strong>
      <small>${progress.completed ? "Lesson complete" : `Score ${Math.round(progress.score || 0)}%`}</small>
    </span>
  `;

  const panel = elements.feedbackBox.closest(".trainer-panel");
  if (panel) panel.append(burst);

  burst.addEventListener("animationend", () => burst.remove(), { once: true });
}

function continueOriginalFlow() {
  clearCorrectAdvance();
  const moduleId = state.activeModuleId;
  const stats = getStats(moduleId);
  if (stats.completed) {
    const next = getRecommendation().module;
    if (next.id === moduleId && getStats(next.id).completed) {
      showDashboard();
      return;
    }
    startModule(next.id);
    return;
  }

  if (!readyForContinue) {
    stats.currentQuestion += 1;
    state.moduleStats[moduleId] = stats;
    saveState();
  }
  makeProblem(moduleId);
}

function completeLesson(moduleId, options = {}) {
  const { advance = false } = options;
  const stats = getStats(moduleId);
  const questionCount = getQuestionCount(moduleId);
  stats.score = 100;
  stats.mastery = 100;
  stats.completed = true;
  stats.currentQuestion = Math.max(stats.currentQuestion || 1, questionCount);
  stats.lastAttempt = Date.now();
  state.moduleStats[moduleId] = stats;
  saveState();

  renderLessonStats(moduleId);
  renderDashboard();
  renderCategories();
  renderModuleList();

  if (!advance) return;

  const next = modules.find((module) => !getStats(module.id).completed);
  if (next) {
    state.activeModuleId = next.id;
    saveState();
    startModule(next.id);
    return;
  }

  showDashboard();
}

function getQuestionCount(moduleId) {
  return window.EXTERNAL_QUESTIONS?.modules?.find((item) => item.localId === moduleId)?.questions?.length || 10;
}

function showHint() {
  if (!currentProblem) return;
  elements.feedbackBox.className = "feedback warning";
  elements.feedbackBox.innerHTML = `<strong>Hint</strong><br>${currentProblem.hint}`;
  elements.feedbackBox.classList.remove("hidden");
}

function renderLessonStats(moduleId) {
  const stats = getStats(moduleId);
  const accuracy = stats.attempts ? Math.round((stats.correct / stats.attempts) * 100) : 0;
  elements.lessonMastery.textContent = `${Math.round(stats.score)}%`;
  elements.lessonProgressBar.style.width = `${stats.score}%`;
  elements.lessonAttempts.textContent = String(stats.attempts);
  elements.lessonAccuracy.textContent = `${accuracy}%`;
  elements.lessonReview.textContent = `${stats.currentQuestion}`;
  elements.lessonTarget.textContent = stats.completed
    ? "This lesson is complete. Continue to the next recommended lesson."
    : "Answer correctly to add 20%. Reach 100% to complete this lesson.";
}

function updateStats(moduleId, correct) {
  const stats = getStats(moduleId);
  const firstTry = attemptStarted;
  stats.attempts += 1;
  state.totalAttempts += 1;

  if (correct) {
    stats.correct += 1;
    stats.streak += 1;
    state.globalStreak += 1;
    state.userPoints = Number(state.userPoints || 0) + (randomInt(1, 5) * moduleId);
    if (firstTry) {
      stats.firstTryCorrect += 1;
      state.firstTryCorrect += 1;
    }
    stats.score = clamp(stats.score + 20, 0, 100);
    stats.mastery = stats.score;
    if (stats.score >= 100) {
      stats.completed = true;
    } else {
      stats.currentQuestion += 1;
    }
  } else {
    stats.incorrect += 1;
    stats.streak = 0;
    state.globalStreak = 0;
  }

  stats.lastAttempt = Date.now();
  attemptStarted = false;
  state.moduleStats[moduleId] = stats;
  saveState();
  return { completed: stats.completed, score: stats.score };
}

function getRecommendation() {
  const next = modules.find((module) => !getStats(module.id).completed) || modules[modules.length - 1];
  const stats = getStats(next.id);
  const reason = stats.attempts
    ? `Resume screen ${stats.currentQuestion}. Original-style lessons continue until the score reaches 100%.`
    : "This is the first incomplete lesson in the imported recommended order.";
  return { module: next, reason };
}

function getWeakestModule() {
  const attempted = modules.filter((module) => getStats(module.id).attempts > 0);
  const pool = attempted.length ? attempted : modules;
  return pool.sort((a, b) => getStats(a.id).score - getStats(b.id).score)[0];
}

function getCourseSummary() {
  const completed = modules.filter((module) => getStats(module.id).completed).length;
  const accuracy = state.totalAttempts ? Math.round((state.firstTryCorrect / state.totalAttempts) * 100) : 0;
  return {
    completePercent: (completed / modules.length) * 100,
    completed,
    accuracy
  };
}

function getStats(moduleId) {
  const existing = state.moduleStats[moduleId];
  const base = {
    attempts: 0,
    correct: 0,
    incorrect: 0,
    firstTryCorrect: 0,
    streak: 0,
    score: 0,
    mastery: 0,
    currentQuestion: 1,
    completed: false,
    lastAttempt: 0,
    nextReview: Date.now()
  };
  if (existing) {
    const score = Number(existing.score ?? existing.mastery ?? 0);
    return {
      ...base,
      ...existing,
      score,
      mastery: score,
      currentQuestion: Number(existing.currentQuestion || 1),
      completed: Boolean(existing.completed || score >= 100)
    };
  }
  return base;
}

function getDueScore(stats) {
  if (!stats.attempts) return 0;
  const overdue = Date.now() - stats.nextReview;
  return overdue > 0 ? Math.min(45, 15 + overdue / 86400000 * 8) : 0;
}

function previousAverage(moduleId) {
  if (moduleId === 1) return 100;
  const previous = modules.filter((module) => module.id < moduleId).slice(-4);
  return averageValue(previous.map((module) => getStats(module.id).mastery));
}

function getFirstUnstartedId() {
  return modules.find((module) => getStats(module.id).attempts === 0)?.id ?? modules.length;
}

function reviewIntervalMs(mastery, correct) {
  if (!correct) return 1000 * 60 * 20;
  if (mastery < 35) return 1000 * 60 * 60;
  if (mastery < 65) return 1000 * 60 * 60 * 8;
  if (mastery < 85) return 1000 * 60 * 60 * 24 * 2;
  return 1000 * 60 * 60 * 24 * 5;
}

function generateProblem(module, stats) {
  const imported = importedProblem(module, stats);
  if (imported) return imported;

  const title = module.title.toLowerCase();
  if (title.includes("shortcut") || title.includes("arrow keys") || title.includes("fill right") || title.includes("fill down") || title.includes("selection")) {
    return shortcutProblem(module);
  }
  if (title.includes("intro to excel") || title.includes("worksheets") || title.includes("conditional formatting") || title.includes("pivot") || title.includes("table") || title.includes("formatting")) {
    return conceptProblem(module);
  }
  if (title.includes("true") || title.includes("and, or") || title.includes("if combinations") || title.includes(" if function") || title.includes("ifs") || title.includes("switch") || title.includes("is functions")) {
    return logicProblem(module);
  }
  if (title.includes("vlookup") || title.includes("hlookup") || title.includes("xlookup") || title.includes("match") || title.includes("index")) {
    return lookupProblem(module);
  }
  if (title.includes("len") || title.includes("left") || title.includes("right") || title.includes("mid") || title.includes("find") || title.includes("search") || title.includes("concat") || title.includes("textjoin") || title.includes("upper") || title.includes("lower") || title.includes("proper") || title.includes("substitute") || title.includes("textbefore") || title.includes("textafter")) {
    return textProblem(module);
  }
  if (title.includes("date") || title.includes("today") || title.includes("datedif") || title.includes("days")) {
    return dateProblem(module);
  }
  if (title.includes("average") || title.includes("min") || title.includes("max") || title.includes("large") || title.includes("small") || title.includes("floor") || title.includes("ceiling") || title.includes("odd") || title.includes("even") || title.includes("median") || title.includes("mode")) {
    return statsProblem(module);
  }
  if (title.includes("count")) {
    return countProblem(module);
  }
  return sumProblem(module, stats);
}

function baseProblem(module, overrides) {
  return {
    moduleId: module.id,
    hint: "Start by identifying the output cell, the source range, and the function that matches the verb in the prompt.",
    acceptFinalValue: true,
    ...overrides
  };
}

function importedProblem(module, stats) {
  const importedModule = window.EXTERNAL_QUESTIONS?.modules?.find((item) => item.localId === module.id);
  if (!importedModule?.questions?.length) return null;

  const questionIndex = (Math.max(1, stats.currentQuestion || 1) - 1) % importedModule.questions.length;
  const question = importedModule.questions[questionIndex];
  const sheet = importedSheet(question);
  const solutionValues = Array.isArray(question.solution) ? question.solution : [];
  const stringSolutions = solutionValues.filter((value) => typeof value === "string" && value.trim() !== "");
  const firstSolution = stringSolutions[0] || stripHTML(question.correctAnswer) || "Continue";
  const explanation = question.explanation ? sanitizeInlineHTML(question.explanation) : "This follows the original lesson answer key.";
  const common = {
    sheet,
    prompt: importedPrompt(question),
    explanation,
    solution: stripHTML(question.correctAnswer) || firstSolution,
    hint: importedHint(question),
    embedUrl: question.media?.src || "",
    answerLabel: question.sourceType === "e" ? "Enter the result from the workbook" : "Your answer"
  };

  if (question.sourceType === "h") {
    const combo = shortcutComboFromQuestion(question);
    return baseProblem(module, {
      ...common,
      type: "shortcut",
      shortcut: combo,
      solution: combo,
      answerLabel: "Shortcut capture",
      explanation: question.correctAnswer ? sanitizeInlineHTML(question.correctAnswer) : `${combo} is the expected shortcut.`
    });
  }

  if (question.sourceType === "s") {
    const sequence = stringSolutions.join(" then ");
    return baseProblem(module, {
      ...common,
      type: "shortcut",
      shortcutSequence: sequence,
      shortcut: sequence,
      solution: sequence,
      answerLabel: "Shortcut capture",
      explanation: question.correctAnswer ? sanitizeInlineHTML(question.correctAnswer) : `${sequence} is the expected key sequence.`
    });
  }

  if (question.sourceType === "p") {
    return baseProblem(module, {
      ...common,
      type: "choice",
      options: ["Continue"],
      expectedText: "Continue",
      solution: "Continue",
      explanation: "This is an informational step from the original lesson."
    });
  }

  return baseProblem(module, {
    ...common,
    type: "formula",
    expectedFormula: firstSolution.startsWith("=") ? firstSolution : "",
    acceptedFormulas: stringSolutions,
    expectedText: firstSolution,
    expectedValue: question.result || firstSolution,
    acceptFinalValue: true,
    placeholder: firstSolution.startsWith("=") ? "Type the formula" : "Type the answer"
  });
}

function importedPrompt(question) {
  let prompt = question.title || "Complete the practice question.";
  if (question.sourceType === "e" && question.media?.src) {
    prompt += `<br><br><a href="${escapeHTML(question.media.src)}" target="_blank" rel="noopener">Open the source workbook</a>, then enter the result here.`;
  }
  return prompt;
}

function importedHint(question) {
  if (question.sourceType === "h" || question.sourceType === "s") {
    return `Expected action: <code>${escapeHTML(stripHTML(question.correctAnswer) || shortcutComboFromQuestion(question))}</code>.`;
  }
  if (question.correctAnswer) {
    return `The original answer key points to <code>${escapeHTML(stripHTML(question.correctAnswer))}</code>.`;
  }
  if (question.solution?.length) {
    return `Try a response equivalent to <code>${escapeHTML(String(question.solution[0]))}</code>.`;
  }
  return "Use the table and wording from the prompt to identify the answer.";
}

function importedSheet(question) {
  if (question.sourceType === "e" && question.media?.src) return null;

  const rows = 8;
  const cols = 7;
  const rawRows = Array.from({ length: rows }, () => Array.from({ length: cols }, () => ""));
  const positions = question.precondition?.position || [];
  const values = question.precondition?.values || [];
  positions.forEach((position, index) => {
    const parsed = parseCellRef(position);
    if (!parsed) return;
    rawRows[parsed.row - 1][parsed.col - 1] = values[index] ?? "";
  });

  const highlighted = [
    ...(question.precondition?.highlightCells || []),
    question.activeCell || ""
  ]
    .filter(Boolean)
    .map((cell) => String(cell).toLowerCase());

  return {
    nameBox: question.activeCell ? question.activeCell.toUpperCase() : "A1",
    formulaPreview: question.sourceType === "e" && question.media?.src ? "External workbook question" : "Original lesson question",
    rawRows,
    targetCells: highlighted
  };
}

function parseCellRef(value) {
  const match = String(value || "").trim().match(/^([a-gA-G])([1-8])$/);
  if (!match) return null;
  return {
    col: match[1].toLowerCase().charCodeAt(0) - 96,
    row: Number(match[2])
  };
}

function shortcutComboFromQuestion(question) {
  const accepted = question.shortcut?.acceptedAnswers || question.solution?.[0] || {};
  const source = Array.isArray(accepted) ? accepted[0] : accepted;
  if (typeof source === "string") return source;
  const holds = [source?.hold1, source?.hold2].filter((key) => key && key !== "nil");
  const push = keyCodeToName(source?.push);
  return [...holds, push].filter(Boolean).join("+");
}

function keyCodeToName(code) {
  const map = {
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    27: "Escape",
    32: "Space",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    187: "+",
    189: "-"
  };
  return map[String(code)] || String(code || "");
}

function sumProblem(module) {
  const sales = makeSalesRows(9);
  const title = module.title.toLowerCase();
  const sheet = {
    nameBox: "G2",
    headers: ["Rep", "Region", "Channel", "Units", "Revenue"],
    rows: sales.map((row) => [row.rep, row.region, row.channel, row.units, row.revenue]),
    formulaPreview: "Enter your formula in G2",
    target: { row: 2, col: 7 }
  };

  if (title.includes("sumifs")) {
    const region = sales[0].region;
    const channel = "Online";
    const expectedValue = sales.filter((row) => row.region === region && row.channel === channel).reduce((sum, row) => sum + row.revenue, 0);
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: `In <strong>G2</strong>, total Revenue for rows where Region is <strong>${region}</strong> and Channel is <strong>${channel}</strong>.`,
      expectedFormula: `=SUMIFS(E2:E10,B2:B10,"${region}",C2:C10,"${channel}")`,
      expectedValue,
      requiredFunctions: ["SUMIFS"],
      requiredTokens: ["E2:E10", "B2:B10", region, "C2:C10", channel],
      solution: `=SUMIFS(E2:E10,B2:B10,"${region}",C2:C10,"${channel}")`,
      hint: "SUMIFS starts with the sum range, then each criteria range and criteria pair.",
      explanation: `The matching revenue total is ${CURRENCY.format(expectedValue)}.`
    });
  }

  if (title.includes("sumif") || title.includes("wildcard")) {
    const region = sales[1].region;
    const expectedValue = sales.filter((row) => row.region === region).reduce((sum, row) => sum + row.revenue, 0);
    const wildcard = title.includes("wildcard");
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: wildcard
        ? `In <strong>G2</strong>, total Revenue for reps whose name begins with <strong>${sales[0].rep[0]}</strong>.`
        : `In <strong>G2</strong>, total Revenue for Region <strong>${region}</strong>.`,
      expectedFormula: wildcard
        ? `=SUMIF(A2:A10,"${sales[0].rep[0]}*",E2:E10)`
        : `=SUMIF(B2:B10,"${region}",E2:E10)`,
      expectedValue: wildcard
        ? sales.filter((row) => row.rep.startsWith(sales[0].rep[0])).reduce((sum, row) => sum + row.revenue, 0)
        : expectedValue,
      requiredFunctions: ["SUMIF"],
      requiredTokens: wildcard ? ["A2:A10", `${sales[0].rep[0]}*`, "E2:E10"] : ["B2:B10", region, "E2:E10"],
      solution: wildcard ? `=SUMIF(A2:A10,"${sales[0].rep[0]}*",E2:E10)` : `=SUMIF(B2:B10,"${region}",E2:E10)`,
      hint: wildcard ? "Use an asterisk after the first letter to match any ending." : "SUMIF needs criteria_range, criteria, then sum_range.",
      explanation: "SUMIF tests one condition before adding the matching values."
    });
  }

  const expectedValue = sales.reduce((sum, row) => sum + row.revenue, 0);
  return baseProblem(module, {
    type: "formula",
    sheet,
    prompt: "In <strong>G2</strong>, calculate the total Revenue for every row.",
    expectedFormula: "=SUM(E2:E10)",
    expectedValue,
    requiredFunctions: ["SUM"],
    requiredTokens: ["E2:E10"],
    solution: "=SUM(E2:E10)",
    hint: "Use SUM over the revenue range only.",
    explanation: `The full revenue total is ${CURRENCY.format(expectedValue)}.`
  });
}

function countProblem(module) {
  const rows = makeSalesRows(9);
  const title = module.title.toLowerCase();
  const sheet = {
    nameBox: "G2",
    headers: ["Rep", "Region", "Channel", "Units", "Revenue"],
    rows: rows.map((row) => [row.rep, row.region, row.channel, row.units, row.revenue]),
    formulaPreview: "Enter your formula in G2"
  };

  if (title.includes("countifs")) {
    const region = rows[0].region;
    const channel = rows[0].channel;
    const expectedValue = rows.filter((row) => row.region === region && row.channel === channel).length;
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: `Count rows where Region is <strong>${region}</strong> and Channel is <strong>${channel}</strong>.`,
      expectedFormula: `=COUNTIFS(B2:B10,"${region}",C2:C10,"${channel}")`,
      expectedValue,
      requiredFunctions: ["COUNTIFS"],
      requiredTokens: ["B2:B10", region, "C2:C10", channel],
      solution: `=COUNTIFS(B2:B10,"${region}",C2:C10,"${channel}")`,
      hint: "COUNTIFS uses pairs: criteria_range1, criteria1, criteria_range2, criteria2.",
      explanation: `${expectedValue} rows match both criteria.`
    });
  }

  if (title.includes("countif")) {
    const region = rows[2].region;
    const expectedValue = rows.filter((row) => row.region === region).length;
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: `Count rows where Region is <strong>${region}</strong>.`,
      expectedFormula: `=COUNTIF(B2:B10,"${region}")`,
      expectedValue,
      requiredFunctions: ["COUNTIF"],
      requiredTokens: ["B2:B10", region],
      solution: `=COUNTIF(B2:B10,"${region}")`,
      hint: "COUNTIF counts cells in one range that meet one criterion.",
      explanation: `${expectedValue} rows match that region.`
    });
  }

  const expectedValue = rows.length;
  return baseProblem(module, {
    type: "formula",
    sheet,
    prompt: "Count numeric entries in the Units column.",
    expectedFormula: "=COUNT(D2:D10)",
    expectedValue,
    requiredFunctions: ["COUNT"],
    requiredTokens: ["D2:D10"],
    solution: "=COUNT(D2:D10)",
    hint: "COUNT ignores text and blanks; aim it at the numeric Units range.",
    explanation: `There are ${expectedValue} numeric unit values.`
  });
}

function logicProblem(module) {
  const title = module.title.toLowerCase();
  const rows = makeSalesRows(8);
  const sheet = {
    nameBox: "F2",
    headers: ["Rep", "Region", "Units", "Revenue", "Target"],
    rows: rows.map((row) => [row.rep, row.region, row.units, row.revenue, row.revenue - randomFrom([-900, -400, 300, 800])]),
    formulaPreview: "Enter your formula in F2"
  };
  const first = sheet.rows[0];

  if (title.includes("true")) {
    const expectedText = first[3] > first[4] ? "TRUE" : "FALSE";
    return baseProblem(module, {
      type: "choice",
      sheet,
      options: ["TRUE", "FALSE"],
      prompt: `For row 2, what does <strong>=D2&gt;E2</strong> return?`,
      expectedText,
      solution: expectedText,
      hint: "Compare the revenue number in D2 with the target in E2.",
      explanation: `${NUMBER.format(first[3])} ${first[3] > first[4] ? "is greater than" : "is not greater than"} ${NUMBER.format(first[4])}.`
    });
  }

  if (title.includes("and, or") || title.includes("xor")) {
    const expectedValue = rows.filter((row) => row.units >= 20 && row.revenue >= 5000).length;
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "In F2, return TRUE when row 2 has Units at least 20 and Revenue at least 5000.",
      expectedFormula: "=AND(C2>=20,D2>=5000)",
      expectedValue: first[2] >= 20 && first[3] >= 5000 ? "TRUE" : "FALSE",
      requiredFunctions: ["AND"],
      requiredTokens: ["C2>=20", "D2>=5000"],
      solution: "=AND(C2>=20,D2>=5000)",
      hint: "AND returns TRUE only when both logical tests are TRUE.",
      explanation: `${expectedValue} rows in the sample meet both thresholds.`
    });
  }

  if (title.includes("is functions")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "In F2, test whether the Rep value in A2 is text.",
      expectedFormula: "=ISTEXT(A2)",
      expectedValue: "TRUE",
      requiredFunctions: ["ISTEXT"],
      requiredTokens: ["A2"],
      solution: "=ISTEXT(A2)",
      hint: "The IS family returns TRUE or FALSE after testing the cell type.",
      explanation: "A2 contains a name, so ISTEXT returns TRUE."
    });
  }

  if (title.includes("ifs")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "In F2, grade Revenue: 8000 or more is High, 5000 or more is Mid, otherwise Low.",
      expectedFormula: '=IFS(D2>=8000,"High",D2>=5000,"Mid",TRUE,"Low")',
      expectedValue: first[3] >= 8000 ? "High" : first[3] >= 5000 ? "Mid" : "Low",
      requiredFunctions: ["IFS"],
      requiredTokens: ["D2>=8000", "High", "D2>=5000", "Mid", "TRUE", "Low"],
      solution: '=IFS(D2>=8000,"High",D2>=5000,"Mid",TRUE,"Low")',
      hint: "IFS checks each test in order; TRUE works as the final fallback.",
      explanation: "The first TRUE condition determines the label."
    });
  }

  if (title.includes("switch")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "In F2, convert Region to a manager: North is Noor, South is Sam, East is Eli, West is Wren.",
      expectedFormula: '=SWITCH(B2,"North","Noor","South","Sam","East","Eli","West","Wren")',
      expectedValue: ({ North: "Noor", South: "Sam", East: "Eli", West: "Wren" })[first[1]],
      requiredFunctions: ["SWITCH"],
      requiredTokens: ["B2", "North", "Noor", "South", "Sam", "East", "Eli", "West", "Wren"],
      solution: '=SWITCH(B2,"North","Noor","South","Sam","East","Eli","West","Wren")',
      hint: "SWITCH compares one expression against several exact values.",
      explanation: "SWITCH is cleaner than nested IF when one cell has several exact matches."
    });
  }

  return baseProblem(module, {
    type: "formula",
    sheet,
    prompt: "In F2, return Hit when Revenue is greater than or equal to Target, otherwise Miss.",
    expectedFormula: '=IF(D2>=E2,"Hit","Miss")',
    expectedValue: first[3] >= first[4] ? "Hit" : "Miss",
    requiredFunctions: ["IF"],
    requiredTokens: ["D2>=E2", "Hit", "Miss"],
    solution: '=IF(D2>=E2,"Hit","Miss")',
    hint: "IF takes logical_test, value_if_true, and value_if_false.",
    explanation: "The formula creates a readable status from a TRUE/FALSE test."
  });
}

function lookupProblem(module) {
  const title = module.title.toLowerCase();
  const products = makeProductRows();
  const target = products[randomInt(1, products.length - 2)];
  const sheet = {
    nameBox: "G2",
    headers: ["SKU", "Product", "Tier", "Price", "Stock"],
    rows: products.map((row) => [row.sku, row.product, row.tier, row.price, row.stock]),
    formulaPreview: "Enter your formula in G2"
  };

  if (title.includes("hlookup")) {
    const table = {
      nameBox: "B7",
      headers: ["Field", "A-101", "A-102", "A-103", "A-104"],
      rows: [
        ["Product", "Monitor", "Keyboard", "Dock", "Mouse"],
        ["Price", 249, 84, 179, 45],
        ["Stock", 32, 55, 18, 80]
      ],
      formulaPreview: "Enter your formula in B7"
    };
    return baseProblem(module, {
      type: "formula",
      sheet: table,
      prompt: "Use HLOOKUP to return the Price for SKU A-103 from the horizontal table.",
      expectedFormula: '=HLOOKUP("A-103",B1:E4,3,FALSE)',
      expectedValue: 179,
      requiredFunctions: ["HLOOKUP"],
      requiredTokens: ["A-103", "B1:E4", "3", "FALSE"],
      solution: '=HLOOKUP("A-103",B1:E4,3,FALSE)',
      hint: "HLOOKUP searches across the first row, then returns from the row index.",
      explanation: "A-103 is in the third SKU column; the price row returns 179."
    });
  }

  if (title.includes("xlookup")) {
    const wildcard = title.includes("wildcard");
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: wildcard
        ? `Use XLOOKUP with wildcards to return Price for the product that starts with <strong>${target.product.slice(0, 3)}</strong>.`
        : `Use XLOOKUP to return Price for SKU <strong>${target.sku}</strong>.`,
      expectedFormula: wildcard
        ? `=XLOOKUP("${target.product.slice(0, 3)}*",B2:B8,D2:D8,,2)`
        : `=XLOOKUP("${target.sku}",A2:A8,D2:D8)`,
      expectedValue: target.price,
      requiredFunctions: ["XLOOKUP"],
      requiredTokens: wildcard ? [`${target.product.slice(0, 3)}*`, "B2:B8", "D2:D8"] : [target.sku, "A2:A8", "D2:D8"],
      solution: wildcard ? `=XLOOKUP("${target.product.slice(0, 3)}*",B2:B8,D2:D8,,2)` : `=XLOOKUP("${target.sku}",A2:A8,D2:D8)`,
      hint: wildcard ? "XLOOKUP uses match_mode 2 for wildcard matching." : "XLOOKUP separates the lookup array and return array.",
      explanation: `${target.product} has a price of ${CURRENCY.format(target.price)}.`
    });
  }

  if (title.includes("match") && !title.includes("index match")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: `Use MATCH to find the position of SKU <strong>${target.sku}</strong> in A2:A8.`,
      expectedFormula: `=MATCH("${target.sku}",A2:A8,0)`,
      expectedValue: products.findIndex((row) => row.sku === target.sku) + 1,
      requiredFunctions: ["MATCH"],
      requiredTokens: [target.sku, "A2:A8", "0"],
      solution: `=MATCH("${target.sku}",A2:A8,0)`,
      hint: "Use match_type 0 for an exact match.",
      explanation: "MATCH returns a relative position inside the lookup range."
    });
  }

  if (title.includes("index") && !title.includes("index match")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Use INDEX to return the value in the Price column, third data row.",
      expectedFormula: "=INDEX(D2:D8,3)",
      expectedValue: products[2].price,
      requiredFunctions: ["INDEX"],
      requiredTokens: ["D2:D8", "3"],
      solution: "=INDEX(D2:D8,3)",
      hint: "INDEX returns a value by position from a range.",
      explanation: `The third price is ${CURRENCY.format(products[2].price)}.`
    });
  }

  if (title.includes("index match")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: `Use INDEX MATCH to return Stock for SKU <strong>${target.sku}</strong>.`,
      expectedFormula: `=INDEX(E2:E8,MATCH("${target.sku}",A2:A8,0))`,
      expectedValue: target.stock,
      requiredFunctions: ["INDEX", "MATCH"],
      requiredTokens: ["E2:E8", target.sku, "A2:A8", "0"],
      solution: `=INDEX(E2:E8,MATCH("${target.sku}",A2:A8,0))`,
      hint: "MATCH finds the row position; INDEX returns Stock from that position.",
      explanation: `${target.sku} has ${target.stock} units in stock.`
    });
  }

  const approximate = title.includes("approximate");
  if (approximate) {
    const bands = {
      nameBox: "F2",
      headers: ["Minimum Units", "Discount"],
      rows: [[0, "0%"], [10, "3%"], [25, "7%"], [50, "12%"], [100, "18%"]],
      formulaPreview: "Enter your formula in F2"
    };
    return baseProblem(module, {
      type: "formula",
      sheet: bands,
      prompt: "Use approximate VLOOKUP to return the discount for 64 units.",
      expectedFormula: "=VLOOKUP(64,A2:B6,2,TRUE)",
      expectedValue: "12%",
      requiredFunctions: ["VLOOKUP"],
      requiredTokens: ["64", "A2:B6", "2", "TRUE"],
      solution: "=VLOOKUP(64,A2:B6,2,TRUE)",
      hint: "Approximate match uses the largest first-column value less than or equal to the lookup value.",
      explanation: "64 falls in the 50-unit discount band."
    });
  }

  return baseProblem(module, {
    type: "formula",
    sheet,
    prompt: `Use VLOOKUP to return Price for SKU <strong>${target.sku}</strong>.`,
    expectedFormula: `=VLOOKUP("${target.sku}",A2:E8,4,FALSE)`,
    expectedValue: target.price,
    requiredFunctions: ["VLOOKUP"],
    requiredTokens: [target.sku, "A2:E8", "4", "FALSE"],
    solution: `=VLOOKUP("${target.sku}",A2:E8,4,FALSE)`,
    hint: "The lookup value must be in the first column of the table array.",
    explanation: `${target.product} has a price of ${CURRENCY.format(target.price)}.`
  });
}

function textProblem(module) {
  const title = module.title.toLowerCase();
  const rows = [
    ["INV-2026-1048", "maya.chang@northwind.com", "  budget review  "],
    ["ORD-2026-2105", "sam.patel@northwind.com", "monthly close"],
    ["RET-2026-3108", "eli.ng@northwind.com", "sales check"]
  ];
  const sheet = {
    nameBox: "D2",
    headers: ["Code", "Email", "Phrase"],
    rows,
    formulaPreview: "Enter your formula in D2"
  };

  if (title.includes("mid")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Extract the year from A2.",
      expectedFormula: "=MID(A2,5,4)",
      expectedValue: "2026",
      requiredFunctions: ["MID"],
      requiredTokens: ["A2", "5", "4"],
      solution: "=MID(A2,5,4)",
      hint: "MID needs text, start number, and number of characters.",
      explanation: "The year begins at character 5 and is 4 characters long."
    });
  }

  if (title.includes("find")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Find the position of the @ symbol in B2.",
      expectedFormula: '=FIND("@",B2)',
      expectedValue: rows[0][1].indexOf("@") + 1,
      requiredFunctions: ["FIND"],
      requiredTokens: ["@", "B2"],
      solution: '=FIND("@",B2)',
      hint: "FIND is case-sensitive and returns the character position.",
      explanation: "The @ symbol separates the user name and domain."
    });
  }

  if (title.includes("search")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Search for the text WIND inside B2, ignoring case.",
      expectedFormula: '=SEARCH("WIND",B2)',
      expectedValue: rows[0][1].toLowerCase().indexOf("wind") + 1,
      requiredFunctions: ["SEARCH"],
      requiredTokens: ["WIND", "B2"],
      solution: '=SEARCH("WIND",B2)',
      hint: "SEARCH is not case-sensitive.",
      explanation: "SEARCH can find text without matching capitalization."
    });
  }

  if (title.includes("concat")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Join A2, a space, and B2 into one text string.",
      expectedFormula: '=CONCAT(A2," ",B2)',
      expectedValue: `${rows[0][0]} ${rows[0][1]}`,
      requiredFunctions: ["CONCAT"],
      requiredTokens: ["A2", "B2"],
      solution: '=CONCAT(A2," ",B2)',
      hint: "CONCAT combines text values in the order you provide them.",
      explanation: "The formula creates one label from the code and email."
    });
  }

  if (title.includes("textjoin")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Join A2:C2 with a comma and space, ignoring blanks.",
      expectedFormula: '=TEXTJOIN(", ",TRUE,A2:C2)',
      expectedValue: rows[0].join(", "),
      requiredFunctions: ["TEXTJOIN"],
      requiredTokens: [", ", "TRUE", "A2:C2"],
      solution: '=TEXTJOIN(", ",TRUE,A2:C2)',
      hint: "TEXTJOIN starts with delimiter, ignore_empty, then text values.",
      explanation: "TEXTJOIN is best when combining several cells with the same delimiter."
    });
  }

  if (title.includes("upper") || title.includes("lower") || title.includes("proper")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Convert C2 to proper case.",
      expectedFormula: "=PROPER(C2)",
      expectedValue: "  Budget Review  ",
      requiredFunctions: ["PROPER"],
      requiredTokens: ["C2"],
      solution: "=PROPER(C2)",
      hint: "PROPER capitalizes the first letter of each word.",
      explanation: "Case functions change capitalization without changing the source cell."
    });
  }

  if (title.includes("substitute")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Replace hyphens in A2 with slashes.",
      expectedFormula: '=SUBSTITUTE(A2,"-","/")',
      expectedValue: rows[0][0].replaceAll("-", "/"),
      requiredFunctions: ["SUBSTITUTE"],
      requiredTokens: ["A2", "-", "/"],
      solution: '=SUBSTITUTE(A2,"-","/")',
      hint: "SUBSTITUTE swaps old_text for new_text.",
      explanation: "The text changes from code-style hyphens to slash separators."
    });
  }

  if (title.includes("textbefore")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Return the part of B2 before the @ symbol.",
      expectedFormula: '=TEXTBEFORE(B2,"@")',
      expectedValue: "maya.chang",
      requiredFunctions: ["TEXTBEFORE"],
      requiredTokens: ["B2", "@"],
      solution: '=TEXTBEFORE(B2,"@")',
      hint: "TEXTBEFORE returns everything before a delimiter.",
      explanation: "The username is the text before @."
    });
  }

  return baseProblem(module, {
    type: "formula",
    sheet,
    prompt: "Return the first three characters from A2.",
    expectedFormula: "=LEFT(A2,3)",
    expectedValue: "INV",
    requiredFunctions: ["LEFT"],
    requiredTokens: ["A2", "3"],
    solution: "=LEFT(A2,3)",
    hint: "LEFT starts from the beginning of the string.",
    explanation: "The first three characters identify the code type."
  });
}

function dateProblem(module) {
  const title = module.title.toLowerCase();
  const sheet = {
    nameBox: "D2",
    headers: ["Start", "End", "Terms"],
    rows: [
      ["2026-01-15", "2026-04-20", 30],
      ["2026-02-01", "2026-05-18", 45],
      ["2026-03-10", "2026-07-01", 60]
    ],
    formulaPreview: "Enter your formula in D2"
  };

  if (title.includes("today")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Return today's date with a dynamic formula.",
      expectedFormula: "=TODAY()",
      expectedValue: TODAY.toLocaleDateString("en-US"),
      requiredFunctions: ["TODAY"],
      requiredTokens: [],
      solution: "=TODAY()",
      hint: "TODAY takes no arguments.",
      explanation: "TODAY updates automatically when the workbook recalculates."
    });
  }

  if (title.includes("datedif")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Return the number of complete months between A2 and B2.",
      expectedFormula: '=DATEDIF(A2,B2,"m")',
      expectedValue: 3,
      requiredFunctions: ["DATEDIF"],
      requiredTokens: ["A2", "B2", "m"],
      solution: '=DATEDIF(A2,B2,"m")',
      hint: 'Use unit "m" for complete months.',
      explanation: "DATEDIF is useful for age and tenure style calculations."
    });
  }

  if (title.includes("days")) {
    return baseProblem(module, {
      type: "formula",
      sheet,
      prompt: "Return the number of days between B2 and A2.",
      expectedFormula: "=DAYS(B2,A2)",
      expectedValue: 95,
      requiredFunctions: ["DAYS"],
      requiredTokens: ["B2", "A2"],
      solution: "=DAYS(B2,A2)",
      hint: "DAYS uses end_date first, then start_date.",
      explanation: "The function returns the day count between two dates."
    });
  }

  return baseProblem(module, {
    type: "formula",
    sheet,
    prompt: "Create the date January 15, 2026.",
    expectedFormula: "=DATE(2026,1,15)",
    expectedValue: "2026-01-15",
    requiredFunctions: ["DATE"],
    requiredTokens: ["2026", "1", "15"],
    solution: "=DATE(2026,1,15)",
    hint: "DATE uses year, month, day.",
    explanation: "DATE is safer than typing dates as text."
  });
}

function statsProblem(module) {
  const title = module.title.toLowerCase();
  const values = [18, 25, 25, 31, 42, 57, 63, 74, 88];
  const sheet = {
    nameBox: "C2",
    headers: ["Order", "Units"],
    rows: values.map((value, index) => [`Order ${index + 1}`, value]),
    formulaPreview: "Enter your formula in C2"
  };

  if (title.includes("average")) {
    return statFormula(module, sheet, "AVERAGE", "=AVERAGE(B2:B10)", Math.round(averageValue(values)), "Average the unit values in B2:B10.");
  }
  if (title.includes("large")) {
    return statFormula(module, sheet, "LARGE", "=LARGE(B2:B10,2)", 74, "Return the second largest Units value.");
  }
  if (title.includes("small")) {
    return statFormula(module, sheet, "SMALL", "=SMALL(B2:B10,2)", 25, "Return the second smallest Units value.");
  }
  if (title.includes("min")) {
    return statFormula(module, sheet, "MIN", "=MIN(B2:B10)", 18, "Return the smallest Units value.");
  }
  if (title.includes("max")) {
    return statFormula(module, sheet, "MAX", "=MAX(B2:B10)", 88, "Return the largest Units value.");
  }
  if (title.includes("floor")) {
    return statFormula(module, sheet, "FLOOR", "=FLOOR(B5,10)", 30, "Round B5 down to the nearest multiple of 10.");
  }
  if (title.includes("ceiling")) {
    return statFormula(module, sheet, "CEILING", "=CEILING(B5,10)", 40, "Round B5 up to the nearest multiple of 10.");
  }
  if (title.includes("odd")) {
    return statFormula(module, sheet, "ODD", "=ODD(B2)", 19, "Round B2 up to the next odd integer.");
  }
  if (title.includes("even")) {
    return statFormula(module, sheet, "EVEN", "=EVEN(B2)", 18, "Round B2 up to the next even integer.");
  }
  if (title.includes("median")) {
    return statFormula(module, sheet, "MEDIAN", "=MEDIAN(B2:B10)", 42, "Return the middle Units value.");
  }
  if (title.includes("mode")) {
    return statFormula(module, sheet, "MODE", "=MODE.SNGL(B2:B10)", 25, "Return the most common Units value.");
  }
  return statFormula(module, sheet, "MAX", "=MAX(B2:B10)", 88, "Return the largest Units value.");
}

function statFormula(module, sheet, fn, formula, value, prompt) {
  return baseProblem(module, {
    type: "formula",
    sheet,
    prompt,
    expectedFormula: formula,
    expectedValue: value,
    requiredFunctions: [fn],
    requiredTokens: formula.match(/\((.*)\)/)?.[1]?.split(",").filter(Boolean) ?? [],
    solution: formula,
    hint: `${fn} is the function name; check the range and any extra argument.`,
    explanation: `The expected result is ${value}.`
  });
}

function shortcutProblem(module) {
  const title = module.title.toLowerCase();
  const sheet = {
    nameBox: "B4",
    headers: ["Month", "Budget", "Actual", "Variance", "Status"],
    rows: [
      ["Jan", 12000, 12840, 840, "Over"],
      ["Feb", 13600, 12950, -650, "Under"],
      ["Mar", 14200, 14880, 680, "Over"],
      ["Apr", 15000, 14900, -100, "Under"]
    ],
    formulaPreview: "Shortcut practice"
  };

  let shortcut = "Ctrl+ArrowRight";
  let prompt = "The active cell is B4. Press the shortcut that jumps to the right edge of the current data region.";
  let hint = "Hold Ctrl, then press the right arrow.";

  if (title.includes("fill right")) {
    shortcut = "Ctrl+R";
    prompt = "A formula is selected in B4 and blank cells C4:E4 are selected beside it. Press the shortcut to fill right.";
    hint = "Fill Right uses R for right.";
  } else if (title.includes("fill down")) {
    shortcut = "Ctrl+D";
    prompt = "A formula is selected in B4 and blank cells below it are selected. Press the shortcut to fill down.";
    hint = "Fill Down uses D for down.";
  } else if (title.includes("row and column")) {
    shortcut = "Shift+Space";
    prompt = "Press the shortcut to select the entire row of the active cell.";
    hint = "Rows are selected with Shift plus Space.";
  } else if (title.includes("larger")) {
    shortcut = "Ctrl+Shift+ArrowDown";
    prompt = "The active cell is B2. Press the shortcut to extend the selection down to the edge of the data.";
    hint = "Use Ctrl to jump and Shift to extend the selection.";
  } else if (title.includes("formatting")) {
    shortcut = "Ctrl+B";
    prompt = "Press the common shortcut for bold text formatting.";
    hint = "This is the same bold shortcut used in many apps.";
  } else if (title.includes("cut") || title.includes("copy") || title.includes("paste")) {
    shortcut = "Ctrl+C";
    prompt = "Press the shortcut to copy the selected cells.";
    hint = "Copy starts with C.";
  } else if (title.includes("data")) {
    shortcut = "Ctrl+Shift+L";
    prompt = "Press the shortcut to toggle filters on a selected data range.";
    hint = "Filter toggling is Ctrl+Shift+L.";
  } else if (title.includes("arrow keys")) {
    shortcut = "ArrowDown";
    prompt = "Press the key that moves the active cell one row down.";
    hint = "Use the plain arrow key with no modifier.";
  } else if (title.includes("number")) {
    shortcut = "Ctrl+Shift+4";
    prompt = "Press the shortcut for Currency number format.";
    hint = "Currency uses the $ key, which shares 4 on US keyboards.";
  }

  return baseProblem(module, {
    type: "shortcut",
    sheet,
    prompt,
    shortcut,
    solution: shortcut,
    hint,
    answerLabel: "Shortcut capture",
    explanation: `${shortcut} is the expected shortcut for this action.`
  });
}

function conceptProblem(module) {
  const title = module.title.toLowerCase();
  const sheet = {
    nameBox: "C4",
    headers: ["Task", "Owner", "Status", "Due"],
    rows: [
      ["Clean sales data", "Maya", "Done", "2026-05-21"],
      ["Build pivot", "Sam", "Open", "2026-05-24"],
      ["Review formulas", "Eli", "Open", "2026-05-27"]
    ],
    formulaPreview: "Concept check"
  };

  if (title.includes("pivot")) {
    return baseProblem(module, {
      type: "choice",
      sheet,
      options: ["Rows, Columns, Values, Filters", "Fonts, Borders, Themes, Shapes", "Sheets, Workbooks, Windows, Views"],
      prompt: "Which field areas are used to build a basic PivotTable layout?",
      expectedText: "Rows, Columns, Values, Filters",
      solution: "Rows, Columns, Values, Filters",
      hint: "Think of where fields are dropped in the PivotTable Fields pane.",
      explanation: "Those four areas define the structure and calculations of a PivotTable."
    });
  }

  if (title.includes("table filters")) {
    return baseProblem(module, {
      type: "choice",
      sheet,
      options: ["Filter arrows in the header row", "Merged title cells", "A hidden worksheet"],
      prompt: "What visual cue tells you an Excel Table can be filtered?",
      expectedText: "Filter arrows in the header row",
      solution: "Filter arrows in the header row",
      hint: "Look at the header row after formatting data as a table.",
      explanation: "Tables add filter controls to the header row."
    });
  }

  if (title.includes("tables skill summary")) {
    return baseProblem(module, {
      type: "choice",
      sheet,
      options: ["Structured references and built-in filters", "Manual page breaks only", "A different file format"],
      prompt: "What is a key advantage of converting a range into an Excel Table?",
      expectedText: "Structured references and built-in filters",
      solution: "Structured references and built-in filters",
      hint: "Tables make ranges easier to read, filter, and expand.",
      explanation: "Excel Tables expand with new rows and add filterable, named structure to the data."
    });
  }

  if (title.includes("worksheets")) {
    return baseProblem(module, {
      type: "choice",
      sheet,
      options: ["A tab inside a workbook", "A single formula", "A chart axis"],
      prompt: "In Excel, what is a worksheet?",
      expectedText: "A tab inside a workbook",
      solution: "A tab inside a workbook",
      hint: "A workbook can hold many of them.",
      explanation: "Each worksheet is a grid tab inside the workbook file."
    });
  }

  if (title.includes("conditional formatting")) {
    return baseProblem(module, {
      type: "choice",
      sheet,
      options: ["Format cells based on rules", "Delete duplicate rows", "Protect workbook passwords"],
      prompt: "What does Conditional Formatting do?",
      expectedText: "Format cells based on rules",
      solution: "Format cells based on rules",
      hint: "The formatting changes when a condition is met.",
      explanation: "It highlights values, trends, and exceptions automatically."
    });
  }

  if (title.includes("number formatting")) {
    return shortcutProblem(module);
  }

  return baseProblem(module, {
    type: "formula",
    sheet,
    prompt: "The highlighted active cell is in column C and row 4. Type its cell address.",
    expectedText: "C4",
    expectedValue: "C4",
    solution: "C4",
    hint: "Cell addresses use the column letter first, then the row number.",
    explanation: "Column C plus row 4 gives C4."
  });
}

function makeSalesRows(count) {
  const reps = ["Maya", "Sam", "Eli", "Nora", "Theo", "Ava", "Liam", "Iris", "Noah", "Zara"];
  const regions = ["North", "South", "East", "West"];
  const channels = ["Online", "Retail"];
  return Array.from({ length: count }, (_, index) => {
    const units = randomInt(8, 34);
    const price = randomInt(145, 340);
    return {
      rep: reps[index % reps.length],
      region: regions[(index + randomInt(0, 3)) % regions.length],
      channel: channels[(index + randomInt(0, 1)) % channels.length],
      units,
      revenue: units * price
    };
  });
}

function makeProductRows() {
  return [
    { sku: "P-101", product: "Monitor", tier: "Pro", price: 249, stock: 32 },
    { sku: "P-102", product: "Keyboard", tier: "Core", price: 84, stock: 55 },
    { sku: "P-103", product: "Dock", tier: "Pro", price: 179, stock: 18 },
    { sku: "P-104", product: "Mouse", tier: "Core", price: 45, stock: 80 },
    { sku: "P-105", product: "Webcam", tier: "Plus", price: 129, stock: 24 },
    { sku: "P-106", product: "Headset", tier: "Plus", price: 99, stock: 37 },
    { sku: "P-107", product: "Laptop Stand", tier: "Core", price: 62, stock: 43 }
  ];
}

function formulaAssistant(answer, problem) {
  const trimmed = String(answer || "").trim();
  const normalized = normalizeFormula(trimmed);
  if (problem.expectedFormula && !trimmed.startsWith("=")) {
    return "Excel formulas usually start with <code>=</code>. Add it before the function name.";
  }

  const missingFunctions = (problem.requiredFunctions || []).filter((fn) => !normalized.includes(`${fn.toUpperCase()}(`) && !normalized.includes(`${fn.toUpperCase()}.`));
  if (missingFunctions.length) {
    return `The formula should use <code>${missingFunctions.join(", ")}</code>.`;
  }

  const missingTokens = (problem.requiredTokens || []).filter((token) => !normalized.includes(normalizeFormula(token)));
  if (missingTokens.length) {
    return `The formula is close, but it is missing <code>${escapeHTML(missingTokens.slice(0, 3).join(", "))}</code>.`;
  }

  if (normalized.includes(";")) {
    return "This checker expects comma separators. Try replacing semicolons with commas.";
  }

  return "Check the range, criteria order, and any exact-match argument.";
}

function normalizeFormula(value) {
  return String(value || "")
    .trim()
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, "")
    .replace(/'/g, '"')
    .toUpperCase();
}

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toUpperCase();
}

function normalizeValue(value) {
  return String(value ?? "")
    .trim()
    .replace(/[$,%]/g, "")
    .replace(/,/g, "")
    .toUpperCase();
}

function normalizeShortcut(value) {
  return String(value || "")
    .replace(/\s+/g, "")
    .replace(/CONTROL/gi, "CTRL")
    .replace(/ARROWRIGHT/gi, "RIGHT")
    .replace(/ARROWLEFT/gi, "LEFT")
    .replace(/ARROWUP/gi, "UP")
    .replace(/ARROWDOWN/gi, "DOWN")
    .toUpperCase();
}

function shortcutFromEvent(event) {
  const keys = [];
  if (event.ctrlKey) keys.push("Ctrl");
  if (event.altKey) keys.push("Alt");
  if (event.shiftKey) keys.push("Shift");
  if (event.metaKey) keys.push("Meta");

  const keyMap = {
    " ": "Space",
    ArrowRight: "ArrowRight",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowDown: "ArrowDown"
  };
  const key = keyMap[event.key] || event.key.toUpperCase();
  if (!["CONTROL", "SHIFT", "ALT", "META"].includes(key.toUpperCase())) keys.push(key);
  return keys.join("+");
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFrom(values) {
  return values[randomInt(0, values.length - 1)];
}

function averageValue(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + Number(value || 0), 0) / values.length;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatCell(value) {
  if (typeof value === "number") return NUMBER.format(value);
  return value;
}

function reviewLabel(timestamp) {
  if (!timestamp || timestamp <= Date.now()) return "Now";
  const minutes = Math.round((timestamp - Date.now()) / 60000);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.round(minutes / 60);
  if (hours < 48) return `${hours}h`;
  return `${Math.round(hours / 24)}d`;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeInlineHTML(value) {
  const template = document.createElement("template");
  template.innerHTML = String(value ?? "");
  const allowed = new Set(["B", "BR", "CODE", "EM", "I", "SMALL", "STRONG", "SUB", "SUP", "U", "A"]);

  function clean(node) {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent);
    if (node.nodeType !== Node.ELEMENT_NODE) return document.createTextNode("");
    if (!allowed.has(node.tagName)) {
      const fragment = document.createDocumentFragment();
      node.childNodes.forEach((child) => fragment.append(clean(child)));
      return fragment;
    }
    const element = document.createElement(node.tagName.toLowerCase());
    if (node.tagName === "A") {
      const href = node.getAttribute("href") || "";
      if (/^https:\/\//i.test(href)) {
        element.setAttribute("href", href);
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "noopener");
      }
    }
    node.childNodes.forEach((child) => element.append(clean(child)));
    return element;
  }

  const fragment = document.createDocumentFragment();
  template.content.childNodes.forEach((child) => fragment.append(clean(child)));
  const output = document.createElement("div");
  output.append(fragment);
  return output.innerHTML;
}

function stripHTML(value) {
  const template = document.createElement("template");
  template.innerHTML = String(value ?? "");
  return template.content.textContent.trim();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    return { ...structuredClone(defaultState), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
