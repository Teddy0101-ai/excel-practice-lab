"use strict";

const SQL_STORAGE_KEY = "excel-practice-lab-sql-state-v1";
const SQL_POINTS_PER_CORRECT = 15;

const sqlLessons = window.SQL_QUESTIONS?.modules || [];

const defaultSqlState = {
  activeLessonId: 1,
  selectedFilter: "all",
  search: "",
  userPoints: 0,
  totalAttempts: 0,
  firstTryCorrect: 0,
  lessonStats: {}
};

let state = loadState();
let currentProblem = null;
let attemptStarted = false;
let readyForContinue = false;

const elements = {
  lessonSearch: document.querySelector("#lessonSearch"),
  lessonList: document.querySelector("#lessonList"),
  dashboardView: document.querySelector("#dashboardView"),
  practiceView: document.querySelector("#practiceView"),
  screenTitle: document.querySelector("#screenTitle"),
  nextTitle: document.querySelector("#nextTitle"),
  nextReason: document.querySelector("#nextReason"),
  nextBadge: document.querySelector("#nextBadge"),
  nextProgressBar: document.querySelector("#nextProgressBar"),
  masteryStat: document.querySelector("#masteryStat"),
  pointsStat: document.querySelector("#pointsStat"),
  completedStat: document.querySelector("#completedStat"),
  accuracyStat: document.querySelector("#accuracyStat"),
  startRecommendedBtn: document.querySelector("#startRecommendedBtn"),
  dashboardStartBtn: document.querySelector("#dashboardStartBtn"),
  resumeLessonBtn: document.querySelector("#resumeLessonBtn"),
  resetProgressBtn: document.querySelector("#resetProgressBtn"),
  backToDashboardBtn: document.querySelector("#backToDashboardBtn"),
  lessonMeta: document.querySelector("#lessonMeta"),
  lessonTitle: document.querySelector("#lessonTitle"),
  questionArea: document.querySelector("#questionArea"),
  setupTables: document.querySelector("#setupTables"),
  resultTables: document.querySelector("#resultTables"),
  answerForm: document.querySelector("#answerForm"),
  answerLabel: document.querySelector("#answerLabel"),
  answerInput: document.querySelector("#answerInput"),
  sqlEditorWrap: document.querySelector("#sqlEditorWrap"),
  submitAnswerBtn: document.querySelector("#submitAnswerBtn"),
  hintBtn: document.querySelector("#hintBtn"),
  skipQuestionBtn: document.querySelector("#skipQuestionBtn"),
  completeLessonBtn: document.querySelector("#completeLessonBtn"),
  feedbackBox: document.querySelector("#feedbackBox"),
  lessonMastery: document.querySelector("#lessonMastery"),
  lessonProgressBar: document.querySelector("#lessonProgressBar"),
  lessonAttempts: document.querySelector("#lessonAttempts"),
  lessonAccuracy: document.querySelector("#lessonAccuracy"),
  lessonScreen: document.querySelector("#lessonScreen"),
  lessonTarget: document.querySelector("#lessonTarget")
};

init();

function init() {
  elements.lessonSearch.value = state.search;
  bindEvents();
  renderAll();
}

function bindEvents() {
  elements.lessonSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    saveState();
    renderLessonList();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedFilter = button.dataset.filter;
      saveState();
      renderFilterButtons();
      renderLessonList();
    });
  });

  elements.startRecommendedBtn.addEventListener("click", () => startLesson(getRecommendation().lesson.localId));
  elements.dashboardStartBtn.addEventListener("click", () => startLesson(getRecommendation().lesson.localId));
  elements.resumeLessonBtn.addEventListener("click", () => startLesson(state.activeLessonId || getRecommendation().lesson.localId));
  elements.backToDashboardBtn.addEventListener("click", showDashboard);
  elements.resetProgressBtn.addEventListener("click", resetProgress);
  elements.hintBtn.addEventListener("click", showHint);
  elements.skipQuestionBtn.addEventListener("click", skipQuestion);
  elements.completeLessonBtn.addEventListener("click", () => completeLesson(state.activeLessonId, { advance: true }));

  elements.answerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (readyForContinue) {
      continueOriginalFlow();
      return;
    }
    checkAnswer();
  });
}

