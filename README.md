# Excel Practice Lab

A local static practice website for Excel and SQL curriculum practice. It uses dashboards plus imported practice questions, local progress, original-style scoring, and source-order lesson mirrors.

The included `question-bank.js` imports the question set using the original page's visible 1-80 module order. Each visible item maps to its real `practice.html?lesson=` id from `recommendedLessonOrder`.

Example: visible module 14, `SUM Functions Skill Summary`, maps to `practice.html?lesson=32`.

The included `sql-question-bank.js` imports the SQL question set using the original `sql-lessons.html` visible 1-23 lesson order. The SQL source order is:

```js
[6, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
```

Example: visible SQL lesson 1, `What is SQL?`, maps to `sql-practice.html?lesson=6`.

## Open it

Open `index.html` in a browser, or serve the folder with any static file server.

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

Use `index.html` for the Excel trainer and `sql.html` for the SQL trainer.

## Practice flow

- Lessons follow the visible 1-80 module order from the original practice sidebar.
- Questions advance by original screen order.
- Correct answers add 20% to the lesson score.
- At 100%, the lesson is marked complete and the next incomplete lesson is recommended.
- Formula answers are checked by final value, exact formula, or accepted answer key.

## SQL practice flow

- SQL lessons follow the visible 1-23 sidebar order from `sql-lessons.html`.
- Each lesson imports all 10 source screen documents from Firestore.
- Correct answers add 15% to the lesson score, matching the live SQL trainer.
- SQL answers are checked against the accepted answer keys after case and whitespace normalization.
- Setup tables are shown before answering; result tables are shown after a correct answer or skip.

## Re-import questions

```powershell
node tools/import-excelexercises.js
```

Use the bundled Node path if the system `node` command is blocked.
