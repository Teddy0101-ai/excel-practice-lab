# Excel Practice Lab

A local static practice website for an 80-module Excel curriculum. It uses a dashboard plus a simulated worksheet trainer, imported practice questions, flexible formula checks, keyboard shortcut capture, and original-style scoring.

The included `question-bank.js` imports the question set using the original page's visible 1-80 module order. Each visible item maps to its real `practice.html?lesson=` id from `recommendedLessonOrder`.

Example: visible module 14, `SUM Functions Skill Summary`, maps to `practice.html?lesson=32`.

## Open it

Open `index.html` in a browser, or serve the folder with any static file server.

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Practice flow

- Lessons follow the visible 1-80 module order from the original practice sidebar.
- Questions advance by original screen order.
- Correct answers add 20% to the lesson score.
- At 100%, the lesson is marked complete and the next incomplete lesson is recommended.
- Formula answers are checked by final value, exact formula, or accepted answer key.

## Re-import questions

```powershell
node tools/import-excelexercises.js
```

Use the bundled Node path if the system `node` command is blocked.