function renderAll() {
  renderFilterButtons();
  renderLessonList();
  renderDashboard();
}

function renderFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.selectedFilter);
  });
}

function renderLessonList() {
  const query = state.search.trim().toLowerCase();
  const filter = state.selectedFilter;
  const items = sqlLessons.filter((lesson) => {
    const stats = getStats(lesson.localId);
    const searchable = `${lesson.localId} ${lesson.sourceId} ${lesson.title} ${lesson.category}`.toLowerCase();
    const matchesFilter = filter === "all" || (filter === "open" && !stats.completed) || (filter === "done" && stats.completed);
    return searchable.includes(query) && matchesFilter;
  });

  elements.lessonList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No matching SQL lessons yet.";
    elements.lessonList.append(empty);
    return;
  }

  items.forEach((lesson) => {
    const stats = getStats(lesson.localId);
    const button = document.createElement("button");
    button.className = "module-button";
    button.classList.toggle("active", lesson.localId === state.activeLessonId && !elements.practiceView.classList.contains("hidden"));
    button.type = "button";
    button.innerHTML = `
      <span class="module-number">${lesson.localId}</span>
      <span>
        <span class="module-title">${escapeHTML(lesson.title)}</span>
        <span class="module-category">source lesson ${lesson.sourceId}</span>
      </span>
      <span class="module-score">${Math.round(stats.score)}%</span>
    `;
    button.addEventListener("click", () => startLesson(lesson.localId));
    elements.lessonList.append(button);
  });
}

function renderDashboard() {
  const recommendation = getRecommendation();
  const stats = getStats(recommendation.lesson.localId);
  const summary = getCourseSummary();

  elements.nextTitle.textContent = `${recommendation.lesson.localId}. ${recommendation.lesson.title}`;
  elements.nextReason.textContent = recommendation.reason;
  elements.nextBadge.textContent = stats.completed ? "Complete" : `${Math.round(stats.score)}% score`;
  elements.nextProgressBar.style.width = `${stats.score}%`;

  elements.masteryStat.textContent = `${Math.round(summary.completePercent)}%`;
  elements.pointsStat.textContent = String(state.userPoints || 0);
  elements.completedStat.textContent = String(summary.completed);
  elements.accuracyStat.textContent = `${summary.accuracy}%`;
}

function startLesson(lessonId) {
  state.activeLessonId = lessonId;
  saveState();
  elements.dashboardView.classList.add("hidden");
  elements.practiceView.classList.remove("hidden");
  makeProblem(lessonId);
}

function showDashboard() {
  elements.practiceView.classList.add("hidden");
  elements.dashboardView.classList.remove("hidden");
  elements.feedbackBox.classList.add("hidden");
  elements.resultTables.classList.add("hidden");
  elements.screenTitle.textContent = "SQL dashboard";
  renderAll();
}

function makeProblem(lessonId) {
  const lesson = sqlLessons.find((item) => item.localId === lessonId) || sqlLessons[0];
  const stats = getStats(lesson.localId);
  const questionCount = getQuestionCount(lesson.localId);

  if (stats.currentQuestion > questionCount) {
    stats.currentQuestion = Math.min(4, questionCount);
    state.lessonStats[lesson.localId] = stats;
    saveState();
  }

  const question = lesson.questions[Math.max(0, stats.currentQuestion - 1)] || lesson.questions[0];
  currentProblem = buildProblem(lesson, question);
  attemptStarted = true;
  readyForContinue = false;

  elements.screenTitle.textContent = lesson.title;
  elements.lessonMeta.textContent = `Lesson ${lesson.localId} of ${sqlLessons.length} - source lesson ${lesson.sourceId}`;
  elements.lessonTitle.textContent = lesson.title;
  elements.feedbackBox.className = "feedback hidden";
  elements.feedbackBox.innerHTML = "";
  elements.resultTables.classList.add("hidden");
  elements.resultTables.innerHTML = "";
  elements.answerInput.value = "";
  elements.submitAnswerBtn.textContent = currentProblem.isInfo ? "Continue" : "Check answer";
  elements.hintBtn.classList.toggle("hidden", currentProblem.isInfo);
  elements.skipQuestionBtn.classList.toggle("hidden", currentProblem.isInfo);
  elements.answerLabel.textContent = currentProblem.isInfo ? "Informational screen" : "Your SQL";
  elements.sqlEditorWrap.classList.toggle("hidden", currentProblem.isInfo);
  elements.answerInput.required = !currentProblem.isInfo;

  renderQuestion(currentProblem);
  renderTables(currentProblem.setupTables, elements.setupTables);
  renderLessonStats(lesson.localId);
  renderLessonList();

  if (!currentProblem.isInfo) {
    elements.answerInput.focus();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildProblem(lesson, question) {
  const acceptedAnswers = (question.solution || [])
    .filter((item) => typeof item === "string" && item.trim())
    .map((item) => item.trim());
  return {
    lesson,
    question,
    isInfo: question.type === "i" || acceptedAnswers.length === 0,
    prompt: question.title || "Complete this SQL screen.",
    explanation: question.explanation || "",
    correctAnswer: stripHTML(question.correctAnswer || "") || acceptedAnswers[0] || "",
    acceptedAnswers,
    setupTables: question.setupTables || [],
    resultTables: question.resultTables || []
  };
}

function renderQuestion(problem) {
  elements.questionArea.innerHTML = `
    <article class="question-card">
      <p class="eyebrow">Screen ${problem.question.screen}</p>
      <div class="question-copy">${sanitizeInlineHTML(problem.prompt)}</div>
    </article>
  `;
}

function renderTables(tables, container) {
  container.innerHTML = "";
  const visibleTables = (tables || []).filter(hasVisibleTableData);

  if (!visibleTables.length) {
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  visibleTables.forEach((tableData, index) => {
    const wrapper = document.createElement("section");
    wrapper.className = "sql-table-card";

    const title = document.createElement("h4");
    title.textContent = tableData.title && tableData.title !== "Untitled" ? tableData.title : `Table ${index + 1}`;
    wrapper.append(title);

    const scroll = document.createElement("div");
    scroll.className = "sql-table-scroll";

    const table = document.createElement("table");
    table.className = "sql-data-table";

    if (tableData.headers?.length) {
      const thead = document.createElement("thead");
      const row = document.createElement("tr");
      tableData.headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = formatCell(header);
        row.append(th);
      });
      thead.append(row);
      table.append(thead);
    }

    const tbody = document.createElement("tbody");
    (tableData.rows || []).forEach((rowValues) => {
      const row = document.createElement("tr");
      rowValues.forEach((value) => {
        const td = document.createElement("td");
        td.textContent = formatCell(value);
        row.append(td);
      });
      tbody.append(row);
    });
    table.append(tbody);
    scroll.append(table);
    wrapper.append(scroll);
    container.append(wrapper);
  });
}

function hasVisibleTableData(tableData) {
  const headers = tableData?.headers || [];
  const rows = tableData?.rows || [];
  return [...headers, ...rows.flat()].some((value) => String(value ?? "").trim() !== "");
}

function checkAnswer() {
  if (!currentProblem) return;

  if (currentProblem.isInfo) {
    recordCorrectAnswer({ showFeedback: false });
    continueOriginalFlow();
    return;
  }

  const rawAnswer = elements.answerInput.value;
  if (!rawAnswer.trim()) {
    showFeedback({
      correct: false,
      tone: "warning",
      title: "Give it a try first.",
      message: "Type a SQL answer before checking."
    });
    return;
  }

  const normalizedAnswer = normalizeSql(rawAnswer);
  const correct = currentProblem.acceptedAnswers.some((answer) => normalizeSql(answer) === normalizedAnswer);

  if (correct) {
    const progress = recordCorrectAnswer({ showFeedback: true });
    showFeedback({
      correct: true,
      tone: "success",
      title: progress.completed ? "Lesson complete." : "Correct.",
      message: currentProblem.explanation
        ? sanitizeInlineHTML(currentProblem.explanation)
        : "That matches the source SQL answer key."
    }, progress);
    renderTables(currentProblem.resultTables, elements.resultTables);
    elements.resultTables.classList.remove("hidden");
    readyForContinue = true;
    elements.submitAnswerBtn.textContent = progress.completed ? "Next lesson" : "Continue";
  } else {
    recordIncorrectAnswer();
    showFeedback({
      correct: false,
      tone: "danger",
      title: "Not quite.",
      message: `The source answer key expects something equivalent to <code>${escapeHTML(currentProblem.correctAnswer || currentProblem.acceptedAnswers[0] || "the shown solution")}</code>.`
    });
  }
}

function recordCorrectAnswer() {
  const stats = getStats(currentProblem.lesson.localId);
  const firstTry = attemptStarted;
  stats.attempts += 1;
  stats.correct += 1;
  state.totalAttempts += 1;
  state.userPoints = Number(state.userPoints || 0) + (currentProblem.lesson.sourceId * 3);

  if (firstTry) {
    stats.firstTryCorrect += 1;
    state.firstTryCorrect += 1;
  }

  stats.score = clamp(stats.score + SQL_POINTS_PER_CORRECT, 0, 100);
  stats.mastery = stats.score;
  stats.lastAttempt = Date.now();

  if (stats.score >= 100) {
    stats.completed = true;
  } else {
    stats.currentQuestion += 1;
  }

  attemptStarted = false;
  state.lessonStats[currentProblem.lesson.localId] = stats;
  saveState();
  renderLessonStats(currentProblem.lesson.localId);
  renderLessonList();
  renderDashboard();
  return { completed: stats.completed, score: stats.score };
}

function recordIncorrectAnswer() {
  const stats = getStats(currentProblem.lesson.localId);
  stats.attempts += 1;
  stats.incorrect += 1;
  stats.lastAttempt = Date.now();
  state.totalAttempts += 1;
  attemptStarted = false;
  state.lessonStats[currentProblem.lesson.localId] = stats;
  saveState();
  renderLessonStats(currentProblem.lesson.localId);
  renderLessonList();
  renderDashboard();
}

function showFeedback(result, progress = {}) {
  elements.feedbackBox.className = `feedback ${result.tone || (result.correct ? "success" : "danger")}`;
  elements.feedbackBox.innerHTML = `
    <strong>${escapeHTML(result.title)}</strong>
    <p>${result.message}</p>
    ${progress.score != null ? `<small>${progress.completed ? "Lesson complete" : `Score ${Math.round(progress.score)}%`}</small>` : ""}
  `;
}

function continueOriginalFlow() {
  if (!currentProblem) return;
  const lessonId = currentProblem.lesson.localId;
  const stats = getStats(lessonId);

  if (stats.completed) {
    const next = sqlLessons.find((lesson) => !getStats(lesson.localId).completed) || currentProblem.lesson;
    startLesson(next.localId);
    return;
  }

  makeProblem(lessonId);
}

function skipQuestion() {
  if (!currentProblem || currentProblem.isInfo) return;
  const stats = getStats(currentProblem.lesson.localId);
  stats.currentQuestion += 1;
  stats.lastAttempt = Date.now();
  state.lessonStats[currentProblem.lesson.localId] = stats;
  saveState();

  showFeedback({
    correct: false,
    tone: "warning",
    title: "Skipped.",
    message: `Answer key: <code>${escapeHTML(currentProblem.correctAnswer || currentProblem.acceptedAnswers[0] || "No answer shown")}</code>.`
  });
  renderTables(currentProblem.resultTables, elements.resultTables);
  elements.resultTables.classList.remove("hidden");
  readyForContinue = true;
  elements.submitAnswerBtn.textContent = "Continue";
}

function completeLesson(lessonId, options = {}) {
  const stats = getStats(lessonId);
  stats.score = 100;
  stats.mastery = 100;
  stats.completed = true;
  stats.lastAttempt = Date.now();
  state.lessonStats[lessonId] = stats;
  saveState();

  if (options.advance) {
    const next = sqlLessons.find((lesson) => !getStats(lesson.localId).completed) || sqlLessons[sqlLessons.length - 1];
    startLesson(next.localId);
  } else {
    renderAll();
  }
}

function showHint() {
  if (!currentProblem) return;
  showFeedback({
    correct: false,
    tone: "warning",
    title: "Hint",
    message: currentProblem.correctAnswer
      ? `The source answer key points to <code>${escapeHTML(currentProblem.correctAnswer)}</code>.`
      : "Use the setup tables and prompt wording to shape the query."
  });
}

function renderLessonStats(lessonId) {
  const stats = getStats(lessonId);
  const accuracy = stats.attempts ? Math.round((stats.firstTryCorrect / stats.attempts) * 100) : 0;
  elements.lessonMastery.textContent = `${Math.round(stats.score)}%`;
  elements.lessonProgressBar.style.width = `${stats.score}%`;
  elements.lessonAttempts.textContent = String(stats.attempts);
  elements.lessonAccuracy.textContent = `${accuracy}%`;
  elements.lessonScreen.textContent = String(stats.currentQuestion);
  elements.lessonTarget.textContent = stats.completed
    ? "This SQL lesson is complete. Continue to the next recommended lesson."
    : "Correct answers add 15%. Reach 100% to complete this lesson.";
}

function getRecommendation() {
  const lesson = sqlLessons.find((item) => !getStats(item.localId).completed) || sqlLessons[sqlLessons.length - 1];
  const stats = getStats(lesson.localId);
  const reason = stats.attempts
    ? `Resume screen ${stats.currentQuestion}. SQL lessons follow the visible 1-23 order from the source sidebar.`
    : `Source lesson ${lesson.sourceId}; this is the first incomplete SQL lesson in the mirrored order.`;
  return { lesson, reason };
}

function getCourseSummary() {
  const completed = sqlLessons.filter((lesson) => getStats(lesson.localId).completed).length;
  const accuracy = state.totalAttempts ? Math.round((state.firstTryCorrect / state.totalAttempts) * 100) : 0;
  return {
    completePercent: sqlLessons.length ? (completed / sqlLessons.length) * 100 : 0,
    completed,
    accuracy
  };
}

function getQuestionCount(lessonId) {
  return sqlLessons.find((lesson) => lesson.localId === lessonId)?.questions?.length || 10;
}

function getStats(lessonId) {
  const existing = state.lessonStats[lessonId];
  const base = {
    attempts: 0,
    correct: 0,
    incorrect: 0,
    firstTryCorrect: 0,
    score: 0,
    mastery: 0,
    currentQuestion: 1,
    completed: false,
    lastAttempt: 0
  };

  if (!existing) return base;

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

function resetProgress() {
  const okay = window.confirm("Reset all local SQL progress for this practice site?");
  if (!okay) return;
  state = structuredClone(defaultSqlState);
  saveState();
  showDashboard();
}

function normalizeSql(value) {
  return String(value || "")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function formatCell(value) {
  if (value == null) return "";
  return String(value);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function sanitizeInlineHTML(value) {
  const template = document.createElement("template");
  template.innerHTML = String(value || "");
  const allowed = new Set(["B", "STRONG", "I", "EM", "BR", "CODE", "U"]);
  template.content.querySelectorAll("*").forEach((node) => {
    if (!allowed.has(node.tagName)) {
      node.replaceWith(document.createTextNode(node.textContent));
      return;
    }
    [...node.attributes].forEach((attr) => node.removeAttribute(attr.name));
  });
  return template.innerHTML;
}

function stripHTML(value) {
  const div = document.createElement("div");
  div.innerHTML = String(value || "");
  return div.textContent || "";
}

function loadState() {
  try {
    const raw = localStorage.getItem(SQL_STORAGE_KEY);
    if (!raw) return structuredClone(defaultSqlState);
    return { ...structuredClone(defaultSqlState), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultSqlState);
  }
}

function saveState() {
  localStorage.setItem(SQL_STORAGE_KEY, JSON.stringify(state));
}
