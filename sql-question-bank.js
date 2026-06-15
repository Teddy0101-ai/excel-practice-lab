window.SQL_QUESTIONS = {
  "generatedAt": "2026-06-15T03:10:06.759Z",
  "source": "https://excelexercises.com/sql-lessons.html",
  "practiceSource": "https://excelexercises.com/sql-practice.html",
  "recommendedLessonOrder": [
    6,
    1,
    2,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ],
  "summary": {
    "modules": 23,
    "questions": 230,
    "byType": {
      "i": 11,
      "f": 219
    }
  },
  "modules": [
    {
      "localId": 1,
      "sourceId": 6,
      "title": "What is SQL?",
      "category": "The Basics",
      "sourcePage": "sql-basics-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "i",
          "title": "Before jumping into SQL, let's quickly run through the basics of a database!<br><br>A <b>database</b> is a place where data is stored so it can be easily searched, updated, and analyzed. Think of it like a digital filing cabinet for structured information.",
          "explanation": "",
          "correctAnswer": "",
          "solution": [
            " ",
            null
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "i",
          "title": "A database contains tables. A <b>table</b> is like a spreadsheet inside the database where the data is stored. Each table stores data on a particular type of <i>object</i>, or thing.<br><br>For example, a retail business might have a table for sales, one for inventory, one for employees, etc. See the example of a hypothetical \"employees\" table below. ",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "first_name",
                "last_name",
                "job_title"
              ],
              "rows": [
                [
                  111,
                  "Ryan",
                  "Gosling",
                  "Cashier"
                ],
                [
                  222,
                  "Emma",
                  "Stone",
                  "Manager"
                ],
                [
                  333,
                  "Christian",
                  "Bale",
                  "Sales Associate"
                ],
                [
                  444,
                  "Natalie",
                  "Portman",
                  "Cashier"
                ],
                [
                  555,
                  "Shia",
                  "LaBeouf",
                  "Sales Associate"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "i",
          "title": "Each row - or <b>record</b> - in the table represents one <i>thing</i>. In the case of our employees table, each row represents one employee, and stores information about that employee.<br><br>Each <b>column</b> represents one piece of information, or an attribute, about that thing. In the case of our employees example, the columns are id, first_name, last_name, and job_title.<br><br>Every row in the table has a value for every column. ",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "first_name",
                "last_name",
                "job_title"
              ],
              "rows": [
                [
                  111,
                  "Ryan",
                  "Gosling",
                  "Cashier"
                ],
                [
                  222,
                  "Emma",
                  "Stone",
                  "Manager"
                ],
                [
                  333,
                  "Christian",
                  "Bale",
                  "Sales Associate"
                ],
                [
                  444,
                  "Natalie",
                  "Portman",
                  "Cashier"
                ],
                [
                  555,
                  "Shia",
                  "LaBeouf",
                  "Sales Associate"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "i",
          "title": "An <b>ID</b> - or primary key - is a column that uniquely identifies each row. No two rows should have the same ID.<br><br>This helps us find specific records.\n<br><br>For example, when we reference ID 111, we know exactly which employee we're talking about, even if there happens to be multiple cashiers named Ryan Gosling. \n<br><br>Additionally, the IDs help us connect data between tables. More on this in a second. ",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "first_name",
                "last_name",
                "job_title"
              ],
              "rows": [
                [
                  111,
                  "Ryan",
                  "Gosling",
                  "Cashier"
                ],
                [
                  222,
                  "Emma",
                  "Stone",
                  "Manager"
                ],
                [
                  333,
                  "Christian",
                  "Bale",
                  "Sales Associate"
                ],
                [
                  444,
                  "Natalie",
                  "Portman",
                  "Cashier"
                ],
                [
                  555,
                  "Shia",
                  "LaBeouf",
                  "Sales Associate"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "i",
          "title": "In a <b>relational database</b>, tables are linked using IDs. \n<br><br>Imagine our database has three tables: one for employees, one for items, and one for sales, all shown below. \n<br><br>The third table (sales) tells us which item was purchased and who the cashier was for each sale, simply by referencing the IDs of objects in the employees table and objects in the items table. ",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "first_name",
                "last_name",
                "job_title"
              ],
              "rows": [
                [
                  111,
                  "Ryan",
                  "Gosling",
                  "Cashier"
                ],
                [
                  222,
                  "Emma",
                  "Stone",
                  "Manager"
                ],
                [
                  333,
                  "Christian",
                  "Bale",
                  "Sales Associate"
                ],
                [
                  444,
                  "Natalie",
                  "Portman",
                  "Cashier"
                ],
                [
                  555,
                  "Shia",
                  "LaBeouf",
                  "Sales Associate"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "id",
                "item",
                "color",
                "size"
              ],
              "rows": [
                [
                  123,
                  "Shirt",
                  "Red",
                  "L"
                ],
                [
                  456,
                  "Pants",
                  "Blue",
                  32
                ],
                [
                  789,
                  "Shoes",
                  "White",
                  11
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "id",
                "item",
                "cashier"
              ],
              "rows": [
                [
                  9999999,
                  789,
                  444
                ],
                [
                  8888888,
                  123,
                  444
                ],
                [
                  7777777,
                  123,
                  111
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "So what is SQL?\n<br><br>SQL, or <b>Structured Query Language</b>, is a simple language that helps us to analyze, filter, sort, and manipulate the data in the database tables. For example, to query the database table below, try typing:<br/><br/><code>SELECT * FROM characters;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM characters;</code>",
          "solution": [
            "select * from characters;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "name",
                "house",
                "role"
              ],
              "rows": [
                [
                  1,
                  "Harry Potter",
                  "Gryffindor",
                  "Student"
                ],
                [
                  2,
                  "Hermione Granger",
                  "Gryffindor",
                  "Student"
                ],
                [
                  3,
                  "Ron Weasley",
                  "Gryffindor",
                  "Student"
                ],
                [
                  4,
                  "Albus Dumbledore",
                  "Gryffindor",
                  "Headmaster"
                ],
                [
                  5,
                  "Severus Snape",
                  "Slytherin",
                  "Professor"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "i",
          "title": "In SQL, you write <i>queries</i> to describe the data you want, and how it should be presented. \n",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "i",
          "title": "Remember:\n<br>A database stores information.\n<br>Tables organize it.\n<br>SQL is how we ask questions about it and update it. ",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "i",
          "title": "What you'll learn in this course:\n<br>You will learn how to read data before you learn how to change it.\n<br>Most early lessons focus on asking questions, not writing complex logic.\n<br>You’ll start with simple queries and gradually combine them into more advanced ones.\n<br>By the end, you’ll be able to understand and write real SQL used in jobs.",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "i",
          "title": "Good luck!",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 2,
      "sourceId": 1,
      "title": "SELECT",
      "category": "Basic Queries",
      "sourcePage": "sql-query-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "Data in a <i>relational database</i> is organized in tables, which you can interact with using <i>Structured Query Language</i>, or <b>SQL</b>!<br><br>Try typing <code>SELECT * FROM movies;</code> to see the entire movies table.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM movies;</code>",
          "solution": [
            "select * from movies;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Movies",
              "headers": [
                "movie_id",
                "title",
                "genre",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Inception",
                  "Sci-fi",
                  2010
                ],
                [
                  2,
                  "The Matrix",
                  "Sci-fi",
                  1999
                ],
                [
                  3,
                  "Gladiator",
                  "Action",
                  2000
                ],
                [
                  4,
                  "Titanic",
                  "Drama",
                  1997
                ],
                [
                  5,
                  "Avatar",
                  "Sci-fi",
                  2009
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Rather than using * to select the entire table, you can also select specific columns.<br><br>Try typing <code>SELECT title FROM movies;</code> to see only the title column from the movies table.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM movies;</code>",
          "solution": [
            "select title from movies;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Movies",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "Inception"
                ],
                [
                  "The Matrix"
                ],
                [
                  "Gladiator"
                ],
                [
                  "Titanic"
                ],
                [
                  "Avatar"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "You can also select multiple columns.<br><br>Try typing <code>SELECT title, release_year FROM movies;</code> to see only the title and release_year columns.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title, release_year FROM movies;</code>",
          "solution": [
            "select title, release_year from movies;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Movies",
              "headers": [
                "title",
                "release_year"
              ],
              "rows": [
                [
                  "Inception",
                  2010
                ],
                [
                  "The Matrix",
                  1999
                ],
                [
                  "Gladiator",
                  2000
                ],
                [
                  "Titanic",
                  1997
                ],
                [
                  "Avatar",
                  2009
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "You know there is a table called employees in the database. Use the SELECT keyword with * to see all employee information. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM employees;</code>",
          "solution": [
            "select * from employees;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Employees",
              "headers": [
                "employee_id",
                "first_name",
                "last_name",
                "department"
              ],
              "rows": [
                [
                  1,
                  "Jane",
                  "Doe",
                  "Sales"
                ],
                [
                  2,
                  "Mark",
                  "Lee",
                  "Engineering"
                ],
                [
                  3,
                  "Susan",
                  "Kim",
                  "Finance"
                ],
                [
                  4,
                  "Paul",
                  "Brown",
                  "Marketing"
                ],
                [
                  5,
                  "Mike",
                  "White",
                  "Human Resources"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "The entire employees table is shown below. Write a SELECT command to show only first names and last names. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT first_name, last_name FROM employees;</code>",
          "solution": [
            "select first_name, last_name from employees;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "employee_id",
                "first_name",
                "last_name",
                "department"
              ],
              "rows": [
                [
                  1,
                  "Jane",
                  "Doe",
                  "Sales"
                ],
                [
                  2,
                  "Mark",
                  "Lee",
                  "Engineering"
                ],
                [
                  3,
                  "Susan",
                  "Kim",
                  "Finance"
                ],
                [
                  4,
                  "Paul",
                  "Brown",
                  "Marketing"
                ],
                [
                  5,
                  "Mike",
                  "White",
                  "Human Resources"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "first_name",
                "last_name"
              ],
              "rows": [
                [
                  "Jane",
                  "Doe"
                ],
                [
                  "Mark",
                  "Lee"
                ],
                [
                  "Susan",
                  "Kim"
                ],
                [
                  "Paul",
                  "Brown"
                ],
                [
                  "Mike",
                  "White"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "View the entire products table.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM products;</code>",
          "solution": [
            "select * from products;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_id",
                "product_name",
                "category",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Laptop",
                  "Electronics",
                  1200
                ],
                [
                  2,
                  "Phone",
                  "Electronics",
                  800
                ],
                [
                  3,
                  "Desk",
                  "Furniture",
                  300
                ],
                [
                  4,
                  "Chair",
                  "Furniture",
                  150
                ],
                [
                  5,
                  "Monitor",
                  "Electronics",
                  250
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Given the products table below, write a statement  to view only product name and price. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT product_name, price FROM products;</code>",
          "solution": [
            "select product_name, price from products;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_id",
                "product_name",
                "category",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Laptop",
                  "Electronics",
                  1200
                ],
                [
                  2,
                  "Phone",
                  "Electronics",
                  800
                ],
                [
                  3,
                  "Desk",
                  "Furniture",
                  300
                ],
                [
                  4,
                  "Chair",
                  "Furniture",
                  150
                ],
                [
                  5,
                  "Monitor",
                  "Electronics",
                  250
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name",
                "price"
              ],
              "rows": [
                [
                  "Laptop",
                  1200
                ],
                [
                  "Phone",
                  800
                ],
                [
                  "Desk",
                  300
                ],
                [
                  "Chair",
                  150
                ],
                [
                  "Monitor",
                  250
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Write a statement to view the entire customers table.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM customers;</code>",
          "solution": [
            "select * from customers;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "first_name",
                "last_name",
                "city"
              ],
              "rows": [
                [
                  101,
                  "Emma",
                  "Stone",
                  "Los Angeles"
                ],
                [
                  102,
                  "Ryan",
                  "Gosling",
                  "Toronto"
                ],
                [
                  103,
                  "Olivia",
                  "Brown",
                  "New York"
                ],
                [
                  104,
                  "Liam",
                  "Smith",
                  "London"
                ],
                [
                  105,
                  "Ava",
                  "Johnson",
                  "Chicago"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "You want to view each customer's city, but you want to protect their identities in case you lose the list. Write a statement to view only the customer_id and city columns from the customers table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT customer_id, city FROM customers;</code>",
          "solution": [
            "select customer_id, city from customers;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "city"
              ],
              "rows": [
                [
                  101,
                  "Los Angeles"
                ],
                [
                  102,
                  "Toronto"
                ],
                [
                  103,
                  "New York"
                ],
                [
                  104,
                  "London"
                ],
                [
                  105,
                  "Chicago"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Write a statement to view only first_name from customers. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT first_name FROM customers;</code>",
          "solution": [
            "select first_name from customers;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "first_name"
              ],
              "rows": [
                [
                  "Emma"
                ],
                [
                  "Ryan"
                ],
                [
                  "Olivia"
                ],
                [
                  "Liam"
                ],
                [
                  "Ava"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 3,
      "sourceId": 2,
      "title": "SELECT WHERE",
      "category": "Filtering Queries",
      "sourcePage": "sql-filtering-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "In SQL, the WHERE clause lets you filter the results for rows which meet a certain criteria. Take a look at the planets table below. You want to return only the planets that are classified as Gas Giants. Try typing:<br><br><code>SELECT * FROM planets WHERE type = 'Gas Giant';</code>.<br>Notice that in SQL, <i>text</i> goes inside <i>single</i> quotes, while numbers do not. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM planets WHERE type = 'Gas Giant';</code>",
          "solution": [
            "select * from planets where type = 'gas giant';",
            "select * from planets where type='gas giant';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "planet_id",
                "name",
                "type",
                "moons",
                "distance_from_sun"
              ],
              "rows": [
                [
                  101,
                  "Mercury",
                  "Rocky",
                  0,
                  58
                ],
                [
                  102,
                  "Venus",
                  "Rocky",
                  0,
                  108
                ],
                [
                  103,
                  "Earth",
                  "Rocky",
                  1,
                  150
                ],
                [
                  104,
                  "Jupiter",
                  "Gas Giant",
                  79,
                  778
                ],
                [
                  105,
                  "Saturn",
                  "Gas Giant",
                  82,
                  1430
                ],
                [
                  106,
                  "Neptune",
                  "Ice Giant",
                  14,
                  4500
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "planet_id",
                "name",
                "type",
                "moons",
                "distance_from_sun"
              ],
              "rows": [
                [
                  104,
                  "Jupiter",
                  "Gas Giant",
                  79,
                  778
                ],
                [
                  105,
                  "Saturn",
                  "Gas Giant",
                  82,
                  1430
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Now you want to view all planets with more than 10 moons. Try typing:<br><code>SELECT * FROM planets WHERE moons > 10;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM planets WHERE moons > 10;</code>",
          "solution": [
            "select * from planets where moons > 10;",
            "select * from planets where moons>10;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "planet_id",
                "name",
                "type",
                "moons",
                "distance_from_sun"
              ],
              "rows": [
                [
                  101,
                  "Mercury",
                  "Rocky",
                  0,
                  58
                ],
                [
                  102,
                  "Venus",
                  "Rocky",
                  0,
                  108
                ],
                [
                  103,
                  "Earth",
                  "Rocky",
                  1,
                  150
                ],
                [
                  104,
                  "Jupiter",
                  "Gas Giant",
                  79,
                  778
                ],
                [
                  105,
                  "Saturn",
                  "Gas Giant",
                  82,
                  1430
                ],
                [
                  106,
                  "Neptune",
                  "Ice Giant",
                  14,
                  4500
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "planet_id",
                "name",
                "type",
                "moons",
                "distance_from_sun"
              ],
              "rows": [
                [
                  104,
                  "Jupiter",
                  "Gas Giant",
                  79,
                  778
                ],
                [
                  105,
                  "Saturn",
                  "Gas Giant",
                  82,
                  1430
                ],
                [
                  106,
                  "Neptune",
                  "Ice Giant",
                  14,
                  4500
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Write a statement to view the name and moons columns of only the rocky planets. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT name, moons FROM planets WHERE type = 'Rocky';</code>",
          "solution": [
            "select name, moons from planets where type = 'rocky';",
            "select name, moons from planets where type='rocky';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "planet_id",
                "name",
                "type",
                "moons",
                "distance_from_sun"
              ],
              "rows": [
                [
                  101,
                  "Mercury",
                  "Rocky",
                  0,
                  58
                ],
                [
                  102,
                  "Venus",
                  "Rocky",
                  0,
                  108
                ],
                [
                  103,
                  "Earth",
                  "Rocky",
                  1,
                  150
                ],
                [
                  104,
                  "Jupiter",
                  "Gas Giant",
                  79,
                  778
                ],
                [
                  105,
                  "Saturn",
                  "Gas Giant",
                  82,
                  1430
                ],
                [
                  106,
                  "Neptune",
                  "Ice Giant",
                  14,
                  4500
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "name",
                "moons"
              ],
              "rows": [
                [
                  "Mercury",
                  0
                ],
                [
                  "Venus",
                  0
                ],
                [
                  "Earth",
                  1
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "You know the planet_id for Earth is 103 in the planets table. Use the planet_id to view the record for Earth.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM planets WHERE planet_id = 103;</code>",
          "solution": [
            "select * from planets where planet_id = 103;",
            "select * from planets where planet_id=103;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "planet_id",
                "name",
                "type",
                "moons",
                "distance_from_sun"
              ],
              "rows": [
                [
                  103,
                  "Earth",
                  "Rocky",
                  "Moons",
                  150
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Take a look at the artists table below. Write a statement to view the rows in the artists table who debuted after 2010.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM artists WHERE debut_year > 2010;</code>",
          "solution": [
            "select * from artists where debut_year > 2010;",
            "select * from artists where debut_year >= 2011;",
            "select * from artists where debut_year>2010;",
            "select * from artists where debut_year>=2011;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "artist_id",
                "name",
                "genre",
                "debut_year",
                "country"
              ],
              "rows": [
                [
                  1,
                  "Pitbull",
                  "Pop",
                  2004,
                  "USA"
                ],
                [
                  2,
                  "Flo Rida",
                  "Pop",
                  2007,
                  "USA"
                ],
                [
                  3,
                  "Dua Lipa",
                  "Pop",
                  2015,
                  "UK"
                ],
                [
                  4,
                  "The Weeknd",
                  "R&B",
                  2011,
                  "Canada"
                ],
                [
                  5,
                  "Lady Gaga",
                  "Pop",
                  2008,
                  "USA"
                ],
                [
                  6,
                  "Billie Eilish",
                  "Pop",
                  2016,
                  "USA"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "artist_id",
                "name",
                "genre",
                "debut_year",
                "country"
              ],
              "rows": [
                [
                  3,
                  "Dua Lipa",
                  "Pop",
                  2015,
                  "UK"
                ],
                [
                  4,
                  "The Weeknd",
                  "R&B",
                  2011,
                  "Canada"
                ],
                [
                  6,
                  "Billie Eilish",
                  "Pop",
                  2016,
                  "USA"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Write a statement to view the artists from Canada.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM artists WHERE country = 'Canada';</code>",
          "solution": [
            "select * from artists where country = 'canada';",
            "select * from artists where country='canada';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "artist_id",
                "name",
                "genre",
                "debut_year",
                "country"
              ],
              "rows": [
                [
                  1,
                  "Pitbull",
                  "Pop",
                  2004,
                  "USA"
                ],
                [
                  2,
                  "Flo Rida",
                  "Pop",
                  2007,
                  "USA"
                ],
                [
                  3,
                  "Dua Lipa",
                  "Pop",
                  2015,
                  "UK"
                ],
                [
                  4,
                  "The Weeknd",
                  "R&B",
                  2011,
                  "Canada"
                ],
                [
                  5,
                  "Lady Gaga",
                  "Pop",
                  2008,
                  "USA"
                ],
                [
                  6,
                  "Billie Eilish",
                  "Pop",
                  2016,
                  "USA"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "artist_id",
                "name",
                "genre",
                "debut_year",
                "country"
              ],
              "rows": [
                [
                  4,
                  "The Weeknd",
                  "R&B",
                  2011,
                  "Canada"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Write a statement to view the name and country of artists where genre is pop. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT name, country FROM artists WHERE genre = 'Pop';</code>",
          "solution": [
            "select name, country from artists where genre = 'pop';",
            "select name, country from artists where genre='pop';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "artist_id",
                "name",
                "genre",
                "debut_year",
                "country"
              ],
              "rows": [
                [
                  1,
                  "Pitbull",
                  "Pop",
                  2004,
                  "USA"
                ],
                [
                  2,
                  "Flo Rida",
                  "Pop",
                  2007,
                  "USA"
                ],
                [
                  3,
                  "Dua Lipa",
                  "Pop",
                  2015,
                  "UK"
                ],
                [
                  4,
                  "The Weeknd",
                  "R&B",
                  2011,
                  "Canada"
                ],
                [
                  5,
                  "Lady Gaga",
                  "Pop",
                  2008,
                  "USA"
                ],
                [
                  6,
                  "Billie Eilish",
                  "Pop",
                  2016,
                  "USA"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "name",
              "headers": [
                "name",
                "country"
              ],
              "rows": [
                [
                  "Pitbull",
                  "USA"
                ],
                [
                  "Flo Rida",
                  "USA"
                ],
                [
                  "Dua Lipa",
                  "UK"
                ],
                [
                  "Lady Gaga",
                  "USA"
                ],
                [
                  "Billie Eilish",
                  "USA"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Query the customers table for records where city is New York.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM customers WHERE city = 'New York';</code>",
          "solution": [
            "select * from customers where city = 'new york';",
            "select * from customers where city='new york';"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "name",
                "city",
                "industry",
                "revenue"
              ],
              "rows": [
                [
                  651,
                  "Acme Corp",
                  "New York",
                  "Manufacturing",
                  500000
                ],
                [
                  612,
                  "Zenith LLC",
                  "New York",
                  "Finance",
                  2000000
                ],
                [
                  952,
                  "Atlas Group",
                  "New York",
                  "Consulting",
                  950000
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Query the customers table for customers that have over 900000 in revenue. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM customers WHERE revenue > 900000;</code>",
          "solution": [
            "select * from customers where revenue > 900000;",
            "select * from customers where revenue>900000;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "name",
                "city",
                "industry",
                "revenue"
              ],
              "rows": [
                [
                  512,
                  "Bright Co",
                  "San Francisco",
                  "Technology",
                  1200000
                ],
                [
                  612,
                  "Zenith LLC",
                  "New York",
                  "Finance",
                  2000000
                ],
                [
                  952,
                  "Atlas Group",
                  "New York",
                  "Consulting",
                  950000
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Query the customers table for customers with less than or equal to 950000 in revenue. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM customers WHERE revenue <= 950000;</code>",
          "solution": [
            "select * from customers where revenue <= 950000;",
            "select * from customers where revenue<=950000;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "name",
                "city",
                "industry",
                "revenue"
              ],
              "rows": [
                [
                  651,
                  "Acme Corp",
                  "New York",
                  "Manufacturing",
                  500000
                ],
                [
                  212,
                  "Nova Inc",
                  "Chicago",
                  "Retail",
                  750000
                ],
                [
                  952,
                  "Atlas Group",
                  "New York",
                  "Consulting",
                  950000
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 4,
      "sourceId": 3,
      "title": "SELECT DISTINCT",
      "category": "Basic Queries",
      "sourcePage": "sql-query-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "The DISTINCT keyword - as the name implies - returns only <i>distinct</i> or <i>unique</i> values from the specified column(s). View the inventory table below, and see what comes back when you type:<br><br><code>SELECT DISTINCT category FROM inventory;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT category FROM inventory;</code>",
          "solution": [
            "select distinct category from inventory;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "item_id",
                "product_name",
                "category",
                "size",
                "color"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  "Clothing",
                  "M",
                  "Red"
                ],
                [
                  2,
                  "T-Shirt",
                  "Clothing",
                  "L",
                  "Blue"
                ],
                [
                  3,
                  "Jeans",
                  "Clothing",
                  "M",
                  "Blue"
                ],
                [
                  4,
                  "Hat",
                  "Accessories",
                  "One Size",
                  "Black"
                ],
                [
                  5,
                  "Sneakers",
                  "Footwear",
                  10,
                  "White"
                ],
                [
                  6,
                  "Boots",
                  "Footwear",
                  11,
                  "Black"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "category"
              ],
              "rows": [
                [
                  "Clothing"
                ],
                [
                  "Accessories"
                ],
                [
                  "Footwear"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Use SELECT DISTINCT to see all the different sizes the products come in. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT size FROM inventory;</code>",
          "solution": [
            "select distinct size from inventory;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "item_id",
                "product_name",
                "category",
                "size",
                "color"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  "Clothing",
                  "M",
                  "Red"
                ],
                [
                  2,
                  "T-Shirt",
                  "Clothing",
                  "L",
                  "Blue"
                ],
                [
                  3,
                  "Jeans",
                  "Clothing",
                  "M",
                  "Blue"
                ],
                [
                  4,
                  "Hat",
                  "Accessories",
                  "One Size",
                  "Black"
                ],
                [
                  5,
                  "Sneakers",
                  "Footwear",
                  10,
                  "White"
                ],
                [
                  6,
                  "Boots",
                  "Footwear",
                  11,
                  "Black"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "size"
              ],
              "rows": [
                [
                  "M"
                ],
                [
                  "L"
                ],
                [
                  "One Size"
                ],
                [
                  10
                ],
                [
                  11
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Use SELECT DISTINCT to see all the unique combinations of size AND color. Note that we get the unique <i>combinations</i> of the two columns, so certain values may be repeated within a single column. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT size, color FROM inventory;</code>",
          "solution": [
            "select distinct size, color from inventory;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "item_id",
                "product_name",
                "category",
                "size",
                "color"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  "Clothing",
                  "M",
                  "Red"
                ],
                [
                  2,
                  "T-Shirt",
                  "Clothing",
                  "L",
                  "Blue"
                ],
                [
                  3,
                  "Jeans",
                  "Clothing",
                  "M",
                  "Blue"
                ],
                [
                  4,
                  "Hat",
                  "Accessories",
                  "One Size",
                  "Black"
                ],
                [
                  5,
                  "Sneakers",
                  "Footwear",
                  10,
                  "White"
                ],
                [
                  6,
                  "Boots",
                  "Footwear",
                  11,
                  "Black"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "size",
                "color"
              ],
              "rows": [
                [
                  "M",
                  "Red"
                ],
                [
                  "L",
                  "Blue"
                ],
                [
                  "M",
                  "Blue"
                ],
                [
                  "One Size",
                  "Black"
                ],
                [
                  10,
                  "White"
                ],
                [
                  11,
                  "Black"
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Use SELECT DISTINCT to see which colors are available for clothing items (items where category is Clothing). ",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT color FROM inventory WHERE category = 'Clothing';</code>",
          "solution": [
            "select distinct color from inventory where category='clothing';",
            "select distinct color from inventory where category = 'clothing';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "item_id",
                "product_name",
                "category",
                "size",
                "color"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  "Clothing",
                  "M",
                  "Red"
                ],
                [
                  2,
                  "T-Shirt",
                  "Clothing",
                  "L",
                  "Blue"
                ],
                [
                  3,
                  "Jeans",
                  "Clothing",
                  "M",
                  "Blue"
                ],
                [
                  4,
                  "Hat",
                  "Accessories",
                  "One Size",
                  "Black"
                ],
                [
                  5,
                  "Sneakers",
                  "Footwear",
                  10,
                  "White"
                ],
                [
                  6,
                  "Boots",
                  "Footwear",
                  11,
                  "Black"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "color"
              ],
              "rows": [
                [
                  "Red"
                ],
                [
                  "Blue"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Use SELECT DISTINCT to see the different categories and colors sold together. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT category, color FROM inventory;</code>",
          "solution": [
            "select distinct category, color from inventory;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "item_id",
                "product_name",
                "category",
                "size",
                "color"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  "Clothing",
                  "M",
                  "Red"
                ],
                [
                  2,
                  "T-Shirt",
                  "Clothing",
                  "L",
                  "Blue"
                ],
                [
                  3,
                  "Jeans",
                  "Clothing",
                  "M",
                  "Blue"
                ],
                [
                  4,
                  "Hat",
                  "Accessories",
                  "One Size",
                  "Black"
                ],
                [
                  5,
                  "Sneakers",
                  "Footwear",
                  10,
                  "White"
                ],
                [
                  6,
                  "Boots",
                  "Footwear",
                  11,
                  "Black"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "category",
                "color"
              ],
              "rows": [
                [
                  "Clothing",
                  "Red"
                ],
                [
                  "Clothing",
                  "Blue"
                ],
                [
                  "Accessories",
                  "Black"
                ],
                [
                  "Footwear",
                  "White"
                ],
                [
                  "Footwear",
                  "Black"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Use SELECT DISTINCT to see which sizes are available in the Footwear category of the inventory table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT size FROM inventory WHERE category = 'Footwear';</code>",
          "solution": [
            "select distinct size from inventory where category='footwear';",
            "select distinct size from inventory where category = 'footwear';"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "size"
              ],
              "rows": [
                [
                  10
                ],
                [
                  11
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Your boss needs a list of all the products (product_name) that the company sells without any duplicates!",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT product_name FROM inventory;</code>",
          "solution": [
            "select distinct product_name from inventory;"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name"
              ],
              "rows": [
                [
                  "T-Shirt"
                ],
                [
                  "Jeans"
                ],
                [
                  "Hat"
                ],
                [
                  "Sneakers"
                ],
                [
                  "Boots"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Query the trips table (shown below) for a list of all the unique countries salespeople have traveled to. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT country FROM trips;</code>",
          "solution": [
            "select distinct country from trips;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "trip_id",
                "traveler_name",
                "destination_city",
                "country",
                "year"
              ],
              "rows": [
                [
                  101,
                  "Alice",
                  "Paris",
                  "France",
                  2021
                ],
                [
                  102,
                  "Bob",
                  "Lyon",
                  "France",
                  2022
                ],
                [
                  103,
                  "Charlie",
                  "Tokyo",
                  "Japan",
                  2019
                ],
                [
                  104,
                  "Dana",
                  "Osaka",
                  "Japan",
                  2023
                ],
                [
                  105,
                  "Evan",
                  "Berlin",
                  "Germany",
                  2020
                ],
                [
                  106,
                  "Fiona",
                  "Munich",
                  "Germany",
                  2021
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country"
              ],
              "rows": [
                [
                  "France"
                ],
                [
                  "Japan"
                ],
                [
                  "Germany"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Use SELECT DISTINCT to see all unique combinations of destination_city and country that appear in the trips table.",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT destination_city, country FROM trips;</code>",
          "solution": [
            "select distinct destination_city, country from trips;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "trip_id",
                "traveler_name",
                "destination_city",
                "country",
                "year"
              ],
              "rows": [
                [
                  101,
                  "Alice",
                  "Paris",
                  "France",
                  2021
                ],
                [
                  102,
                  "Bob",
                  "Lyon",
                  "France",
                  2022
                ],
                [
                  103,
                  "Charlie",
                  "Tokyo",
                  "Japan",
                  2019
                ],
                [
                  104,
                  "Dana",
                  "Osaka",
                  "Japan",
                  2023
                ],
                [
                  105,
                  "Evan",
                  "Berlin",
                  "Germany",
                  2020
                ],
                [
                  106,
                  "Fiona",
                  "Munich",
                  "Germany",
                  2021
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "destination_city",
                "country"
              ],
              "rows": [
                [
                  "Paris",
                  "France"
                ],
                [
                  "Lyon",
                  "France"
                ],
                [
                  "Tokyo",
                  "Japan"
                ],
                [
                  "Osaka",
                  "Japan"
                ],
                [
                  "Berlin",
                  "Germany"
                ],
                [
                  "Munich",
                  "Germany"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Use SELECT DISTINCT to see which years people traveled to Japan.",
          "explanation": "",
          "correctAnswer": "<code>SELECT DISTINCT year FROM trips WHERE country = 'Japan';</code>",
          "solution": [
            "select distinct year from trips where country='japan';",
            "select distinct year from trips where country = 'japan';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "trip_id",
                "traveler_name",
                "destination_city",
                "country",
                "year"
              ],
              "rows": [
                [
                  101,
                  "Alice",
                  "Paris",
                  "France",
                  2021
                ],
                [
                  102,
                  "Bob",
                  "Lyon",
                  "France",
                  2022
                ],
                [
                  103,
                  "Charlie",
                  "Tokyo",
                  "Japan",
                  2019
                ],
                [
                  104,
                  "Dana",
                  "Osaka",
                  "Japan",
                  2023
                ],
                [
                  105,
                  "Evan",
                  "Berlin",
                  "Germany",
                  2020
                ],
                [
                  106,
                  "Fiona",
                  "Munich",
                  "Germany",
                  2021
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "year"
              ],
              "rows": [
                [
                  2019
                ],
                [
                  2023
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 5,
      "sourceId": 4,
      "title": "AND, OR, NOT Operators",
      "category": "Filtering Queries",
      "sourcePage": "sql-filtering-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "The AND operator lets you combine multiple WHERE conditions, and returns the records where ALL of the conditions are true. Use AND to find countries that are in Europe and use the Euro as their currency. Try:<br><br><code>SELECT * FROM countries WHERE continent = 'Europe' AND currency = 'Euro';</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM countries WHERE continent = 'Europe' AND currency = 'Euro';</code>",
          "solution": [
            "select * from countries where continent='europe' and currency='euro';",
            "select * from countries where continent = 'europe' and currency='euro';",
            "select * from countries where continent='europe' and currency = 'euro';",
            "select * from countries where continent = 'europe' and currency = 'euro';"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "currency",
                "population_millions",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "France",
                  "Europe",
                  "Euro",
                  67,
                  "Paris"
                ],
                [
                  1002,
                  "Germany",
                  "Europe",
                  "Euro",
                  83,
                  "Berlin"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "The OR operator returns records where at least one condition is true. Use OR to return records from the countries table where continent is Europe OR Asia.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM countries WHERE continent = 'Europe' OR continent = 'Asia';</code>",
          "solution": [
            "select * from countries where continent='europe' or continent='asia';",
            "select * from countries where continent = 'europe' or continent='asia';",
            "select * from countries where continent='europe' or continent = 'asia';",
            "select * from countries where continent = 'europe' or continent = 'asia';"
          ],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1005,
                  "France",
                  "Europe",
                  "Euro",
                  "Paris"
                ],
                [
                  1009,
                  "Japan",
                  "Asia",
                  "Yen",
                  "Tokyo"
                ],
                [
                  1015,
                  "Germany",
                  "Europe",
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Look at the countries table below. You can use NOT to filter for records where a condition is not true, such as countries that are not in Europe. Try:<br><br><code>SELECT * FROM countries WHERE NOT continent = 'Europe';</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM countries WHERE NOT continent = 'Europe';</code>",
          "solution": [
            "select * from countries where not continent='europe';",
            "select * from countries where not continent = 'europe';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "capital",
                "currency"
              ],
              "rows": [
                [
                  1,
                  "France",
                  "Europe",
                  "Paris",
                  "Euro"
                ],
                [
                  2,
                  "Germany",
                  "Europe",
                  "Berlin",
                  "Euro"
                ],
                [
                  3,
                  "Japan",
                  "Asia",
                  "Tokyo",
                  "Yen"
                ],
                [
                  4,
                  "Brazil",
                  "South America",
                  "Brasilia",
                  "Real"
                ],
                [
                  5,
                  "Canada",
                  "North America",
                  "Ottawa",
                  "Dollar"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "capital",
                "currency"
              ],
              "rows": [
                [
                  3,
                  "Japan",
                  "Asia",
                  "Tokyo",
                  "Yen"
                ],
                [
                  4,
                  "Brazil",
                  "South America",
                  "Brasilia",
                  "Real"
                ],
                [
                  5,
                  "Canada",
                  "North America",
                  "Ottawa",
                  "Dollar"
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Look at the countries table below. Use AND to return the records for countries in Asia with a population greater than 100 million.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM countries WHERE continent = 'Asia' AND population_millions > 100;</code>",
          "solution": [
            "select * from countries where continent='asia' and population_millions>100;",
            "select * from countries where continent = 'asia' and population_millions>100;",
            "select * from countries where continent='asia' and population_millions > 100;",
            "select * from countries where continent = 'asia' and population_millions > 100;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ],
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ],
                [
                  1005,
                  "Germany",
                  "Europe",
                  83,
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Look at the countries table below. Return the records for countries that are in Europe OR that have a population of less than 100 million.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM countries WHERE continent = 'Europe' OR population_millions < 100;</code>",
          "solution": [
            "select * from countries where continent='europe' or population_millions<100;",
            "select * from countries where continent = 'europe' or population_millions<100;",
            "select * from countries where continent='europe' or population_millions < 100;",
            "select * from countries where continent = 'europe' or population_millions < 100;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ],
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ],
                [
                  1005,
                  "Germany",
                  "Europe",
                  83,
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ],
                [
                  1005,
                  "Germany",
                  "Europe",
                  83,
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Look at the countries table below. Find all records where the currency is NOT the Euro. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM countries WHERE NOT currency = 'Euro';</code>",
          "solution": [
            "select * from countries where not currency='euro';",
            "select * from countries where not currency = 'euro';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ],
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ],
                [
                  1005,
                  "Germany",
                  "Europe",
                  83,
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ],
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Look at the countries table below. Return only the <b>names</b> of countries where continent is Asia and population is over 500 million.",
          "explanation": "",
          "correctAnswer": "<code>SELECT country_name FROM countries WHERE continent = 'Asia' AND population_millions > 500;</code>",
          "solution": [
            "select country_name from countries where continent = 'asia' and population_millions > 500;",
            "select country_name from countries where continent='asia' and population_millions > 500;",
            "select country_name from countries where continent = 'asia' and population_millions>500;",
            "select country_name from countries where continent='asia' and population_millions>500;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ],
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ],
                [
                  1005,
                  "Germany",
                  "Europe",
                  83,
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_name"
              ],
              "rows": [
                [
                  "China"
                ],
                [
                  "India"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Look at the countries table below. Return only the <b>names</b> of countries where continent is Asia OR population is under 50 million.",
          "explanation": "",
          "correctAnswer": "<code>SELECT country_name FROM countries WHERE continent = 'Asia' OR population_millions < 50;</code>",
          "solution": [
            "select country_name from countries where continent = 'asia' or population_millions < 50;",
            "select country_name from countries where continent='asia' or population_millions < 50;",
            "select country_name from countries where continent = 'asia' or population_millions<50;",
            "select country_name from countries where continent='asia' or population_millions<50;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ],
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ],
                [
                  1005,
                  "Germany",
                  "Europe",
                  83,
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_name"
              ],
              "rows": [
                [
                  "China"
                ],
                [
                  "India"
                ],
                [
                  "Japan"
                ],
                [
                  "Thailand"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Look at the countries table below. Return only the <b>names</b> of countries where continent is not Europe.",
          "explanation": "",
          "correctAnswer": "<code>SELECT country_name FROM countries WHERE NOT continent = 'Europe';</code>",
          "solution": [
            "select country_name from countries where not continent = 'europe';",
            "select country_name from countries where not continent='europe';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ],
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ],
                [
                  1005,
                  "Germany",
                  "Europe",
                  83,
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_name"
              ],
              "rows": [
                [
                  "China"
                ],
                [
                  "India"
                ],
                [
                  "Japan"
                ],
                [
                  "Thailand"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Look at the countries table below. Return only the <b>names</b> of countries where continent is Europe AND currency is Rupee.",
          "explanation": "",
          "correctAnswer": "<code>SELECT country_name FROM countries WHERE continent = 'Europe' AND currency = 'Rupee';</code>",
          "solution": [
            "select country_name from countries where continent = 'europe' and currency = 'rupee';",
            "select country_name from countries where continent='europe' and currency = 'rupee';",
            "select country_name from countries where continent = 'europe' and currency='rupee';",
            "select country_name from countries where continent='europe' and currency='rupee';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_id",
                "country_name",
                "continent",
                "population_millions",
                "currency",
                "capital"
              ],
              "rows": [
                [
                  1001,
                  "China",
                  "Asia",
                  1410,
                  "Yuan",
                  "Beijing"
                ],
                [
                  1002,
                  "India",
                  "Asia",
                  1390,
                  "Rupee",
                  "New Delhi"
                ],
                [
                  1003,
                  "Japan",
                  "Asia",
                  125,
                  "Yen",
                  "Tokyo"
                ],
                [
                  1004,
                  "Thailand",
                  "Asia",
                  70,
                  "Baht",
                  "Bangkok"
                ],
                [
                  1005,
                  "Germany",
                  "Europe",
                  83,
                  "Euro",
                  "Berlin"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_name"
              ],
              "rows": []
            }
          ]
        }
      ]
    },
    {
      "localId": 6,
      "sourceId": 5,
      "title": "ORDER BY",
      "category": "Basic Queries",
      "sourcePage": "sql-query-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "Use ORDER BY to sort records by crop production amount from lowest to highest. Try:<br><br><code>SELECT * FROM crops ORDER BY production_tons;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM crops ORDER BY production_tons;</code>",
          "solution": [
            "select * from crops order by production_tons;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  2,
                  "United States",
                  "Corn",
                  360,
                  "North America"
                ],
                [
                  3,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  4,
                  "China",
                  "Wheat",
                  135,
                  "Asia"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ],
                [
                  3,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  1,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  4,
                  "China",
                  "Wheat",
                  135,
                  "Asia"
                ],
                [
                  2,
                  "United States",
                  "Corn",
                  360,
                  "North America"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "By default, ORDER BY sorts in <i>ascending</i> order, or low to high (like \"ascending stairs\" means you're going from low to high). You can also sort from high to low, or by <i>descending</i> order. Try:<br><br><code>SELECT * FROM crops ORDER BY production_tons DESC;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM crops ORDER BY production_tons DESC;</code>",
          "solution": [
            "select * from crops order by production_tons desc;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  2,
                  "United States",
                  "Corn",
                  360,
                  "North America"
                ],
                [
                  3,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  4,
                  "China",
                  "Wheat",
                  135,
                  "Asia"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  2,
                  "United States",
                  "Corn",
                  360,
                  "North America"
                ],
                [
                  4,
                  "China",
                  "Wheat",
                  135,
                  "Asia"
                ],
                [
                  1,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  3,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Use ORDER BY to sort the table alphabetically by country name.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM crops ORDER BY country_name;</code>",
          "solution": [
            "select * from crops order by country_name;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  2,
                  "United States",
                  "Corn",
                  360,
                  "North America"
                ],
                [
                  3,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  4,
                  "China",
                  "Wheat",
                  135,
                  "Asia"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  4,
                  "China",
                  "Wheat",
                  135,
                  "Asia"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ],
                [
                  3,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  2,
                  "United States",
                  "Corn",
                  360,
                  "North America"
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Return only the crop names (from the crops table) in alphabetical order. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT crop FROM crops ORDER BY crop;</code>",
          "solution": [
            "select crop from crops order by crop;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  2,
                  "United States",
                  "Corn",
                  360,
                  "North America"
                ],
                [
                  3,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  4,
                  "China",
                  "Wheat",
                  135,
                  "Asia"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "crop"
              ],
              "rows": [
                [
                  "Corn"
                ],
                [
                  "Rice"
                ],
                [
                  "Soybeans"
                ],
                [
                  "Wheat"
                ],
                [
                  "Wheat"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Use ORDER BY to sort crops alphabetically within each country. To do this, you sort first by country_name, then by crop. Try:<br><br><code>SELECT country_name, crop FROM crops ORDER BY country_name, crop;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT country_name, crop FROM crops ORDER BY country_name, crop;</code>",
          "solution": [
            "select country_name, crop from crops order by country_name, crop;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "India",
                  "Wheat",
                  110,
                  "Asia"
                ],
                [
                  2,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  3,
                  "Brazil",
                  "Corn",
                  100,
                  "South America"
                ],
                [
                  4,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_name",
                "crop"
              ],
              "rows": [
                [
                  "Brazil",
                  "Corn"
                ],
                [
                  "Brazil",
                  "Soybeans"
                ],
                [
                  "France",
                  "Wheat"
                ],
                [
                  "India",
                  "Rice"
                ],
                [
                  "India",
                  "Wheat"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Use ORDER BY to return only country names (from the crops table) sorted from Z to A. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT country_name FROM crops ORDER BY country_name DESC;</code>",
          "solution": [
            "select country_name from crops order by country_name desc;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "India",
                  "Wheat",
                  110,
                  "Asia"
                ],
                [
                  2,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  3,
                  "Brazil",
                  "Corn",
                  100,
                  "South America"
                ],
                [
                  4,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_name"
              ],
              "rows": [
                [
                  "India"
                ],
                [
                  "India"
                ],
                [
                  "France"
                ],
                [
                  "Brazil"
                ],
                [
                  "Brazil"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Use ORDER BY to return only CONTINENTS (from the crops table) sorted from A to Z. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT continent FROM crops ORDER BY continent ASC;</code> (the ASC is optional)",
          "solution": [
            "select continent from crops order by continent asc;",
            "select continent from crops order by continent;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "India",
                  "Wheat",
                  110,
                  "Asia"
                ],
                [
                  2,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  3,
                  "Brazil",
                  "Corn",
                  100,
                  "South America"
                ],
                [
                  4,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "continent"
              ],
              "rows": [
                [
                  "Asia"
                ],
                [
                  "Asia"
                ],
                [
                  "Europe"
                ],
                [
                  "South America"
                ],
                [
                  "South America"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Use ORDER BY to return only production_tons (from the crops table) sorted from low to high. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT production_tons FROM crops ORDER BY production_tons ASC;</code> (the ASC is optional)",
          "solution": [
            "select production_tons from crops order by production_tons asc;",
            "select production_tons from crops order by production_tons;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "India",
                  "Wheat",
                  110,
                  "Asia"
                ],
                [
                  2,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  3,
                  "Brazil",
                  "Corn",
                  100,
                  "South America"
                ],
                [
                  4,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "production_tons"
              ],
              "rows": [
                [
                  40
                ],
                [
                  100
                ],
                [
                  110
                ],
                [
                  120
                ],
                [
                  130
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Use ORDER BY to return only production_tons (from the crops table) sorted from high to low. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT production_tons FROM crops ORDER BY production_tons DESC;</code>",
          "solution": [
            "select production_tons from crops order by production_tons desc;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "India",
                  "Wheat",
                  110,
                  "Asia"
                ],
                [
                  2,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  3,
                  "Brazil",
                  "Corn",
                  100,
                  "South America"
                ],
                [
                  4,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "production_tons"
              ],
              "rows": [
                [
                  130
                ],
                [
                  120
                ],
                [
                  110
                ],
                [
                  100
                ],
                [
                  40
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Use ORDER BY to return only country_name and production_tons (from the crops table) sorted from high to low by production_tons. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT country_name, production_tons FROM crops ORDER BY production_tons DESC;</code>",
          "solution": [
            "select country_name, production_tons from crops order by production_tons desc;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "country_name",
                "crop",
                "production_tons",
                "continent"
              ],
              "rows": [
                [
                  1,
                  "India",
                  "Wheat",
                  110,
                  "Asia"
                ],
                [
                  2,
                  "India",
                  "Rice",
                  120,
                  "Asia"
                ],
                [
                  3,
                  "Brazil",
                  "Corn",
                  100,
                  "South America"
                ],
                [
                  4,
                  "Brazil",
                  "Soybeans",
                  130,
                  "South America"
                ],
                [
                  5,
                  "France",
                  "Wheat",
                  40,
                  "Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country_name",
                "production_tons"
              ],
              "rows": [
                [
                  "Brazil",
                  130
                ],
                [
                  "India",
                  120
                ],
                [
                  "India",
                  110
                ],
                [
                  "Brazil",
                  100
                ],
                [
                  "France",
                  40
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 7,
      "sourceId": 7,
      "title": "Aliases & Arithmetic",
      "category": "Basic Queries",
      "sourcePage": "sql-query-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "An <i>alias</i> is when you use AS to change the name of a column in the results. Note that you are not changing the actual table in the database, just the way it appears to you in the results.<br><br>Select product_name and unit_price, but rename them so they are more user-friendly. Try:<br><br><code>SELECT product_name AS item, unit_price AS cost FROM products;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT product_name AS item, unit_price AS cost FROM products;</code>",
          "solution": [
            "select product_name as item, unit_price as cost from products;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "product_name",
                "category",
                "unit_price"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  "Clothing",
                  20
                ],
                [
                  2,
                  "Jeans",
                  "Clothing",
                  55
                ],
                [
                  3,
                  "Sneakers",
                  "Footwear",
                  80
                ],
                [
                  4,
                  "Hat",
                  "Accessories",
                  25
                ],
                [
                  5,
                  "Jacket",
                  "Clothing",
                  120
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "item",
                "cost"
              ],
              "rows": [
                [
                  "T-Shirt",
                  20
                ],
                [
                  "Jeans",
                  55
                ],
                [
                  "Sneakers",
                  80
                ],
                [
                  "Hat",
                  25
                ],
                [
                  "Jacket",
                  120
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Look at the tickets table below. Select the three ticket-related columns, but name them event, seat, and price so that they look cleaner for a report. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT event_name AS event, seat_type AS seat, ticket_price AS price FROM tickets;</code>",
          "solution": [
            "select event_name as event, seat_type as seat, ticket_price as price from tickets;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "event_name",
                "seat_type",
                "ticket_price"
              ],
              "rows": [
                [
                  1,
                  "Concert A",
                  "General",
                  50
                ],
                [
                  2,
                  "Concert A",
                  "VIP",
                  120
                ],
                [
                  3,
                  "Play B",
                  "Balcony",
                  40
                ],
                [
                  4,
                  "Play B",
                  "Orchestra",
                  75
                ],
                [
                  5,
                  "Game C",
                  "Lower",
                  90
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "event",
                "seat",
                "price"
              ],
              "rows": [
                [
                  "Concert A",
                  "General",
                  50
                ],
                [
                  "Concert A",
                  "VIP",
                  120
                ],
                [
                  "Play B",
                  "Balcony",
                  40
                ],
                [
                  "Play B",
                  "Orchestra",
                  75
                ],
                [
                  "Game C",
                  "Lower",
                  90
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Look at the orders table below. You can multiply the price column by the quantity column to get a result which you can call total_cost. Try:<br><br><code>SELECT product_name, quantity * unit_price AS total_cost FROM orders;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT product_name, quantity * unit_price AS total_cost FROM orders;</code>",
          "solution": [
            "select product_name, quantity * unit_price as total_cost from orders;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "product_name",
                "quantity",
                "unit_price"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  2,
                  20
                ],
                [
                  2,
                  "Jeans",
                  1,
                  55
                ],
                [
                  3,
                  "Hat",
                  3,
                  25
                ],
                [
                  4,
                  "Sneakers",
                  1,
                  80
                ],
                [
                  5,
                  "Jacket",
                  2,
                  120
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name",
                "total_cost"
              ],
              "rows": [
                [
                  "T-Shirt",
                  40
                ],
                [
                  "Jeans",
                  55
                ],
                [
                  "Hat",
                  75
                ],
                [
                  "Sneakers",
                  80
                ],
                [
                  "Jacket",
                  240
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "View the tickets table below. Each ticket has an additional $5 service fee. Show the event_name along with the price + 5, which you should call final_price. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT event_name, price + 5 AS final_price FROM tickets;</code>",
          "solution": [
            "select event_name, price + 5 as final_price from tickets;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "event_name",
                "seat_type",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Concert A",
                  "General",
                  50
                ],
                [
                  2,
                  "Concert A",
                  "VIP",
                  120
                ],
                [
                  3,
                  "Play B",
                  "Balcony",
                  40
                ],
                [
                  4,
                  "Play B",
                  "Orchestra",
                  75
                ],
                [
                  5,
                  "Game C",
                  "Lower",
                  90
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "event_name",
                "final_price"
              ],
              "rows": [
                [
                  "Concert A",
                  55
                ],
                [
                  "Concert A",
                  125
                ],
                [
                  "Play B",
                  45
                ],
                [
                  "Play B",
                  80
                ],
                [
                  "Game C",
                  95
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "View the products table below. Select the product_name and a new column called discounted_price, which you get by calculating a 10% discount on price. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT product_name, price * 0.9 AS discounted_price FROM products;</code>",
          "solution": [
            "select product_name, price * 0.9 as discounted_price from products;",
            "select product_name, price*0.9 as discounted_price from products;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "product_name",
                "category",
                "price"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  "Clothing",
                  20
                ],
                [
                  2,
                  "Jeans",
                  "Clothing",
                  55
                ],
                [
                  3,
                  "Sneakers",
                  "Footwear",
                  80
                ],
                [
                  4,
                  "Hat",
                  "Accessories",
                  25
                ],
                [
                  5,
                  "Jacket",
                  "Clothing",
                  120
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name",
                "discounted_price"
              ],
              "rows": [
                [
                  "T-Shirt",
                  18
                ],
                [
                  "Jeans",
                  49.5
                ],
                [
                  "Sneakers",
                  72
                ],
                [
                  "Hat",
                  22.5
                ],
                [
                  "Jacket",
                  108
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "View the tickets table below. Select event_name along with the price multiplied by 100 to convert the price from dollars to cents. Call the new column price_cents. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT event_name, price * 100 AS price_cents FROM tickets;</code>",
          "solution": [
            "select event_name, price * 100 as price_cents from tickets;",
            "select event_name, price*100 as price_cents from tickets;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "event_name",
                "seat_type",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Concert A",
                  "General",
                  50
                ],
                [
                  2,
                  "Concert A",
                  "VIP",
                  120
                ],
                [
                  3,
                  "Play B",
                  "Balcony",
                  40
                ],
                [
                  4,
                  "Play B",
                  "Orchestra",
                  75
                ],
                [
                  5,
                  "Game C",
                  "Lower",
                  90
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "event_name",
                "price_cents"
              ],
              "rows": [
                [
                  "Concert A",
                  5000
                ],
                [
                  "Concert A",
                  12000
                ],
                [
                  "Play B",
                  4000
                ],
                [
                  "Play B",
                  7500
                ],
                [
                  "Game C",
                  9000
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "View the products table below. Select the product_name and a new column called remaining_stock, which you get by subtracting sold from stock.",
          "explanation": "",
          "correctAnswer": "<code>SELECT product_name, stock - sold AS remaining_stock FROM products;</code>",
          "solution": [
            "select product_name, stock - sold as remaining_stock from products;",
            "select product_name, stock-sold as remaining_stock from products;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "product_name",
                "stock",
                "sold"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  50,
                  20
                ],
                [
                  2,
                  "Jeans",
                  30,
                  5
                ],
                [
                  3,
                  "Sneakers",
                  25,
                  10
                ],
                [
                  4,
                  "Hat",
                  40,
                  15
                ],
                [
                  5,
                  "Jacket",
                  10,
                  3
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name",
                "remaining_stock"
              ],
              "rows": [
                [
                  "T-Shirt",
                  30
                ],
                [
                  "Jeans",
                  25
                ],
                [
                  "Sneakers",
                  15
                ],
                [
                  "Hat",
                  25
                ],
                [
                  "Jacket",
                  7
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "View the tickets table below. Select event_name along with the revenue divided by tickets_sold to find price per ticket. Call the new column ticket_price.",
          "explanation": "",
          "correctAnswer": "<code>SELECT event_name, revenue / tickets_sold AS ticket_price FROM tickets;</code>",
          "solution": [
            "select event_name, revenue / tickets_sold as ticket_price from tickets;",
            "select event_name, revenue/tickets_sold as ticket_price from tickets;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "event_name",
                "revenue",
                "tickets_sold"
              ],
              "rows": [
                [
                  1,
                  "Concert A",
                  5000,
                  100
                ],
                [
                  2,
                  "Play B",
                  3000,
                  75
                ],
                [
                  3,
                  "Game C",
                  7200,
                  80
                ],
                [
                  4,
                  "Show D",
                  4000,
                  50
                ],
                [
                  5,
                  "Festival E",
                  10000,
                  200
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "event_name",
                "ticket_price"
              ],
              "rows": [
                [
                  "Concert A",
                  50
                ],
                [
                  "Play B",
                  40
                ],
                [
                  "Game C",
                  90
                ],
                [
                  "Show D",
                  80
                ],
                [
                  "Festival E",
                  50
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "View the orders table below. Select the product_name and a new column called revenue, which you get by multiplying quantity by unit_price.",
          "explanation": "",
          "correctAnswer": "<code>SELECT product_name, quantity * unit_price AS revenue FROM orders;</code>",
          "solution": [
            "select product_name, quantity * unit_price as revenue from orders;",
            "select product_name, quantity*unit_price as revenue from orders;",
            "select product_name, unit_price * quantity as revenue from orders;",
            "select product_name, unit_price*quantity as revenue from orders;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "product_name",
                "quantity",
                "unit_price"
              ],
              "rows": [
                [
                  1,
                  "T-Shirt",
                  3,
                  20
                ],
                [
                  2,
                  "Jeans",
                  2,
                  55
                ],
                [
                  3,
                  "Sneakers",
                  4,
                  25
                ],
                [
                  4,
                  "Hat",
                  1,
                  80
                ],
                [
                  5,
                  "Jacket",
                  1,
                  120
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name",
                "remaining_stock"
              ],
              "rows": [
                [
                  "T-Shirt",
                  60
                ],
                [
                  "Jeans",
                  110
                ],
                [
                  "Sneakers",
                  100
                ],
                [
                  "Hat",
                  80
                ],
                [
                  "Jacket",
                  120
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "View the tickets table below. Management wants to increase all ticket prices by 15%. Select event_name and price multiplied by 1.15. Call the new column new_price.",
          "explanation": "",
          "correctAnswer": "<code>SELECT event_name, price * 1.15 AS new_price FROM tickets;</code>",
          "solution": [
            "select event_name, price * 1.15 as new_price from tickets;",
            "select event_name, price*1.15 as new_price from tickets;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "event_name",
                "seat_type",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Concert A",
                  "General",
                  50
                ],
                [
                  2,
                  "Concert A",
                  "VIP",
                  120
                ],
                [
                  3,
                  "Play B",
                  "Balcony",
                  40
                ],
                [
                  4,
                  "Play B",
                  "Orchestra",
                  75
                ],
                [
                  5,
                  "Game C",
                  "Lower",
                  90
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "event_name",
                "new_price"
              ],
              "rows": [
                [
                  "Concert A",
                  57.5
                ],
                [
                  "Concert A",
                  138
                ],
                [
                  "Play B",
                  46
                ],
                [
                  "Play B",
                  86.25
                ],
                [
                  "Game C",
                  103.5
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 8,
      "sourceId": 8,
      "title": "IN & BETWEEN",
      "category": "Filtering Queries",
      "sourcePage": "sql-filtering-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "IN lets you select data where an attribute matches one of several values from a specified list of values. Try:<br><br><code>SELECT * FROM actors WHERE primary_genre IN ('Slapstick', 'Romantic Comedy');</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM actors WHERE primary_genre IN ('Slapstick', 'Romantic Comedy');</code>",
          "solution": [
            "select * from actors where primary_genre in ('slapstick', 'romantic comedy');",
            "select * from actors where primary_genre in ('romantic comedy', 'slapstick');"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "actor_name",
                "primary_genre",
                "debut_year"
              ],
              "rows": [
                [
                  1,
                  "Jim Carrey",
                  "Slapstick",
                  1983
                ],
                [
                  2,
                  "Meg Ryan",
                  "Romantic Comedy",
                  1981
                ],
                [
                  3,
                  "Adam Sandler",
                  "Slapstick",
                  1987
                ],
                [
                  4,
                  "Robin Williams",
                  "Family Comedy",
                  1978
                ],
                [
                  5,
                  "Bill Murray",
                  "Dry Comedy",
                  1976
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "actor_name",
                "primary_genre",
                "debut_year"
              ],
              "rows": [
                [
                  1,
                  "Jim Carrey",
                  "Slapstick",
                  1983
                ],
                [
                  2,
                  "Meg Ryan",
                  "Romantic Comedy",
                  1981
                ],
                [
                  3,
                  "Adam Sandler",
                  "Slapstick",
                  1987
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "BETWEEN, on the other hand, lets you query data where an attribute falls within a specified <i>range</i>. Try:<br><br><code>SELECT * FROM movies WHERE release_year BETWEEN 1990 AND 1995;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM movies WHERE release_year BETWEEN 1990 AND 1995;</code>",
          "solution": [
            "select * from movies where release_year between 1990 and 1995;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "movie_title",
                "lead_actor",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Home Alone",
                  "Macaulay Culkin",
                  1990
                ],
                [
                  2,
                  "Mrs. Doubtfire",
                  "Robin Williams",
                  1993
                ],
                [
                  3,
                  "Ace Ventura",
                  "Jim Carrey",
                  1994
                ],
                [
                  4,
                  "Tommy Boy",
                  "Chris Farley",
                  1995
                ],
                [
                  5,
                  "Liar Liar",
                  "Jim Carrey",
                  1997
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "movie_title",
                "lead_actor",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Home Alone",
                  "Macaulay Culkin",
                  1990
                ],
                [
                  2,
                  "Mrs. Doubtfire",
                  "Robin Williams",
                  1993
                ],
                [
                  3,
                  "Ace Ventura",
                  "Jim Carrey",
                  1994
                ],
                [
                  4,
                  "Tommy Boy",
                  "Chris Farley",
                  1995
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Query the movies table for all records that starred either Jim Carrey or Adam Sandler using IN.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM movies WHERE lead_actor IN ('Jim Carrey', 'Adam Sandler');</code>",
          "solution": [
            "select * from movies where lead_actor in ('jim carrey', 'adam sandler');",
            "select * from movies where lead_actor in ('adam sandler', 'jim carrey');"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "movie_title",
                "lead_actor",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Ace Ventura",
                  "Jim Carrey",
                  1994
                ],
                [
                  2,
                  "The Mask",
                  "Jim Carrey",
                  1994
                ],
                [
                  3,
                  "Billy Madison",
                  "Adam Sandler",
                  1995
                ],
                [
                  4,
                  "Mrs. Doubtfire",
                  "Robin Williams",
                  1993
                ],
                [
                  5,
                  "Groundhog Day",
                  "Bill Murray",
                  1993
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "movie_title",
                "lead_actor",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Ace Ventura",
                  "Jim Carrey",
                  1994
                ],
                [
                  2,
                  "The Mask",
                  "Jim Carrey",
                  1994
                ],
                [
                  3,
                  "Billy Madison",
                  "Adam Sandler",
                  1995
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Select the <b>name and debut year</b> of actors in the actors table who debuted in Hollywood between 1985 and 1990 using BETWEEN.",
          "explanation": "",
          "correctAnswer": "<code>SELECT actor_name, debut_year FROM actors WHERE debut_year BETWEEN 1985 AND 1990;</code>",
          "solution": [
            "select actor_name, debut_year from actors where debut_year between 1985 and 1990;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "actor_name",
                "debut_year",
                "genre"
              ],
              "rows": [
                [
                  1,
                  "Adam Sandler",
                  1987,
                  "Slapstick"
                ],
                [
                  2,
                  "Jim Carrey",
                  1983,
                  "Slapstick"
                ],
                [
                  3,
                  "Ben Stiller",
                  1987,
                  "Dry Comedy"
                ],
                [
                  4,
                  "Chris Farley",
                  1990,
                  "Physical Comedy"
                ],
                [
                  5,
                  "Eddie Murphy",
                  1980,
                  "Stand-Up"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "actor_name",
                "debut_year"
              ],
              "rows": [
                [
                  "Adam Sandler",
                  1987
                ],
                [
                  "Ben Stiller",
                  1987
                ],
                [
                  "Chris Farley",
                  1990
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Select the <b>name and genre</b> of actresses in the actresses table who were known for Romantic Comedy or Family Comedy roles using IN.",
          "explanation": "",
          "correctAnswer": "<code>SELECT actress_name, genre FROM actresses WHERE genre IN ('Romantic Comedy', 'Family Comedy');</code>",
          "solution": [
            "select actress_name, genre from actresses where genre in ('romantic comedy', 'family comedy');",
            "select actress_name, genre from actresses where genre in('romantic comedy', 'family comedy');",
            "select actress_name, genre from actresses where genre in ('family comedy', 'romantic comedy');",
            "select actress_name, genre from actresses where genre in('family comedy', 'romantic comedy');"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "actress_name",
                "genre",
                "breakout_year"
              ],
              "rows": [
                [
                  1,
                  "Meg Ryan",
                  "Romantic Comedy",
                  1989
                ],
                [
                  2,
                  "Whoopi Goldberg",
                  "Family Comedy",
                  1985
                ],
                [
                  3,
                  "Cameron Diaz",
                  "Romantic Comedy",
                  1994
                ],
                [
                  4,
                  "Julia Roberts",
                  "Drama",
                  1988
                ],
                [
                  5,
                  "Lisa Kudrow",
                  "Sitcom",
                  1994
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "actress_name",
                "genre"
              ],
              "rows": [
                [
                  "Meg Ryan",
                  "Romantic Comedy"
                ],
                [
                  "Whoopi Goldberg",
                  "Family Comedy"
                ],
                [
                  "Cameron Diaz",
                  "Romantic Comedy"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Find comedy movies from the comedies table with runtimes between 90 and 110 minutes using BETWEEN. Return movie_title and runtime_minutes.",
          "explanation": "",
          "correctAnswer": "<code>SELECT movie_title, runtime_minutes FROM comedies WHERE runtime_minutes BETWEEN 90 AND 110;</code>",
          "solution": [
            "select movie_title, runtime_minutes from comedies where runtime_minutes between 90 and 110;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "movie_title",
                "runtime_minutes",
                "lead_actor"
              ],
              "rows": [
                [
                  1,
                  "Dumb and Dumber",
                  107,
                  "Jim Carrey"
                ],
                [
                  2,
                  "Billy Madison",
                  89,
                  "Adam Sandler"
                ],
                [
                  3,
                  "Happy Gilmore",
                  92,
                  "Adam Sandler"
                ],
                [
                  4,
                  "The Cable Guy",
                  96,
                  "Jim Carrey"
                ],
                [
                  5,
                  "Rushmore",
                  93,
                  "Bill Murray"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_title",
                "runtime_minutes"
              ],
              "rows": [
                [
                  "Dumb and Dumber",
                  107
                ],
                [
                  "Happy Gilmore",
                  92
                ],
                [
                  "The Cable Guy",
                  96
                ],
                [
                  "Rushmore",
                  93
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Select movies from the movies table that starred either Bill Murray or Robin Williams using IN. Return movie_title and lead_actor.",
          "explanation": "",
          "correctAnswer": "<code>SELECT movie_title, lead_actor FROM movies WHERE lead_actor IN ('Bill Murray', 'Robin Williams');</code>",
          "solution": [
            "select movie_title, lead_actor from movies where lead_actor in ('bill murray', 'robin williams');",
            "select movie_title, lead_actor from movies where lead_actor in('bill murray', 'robin williams');",
            "select movie_title, lead_actor from movies where lead_actor in ('bill murray','robin williams');"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "movie_title",
                "lead_actor",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Groundhog Day",
                  "Bill Murray",
                  1993
                ],
                [
                  2,
                  "Mrs. Doubtfire",
                  "Robin Williams",
                  1993
                ],
                [
                  3,
                  "Flubber",
                  "Robin Williams",
                  1997
                ],
                [
                  4,
                  "Liar Liar",
                  "Jim Carrey",
                  1997
                ],
                [
                  5,
                  "Tommy Boy",
                  "Chris Farley",
                  1995
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_title",
                "lead_actor"
              ],
              "rows": [
                [
                  "Groundhog Day",
                  "Bill Murray"
                ],
                [
                  "Mrs. Doubtfire",
                  "Robin Williams"
                ],
                [
                  "Flubber",
                  "Robin Williams"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Find actors from the actors table who were born between 1950 and 1965 using BETWEEN. Return actor_name and birth_year.",
          "explanation": "",
          "correctAnswer": "<code>SELECT actor_name, birth_year FROM actors WHERE birth_year BETWEEN 1950 AND 1965;</code>",
          "solution": [
            "select actor_name, birth_year from actors where birth_year between 1950 and 1965;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "actor_name",
                "birth_year",
                "known_for"
              ],
              "rows": [
                [
                  1,
                  "Jim Carrey",
                  1962,
                  "Slapstick"
                ],
                [
                  2,
                  "Adam Sandler",
                  1966,
                  "Slapstick"
                ],
                [
                  3,
                  "Robin Williams",
                  1951,
                  "Family Comedy"
                ],
                [
                  4,
                  "Bill Murray",
                  1950,
                  "Dry Comedy"
                ],
                [
                  5,
                  "Ben Stiller",
                  1965,
                  "Dry Comedy"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "actor_name",
                "birth_year"
              ],
              "rows": [
                [
                  "Jim Carrey",
                  1962
                ],
                [
                  "Robin Williams",
                  1951
                ],
                [
                  "Bill Murray",
                  1950
                ],
                [
                  "Ben Stiller",
                  1965
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Select movies from the movies table that are rated PG or PG-13 using IN. Return movie_title and rating.",
          "explanation": "",
          "correctAnswer": "<code>SELECT movie_title, rating FROM movies WHERE rating IN ('PG', 'PG-13');</code>",
          "solution": [
            "select movie_title, rating from movies where rating in ('pg', 'pg-13');",
            "select movie_title, rating from movies where rating in ('pg-13', 'pg');"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "movie_title",
                "rating",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Mrs. Doubtfire",
                  "PG-13",
                  1993
                ],
                [
                  2,
                  "Home Alone",
                  "PG",
                  1990
                ],
                [
                  3,
                  "Ace Ventura",
                  "PG-13",
                  1994
                ],
                [
                  4,
                  "Tommy Boy",
                  "R",
                  1995
                ],
                [
                  5,
                  "Happy Gilmore",
                  "PG-13",
                  1996
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_title",
                "rating"
              ],
              "rows": [
                [
                  "Mrs. Doubtfire",
                  "PG-13"
                ],
                [
                  "Home Alone",
                  "PG"
                ],
                [
                  "Ace Ventura",
                  "PG-13"
                ],
                [
                  "Happy Gilmore",
                  "PG-13"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Select movies from the movies table released between 1992 and 1996 using BETWEEN. Return movie_title and release_year.",
          "explanation": "",
          "correctAnswer": "<code>SELECT movie_title, release_year FROM movies WHERE release_year BETWEEN 1992 AND 1996;</code>",
          "solution": [
            "select movie_title, release_year from movies where release_year between 1992 and 1996;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "id",
                "movie_title",
                "lead_actor",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Wayne's World",
                  "Mike Myers",
                  1992
                ],
                [
                  2,
                  "Groundhog Day",
                  "Bill Murray",
                  1993
                ],
                [
                  3,
                  "Ace Ventura",
                  "Jim Carrey",
                  1994
                ],
                [
                  4,
                  "Tommy Boy",
                  "Chris Farley",
                  1995
                ],
                [
                  5,
                  "Liar Liar",
                  "Jim Carrey",
                  1997
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_title",
                "release_year"
              ],
              "rows": [
                [
                  "Wayne's World",
                  1992
                ],
                [
                  "Groundhog Day",
                  1993
                ],
                [
                  "Ace Ventura",
                  1994
                ],
                [
                  "Tommy Boy",
                  1995
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 9,
      "sourceId": 9,
      "title": "INSERT",
      "category": "Data Modification",
      "sourcePage": "sql-modification-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "The INSERT INTO command is how you insert a new record into a database table. Try:<br><br><code>INSERT INTO cities (city_id, city_name, country, population_millions) VALUES (6, 'Lisbon', 'Portugal', 0.5);</code><br><br><small>Yes, there are other ways to do this, but this method is best practice and is optimized for learning.</small>",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO cities (city_id, city_name, country, population_millions) VALUES (6, 'Lisbon', 'Portugal', 0.5);</code>",
          "solution": [
            "insert into cities (city_id, city_name, country, population_millions) values (6, 'lisbon', 'portugal', 0.5);"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Paris",
                  "France",
                  2.1
                ],
                [
                  2,
                  "Berlin",
                  "Germany",
                  3.6
                ],
                [
                  3,
                  "Madrid",
                  "Spain",
                  3.2
                ],
                [
                  4,
                  "Rome",
                  "Italy",
                  2.8
                ],
                [
                  5,
                  "Vienna",
                  "Austria",
                  1.9
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Paris",
                  "France",
                  2.1
                ],
                [
                  2,
                  "Berlin",
                  "Germany",
                  3.6
                ],
                [
                  3,
                  "Madrid",
                  "Spain",
                  3.2
                ],
                [
                  4,
                  "Rome",
                  "Italy",
                  2.8
                ],
                [
                  5,
                  "Vienna",
                  "Austria",
                  1.9
                ],
                [
                  6,
                  "Lisbon",
                  "Portugal",
                  0.5
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Insert a record into the cities table for Stockholm, Sweden, with 1.0 million. Don't forget to specify each column!",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO cities (city_id, city_name, country, population_millions) VALUES (6, 'Stockholm', 'Sweden', 1.0);</code>",
          "solution": [
            "insert into cities (city_id, city_name, country, population_millions) values (6, 'stockholm', 'sweden', 1.0);"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Amsterdam",
                  "Netherlands",
                  0.9
                ],
                [
                  2,
                  "Brussels",
                  "Belgium",
                  1.2
                ],
                [
                  3,
                  "Copenhagen",
                  "Denmark",
                  0.8
                ],
                [
                  4,
                  "Helsinki",
                  "Finland",
                  0.7
                ],
                [
                  5,
                  "Oslo",
                  "Norway",
                  0.6
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Amsterdam",
                  "Netherlands",
                  0.9
                ],
                [
                  2,
                  "Brussels",
                  "Belgium",
                  1.2
                ],
                [
                  3,
                  "Copenhagen",
                  "Denmark",
                  0.8
                ],
                [
                  4,
                  "Helsinki",
                  "Finland",
                  0.7
                ],
                [
                  5,
                  "Oslo",
                  "Norway",
                  0.6
                ],
                [
                  6,
                  "Stockholm",
                  "Sweden",
                  "1.0"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "You can also omit the column list IF you provide a value for each column. ⚠️ Note that this isn't recommended, as it's not as clear and could cause problems if the table structure changes in the future, but for the sake of learning try:<br><br><code>INSERT INTO cities VALUES (6, 'Zagreb', 'Croatia', 0.8);</code>",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO cities VALUES (6, 'Zagreb', 'Croatia', 0.8);</code>",
          "solution": [
            "insert into cities values (6, 'zagreb', 'croatia', 0.8);"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Prague",
                  "Czech Republic",
                  1.3
                ],
                [
                  2,
                  "Budapest",
                  "Hungary",
                  1.7
                ],
                [
                  3,
                  "Warsaw",
                  "Poland",
                  1.8
                ],
                [
                  4,
                  "Athens",
                  "Greece",
                  3.1
                ],
                [
                  5,
                  "Sofia",
                  "Bulgaria",
                  1.2
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Prague",
                  "Czech Republic",
                  1.3
                ],
                [
                  2,
                  "Budapest",
                  "Hungary",
                  1.7
                ],
                [
                  3,
                  "Warsaw",
                  "Poland",
                  1.8
                ],
                [
                  4,
                  "Athens",
                  "Greece",
                  3.1
                ],
                [
                  5,
                  "Sofia",
                  "Bulgaria",
                  1.2
                ],
                [
                  6,
                  "Zagreb",
                  "Croatia",
                  0.8
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Insert a record into tourist_cities for Vienna, Austria, with 8 million annual visitors. We're back to specifying each column!",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO tourist_cities (city_id, city_name, country, annual_visitors_millions) VALUES (6, 'Vienna', 'Austria', 8);</code>",
          "solution": [
            "insert into tourist_cities (city_id, city_name, country, annual_visitors_millions) values (6, 'vienna', 'austria', 8);"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "annual_visitors_millions"
              ],
              "rows": [
                [
                  1,
                  "Paris",
                  "France",
                  19
                ],
                [
                  2,
                  "Barcelona",
                  "Spain",
                  12
                ],
                [
                  3,
                  "Rome",
                  "Italy",
                  10
                ],
                [
                  4,
                  "London",
                  "United Kingdom",
                  21
                ],
                [
                  5,
                  "Amsterdam",
                  "Netherlands",
                  9
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "annual_visitors_millions"
              ],
              "rows": [
                [
                  1,
                  "Paris",
                  "France",
                  19
                ],
                [
                  2,
                  "Barcelona",
                  "Spain",
                  12
                ],
                [
                  3,
                  "Rome",
                  "Italy",
                  10
                ],
                [
                  4,
                  "London",
                  "United Kingdom",
                  21
                ],
                [
                  5,
                  "Amsterdam",
                  "Netherlands",
                  9
                ],
                [
                  6,
                  "Vienna",
                  "Austria",
                  8
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Insert a record into business_hubs for Dublin, Ireland, with 9 HQs. Specify each column!",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO business_hubs (city_id, city_name, country, fortune_500_hqs) VALUES (6, 'Dublin', 'Ireland', 9);</code>",
          "solution": [
            "insert into business_hubs (city_id, city_name, country, fortune_500_hqs) values (6, 'dublin', 'ireland', 9);",
            "insert into business_hubs(city_id, city_name, country, fortune_500_hqs) values (6, 'dublin', 'ireland', 9);"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "fortune_500_hqs"
              ],
              "rows": [
                [
                  1,
                  "London",
                  "United Kingdom",
                  25
                ],
                [
                  2,
                  "Paris",
                  "France",
                  15
                ],
                [
                  3,
                  "Frankfurt",
                  "Germany",
                  12
                ],
                [
                  4,
                  "Milan",
                  "Italy",
                  8
                ],
                [
                  5,
                  "Zurich",
                  "Switzerland",
                  6
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "fortune_500_hqs"
              ],
              "rows": [
                [
                  1,
                  "London",
                  "United Kingdom",
                  25
                ],
                [
                  2,
                  "Paris",
                  "France",
                  15
                ],
                [
                  3,
                  "Frankfurt",
                  "Germany",
                  12
                ],
                [
                  4,
                  "Milan",
                  "Italy",
                  8
                ],
                [
                  5,
                  "Zurich",
                  "Switzerland",
                  6
                ],
                [
                  6,
                  "Dublin",
                  "Ireland",
                  9
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Insert a record into capital_cities for Tallinn, Estonia in Northern Europe. Specify each column!",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO capital_cities (city_id, city_name, country, region) VALUES (6, 'Tallinn', 'Estonia', 'Northern Europe');</code>",
          "solution": [
            "insert into capital_cities (city_id, city_name, country, region) values (6, 'tallinn', 'estonia', 'northern europe');"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "region"
              ],
              "rows": [
                [
                  1,
                  "Berlin",
                  "Germany",
                  "Western Europe"
                ],
                [
                  2,
                  "Madrid",
                  "Spain",
                  "Southern Europe"
                ],
                [
                  3,
                  "Vienna",
                  "Austria",
                  "Central Europe"
                ],
                [
                  4,
                  "Prague",
                  "Czech Republic",
                  "Central Europe"
                ],
                [
                  5,
                  "Helsinki",
                  "Finland",
                  "Northern Europe"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "region"
              ],
              "rows": [
                [
                  1,
                  "Berlin",
                  "Germany",
                  "Western Europe"
                ],
                [
                  2,
                  "Madrid",
                  "Spain",
                  "Southern Europe"
                ],
                [
                  3,
                  "Vienna",
                  "Austria",
                  "Central Europe"
                ],
                [
                  4,
                  "Prague",
                  "Czech Republic",
                  "Central Europe"
                ],
                [
                  5,
                  "Helsinki",
                  "Finland",
                  "Northern Europe"
                ],
                [
                  6,
                  "Tallinn",
                  "Estonia",
                  "Northern Europe"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Insert a record into transport_cities for Munich Airport in Munich, Germany.",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO transport_cities (city_id, city_name, country, major_airport) VALUES (6, 'Munich', 'Germany', 'Munich Airport');</code>",
          "solution": [
            "insert into transport_cities (city_id, city_name, country, major_airport) values (6, 'munich', 'germany', 'munich airport');"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "major_airport"
              ],
              "rows": [
                [
                  1,
                  "London",
                  "United Kingdom",
                  "Heathrow"
                ],
                [
                  2,
                  "Paris",
                  "France",
                  "Charles de Gaulle"
                ],
                [
                  3,
                  "Amsterdam",
                  "Netherlands",
                  "Schiphol"
                ],
                [
                  4,
                  "Madrid",
                  "Spain",
                  "Barajas"
                ],
                [
                  5,
                  "Rome",
                  "Italy",
                  "Fiumicino"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "major_airport"
              ],
              "rows": [
                [
                  1,
                  "London",
                  "United Kingdom",
                  "Heathrow"
                ],
                [
                  2,
                  "Paris",
                  "France",
                  "Charles de Gaulle"
                ],
                [
                  3,
                  "Amsterdam",
                  "Netherlands",
                  "Schiphol"
                ],
                [
                  4,
                  "Madrid",
                  "Spain",
                  "Barajas"
                ],
                [
                  5,
                  "Rome",
                  "Italy",
                  "Fiumicino"
                ],
                [
                  6,
                  "Munich",
                  "Germany",
                  "Munich Airport"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Insert a record into cities for Riga, Latvia with 0.6 million people.",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO cities (city_id, city_name, country, population_millions) VALUES (6, 'Riga', 'Latvia', 0.6);</code>",
          "solution": [
            "insert into cities (city_id, city_name, country, population_millions) values (6, 'riga', 'latvia', 0.6);"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Oslo",
                  "Norway",
                  0.6
                ],
                [
                  2,
                  "Stockholm",
                  "Sweden",
                  1
                ],
                [
                  3,
                  "Copenhagen",
                  "Denmark",
                  0.8
                ],
                [
                  4,
                  "Reykjavik",
                  "Iceland",
                  0.1
                ],
                [
                  5,
                  "Helsinki",
                  "Finland",
                  0.7
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Oslo",
                  "Norway",
                  0.6
                ],
                [
                  2,
                  "Stockholm",
                  "Sweden",
                  1
                ],
                [
                  3,
                  "Copenhagen",
                  "Denmark",
                  0.8
                ],
                [
                  4,
                  "Reykjavik",
                  "Iceland",
                  0.1
                ],
                [
                  5,
                  "Helsinki",
                  "Finland",
                  0.7
                ],
                [
                  6,
                  "Riga",
                  "Latvia",
                  0.6
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Insert a record into cities for Skopje, North Macedonia with 0.6 million people.<br><br><small>I don't know how to pronounce it either.</small>",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO cities (city_id, city_name, country, population_millions) VALUES (6, 'Skopje', 'North Macedonia', 0.6);</code>",
          "solution": [
            "insert into cities (city_id, city_name, country, population_millions) values (6, 'skopje', 'north macedonia', 0.6);"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Bucharest",
                  "Romania",
                  1.8
                ],
                [
                  2,
                  "Sofia",
                  "Bulgaria",
                  1.2
                ],
                [
                  3,
                  "Belgrade",
                  "Serbia",
                  1.4
                ],
                [
                  4,
                  "Zagreb",
                  "Croatia",
                  0.8
                ],
                [
                  5,
                  "Ljubljana",
                  "Slovenia",
                  0.3
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Bucharest",
                  "Romania",
                  1.8
                ],
                [
                  2,
                  "Sofia",
                  "Bulgaria",
                  1.2
                ],
                [
                  3,
                  "Belgrade",
                  "Serbia",
                  1.4
                ],
                [
                  4,
                  "Zagreb",
                  "Croatia",
                  0.8
                ],
                [
                  5,
                  "Ljubljana",
                  "Slovenia",
                  0.3
                ],
                [
                  6,
                  "Skopje",
                  "North Macedonia",
                  0.6
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Insert a record into cities for Bologna, Italy with 0.4 million people.",
          "explanation": "",
          "correctAnswer": "<code>INSERT INTO cities (city_id, city_name, country, population_millions) VALUES (6, 'Bologna', 'Italy', 0.4);</code>",
          "solution": [
            "insert into cities (city_id, city_name, country, population_millions) values (6, 'bologna', 'italy', 0.4);"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Seville",
                  "Spain",
                  0.7
                ],
                [
                  2,
                  "Valencia",
                  "Spain",
                  0.8
                ],
                [
                  3,
                  "Porto",
                  "Portugal",
                  0.2
                ],
                [
                  4,
                  "Naples",
                  "Italy",
                  1
                ],
                [
                  5,
                  "Turin",
                  "Italy",
                  0.9
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city_id",
                "city_name",
                "country",
                "population_millions"
              ],
              "rows": [
                [
                  1,
                  "Seville",
                  "Spain",
                  0.7
                ],
                [
                  2,
                  "Valencia",
                  "Spain",
                  0.8
                ],
                [
                  3,
                  "Porto",
                  "Portugal",
                  0.2
                ],
                [
                  4,
                  "Naples",
                  "Italy",
                  1
                ],
                [
                  5,
                  "Turin",
                  "Italy",
                  0.9
                ],
                [
                  6,
                  "Bologna",
                  "Italy",
                  0.4
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 10,
      "sourceId": 10,
      "title": "UPDATE",
      "category": "Data Modification",
      "sourcePage": "sql-modification-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "UPDATE lets you change one or more value in one or more row of the table. Take a look at the animals table below and try:<br><br><code>UPDATE animals SET lifespan_years = 15 WHERE animal_id = 1;</code>",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET lifespan_years = 15 WHERE animal_id = 1;</code>",
          "solution": [
            "update animals set lifespan_years = 15 where animal_id = 1;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Leo",
                  "Lion",
                  "Savanna",
                  14
                ],
                [
                  2,
                  "Ellie",
                  "Elephant",
                  "Savanna",
                  60
                ],
                [
                  3,
                  "Stripes",
                  "Tiger",
                  "Jungle",
                  20
                ],
                [
                  4,
                  "Manny",
                  "Manatee",
                  "Ocean",
                  50
                ],
                [
                  5,
                  "Polly",
                  "Parrot",
                  "Rainforest",
                  40
                ],
                [
                  6,
                  "Sam",
                  "Salmon",
                  "River",
                  7
                ],
                [
                  7,
                  "Oscar",
                  "Owl",
                  "Forest",
                  15
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Leo",
                  "Lion",
                  "Savanna",
                  15
                ],
                [
                  2,
                  "Ellie",
                  "Elephant",
                  "Savanna",
                  60
                ],
                [
                  3,
                  "Stripes",
                  "Tiger",
                  "Jungle",
                  20
                ],
                [
                  4,
                  "Manny",
                  "Manatee",
                  "Ocean",
                  50
                ],
                [
                  5,
                  "Polly",
                  "Parrot",
                  "Rainforest",
                  40
                ],
                [
                  6,
                  "Sam",
                  "Salmon",
                  "River",
                  7
                ],
                [
                  7,
                  "Oscar",
                  "Owl",
                  "Forest",
                  15
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Update the animals table so that the value for lifespan_years is 18 for animals named Rex.",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET lifespan_years = 18 WHERE animal_name = 'Rex';</code>",
          "solution": [
            "update animals set lifespan_years = 18 where animal_name = 'rex';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Bella",
                  "Bear",
                  "Forest",
                  25
                ],
                [
                  2,
                  "Rex",
                  "Wolf",
                  "Forest",
                  16
                ],
                [
                  3,
                  "Sly",
                  "Fox",
                  "Forest",
                  14
                ],
                [
                  4,
                  "Hopper",
                  "Rabbit",
                  "Meadow",
                  9
                ],
                [
                  5,
                  "Shelly",
                  "Turtle",
                  "Wetlands",
                  80
                ],
                [
                  6,
                  "Gary",
                  "Goat",
                  "Mountains",
                  18
                ],
                [
                  7,
                  "Nina",
                  "Newt",
                  "Pond",
                  10
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Bella",
                  "Bear",
                  "Forest",
                  25
                ],
                [
                  2,
                  "Rex",
                  "Wolf",
                  "Forest",
                  18
                ],
                [
                  3,
                  "Sly",
                  "Fox",
                  "Forest",
                  14
                ],
                [
                  4,
                  "Hopper",
                  "Rabbit",
                  "Meadow",
                  9
                ],
                [
                  5,
                  "Shelly",
                  "Turtle",
                  "Wetlands",
                  80
                ],
                [
                  6,
                  "Gary",
                  "Goat",
                  "Mountains",
                  18
                ],
                [
                  7,
                  "Nina",
                  "Newt",
                  "Pond",
                  10
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Update the animals table so that the habitat is Antarctica where species is Penguin. ",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET habitat = 'Antarctica' WHERE species = 'Penguin';</code>",
          "solution": [
            "update animals set habitat = 'antarctica' where species = 'penguin';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Penny",
                  "Penguin",
                  "Ice",
                  20
                ],
                [
                  2,
                  "Wally",
                  "Walrus",
                  "Ice",
                  40
                ],
                [
                  3,
                  "Fiona",
                  "Flamingo",
                  "Wetlands",
                  30
                ],
                [
                  4,
                  "Harry",
                  "Hedgehog",
                  "Forest",
                  7
                ],
                [
                  5,
                  "Izzy",
                  "Iguana",
                  "Desert",
                  12
                ],
                [
                  6,
                  "Coco",
                  "Crocodile",
                  "River",
                  70
                ],
                [
                  7,
                  "Milo",
                  "Meerkat",
                  "Savanna",
                  13
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Penny",
                  "Penguin",
                  "Antarctica",
                  20
                ],
                [
                  2,
                  "Wally",
                  "Walrus",
                  "Ice",
                  40
                ],
                [
                  3,
                  "Fiona",
                  "Flamingo",
                  "Wetlands",
                  30
                ],
                [
                  4,
                  "Harry",
                  "Hedgehog",
                  "Forest",
                  7
                ],
                [
                  5,
                  "Izzy",
                  "Iguana",
                  "Desert",
                  12
                ],
                [
                  6,
                  "Coco",
                  "Crocodile",
                  "River",
                  70
                ],
                [
                  7,
                  "Milo",
                  "Meerkat",
                  "Savanna",
                  13
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Update the animals table so that the habitat is Rainforest AND lifespan_years is 20 for animals named Tina.<br><br><small>Hint: <code>SET habitat = 'Rainforest', lifespan_years = 20</code></small>",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET habitat = 'Rainforest', lifespan_years = 20 WHERE animal_name = 'Tina';</code>",
          "solution": [
            "update animals set habitat = 'rainforest', lifespan_years = 20 where animal_name = 'tina';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Tina",
                  "Tiger",
                  "Jungle",
                  18
                ],
                [
                  2,
                  "Sammy",
                  "Snake",
                  "Desert",
                  12
                ],
                [
                  3,
                  "Gerry",
                  "Giraffe",
                  "Savanna",
                  22
                ],
                [
                  4,
                  "Zoe",
                  "Zebra",
                  "Savanna",
                  20
                ],
                [
                  5,
                  "Harry",
                  "Hyena",
                  "Savanna",
                  24
                ],
                [
                  6,
                  "Kiki",
                  "Kangaroo",
                  "Outback",
                  23
                ],
                [
                  7,
                  "Lola",
                  "Lemur",
                  "Rainforest",
                  19
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Tina",
                  "Tiger",
                  "Rainforest",
                  20
                ],
                [
                  2,
                  "Sammy",
                  "Snake",
                  "Desert",
                  12
                ],
                [
                  3,
                  "Gerry",
                  "Giraffe",
                  "Savanna",
                  22
                ],
                [
                  4,
                  "Zoe",
                  "Zebra",
                  "Savanna",
                  20
                ],
                [
                  5,
                  "Harry",
                  "Hyena",
                  "Savanna",
                  24
                ],
                [
                  6,
                  "Kiki",
                  "Kangaroo",
                  "Outback",
                  23
                ],
                [
                  7,
                  "Lola",
                  "Lemur",
                  "Rainforest",
                  19
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "You can update multiple rows at once if they have a shared condition. Update the animals table so that lifespan_years is lifespan_years + 1 for animals whose habitat is Savanna. ",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET lifespan_years = lifespan_years + 1 WHERE habitat = 'Savanna';</code>",
          "solution": [
            "update animals set lifespan_years = lifespan_years + 1 where habitat = 'savanna';",
            "update animals set lifespan_years = lifespan_years+1 where habitat = 'savanna';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Andy",
                  "Antelope",
                  "Savanna",
                  15
                ],
                [
                  2,
                  "Benny",
                  "Buffalo",
                  "Savanna",
                  20
                ],
                [
                  3,
                  "Cathy",
                  "Cheetah",
                  "Savanna",
                  14
                ],
                [
                  4,
                  "Daisy",
                  "Deer",
                  "Forest",
                  12
                ],
                [
                  5,
                  "Eddie",
                  "Elk",
                  "Forest",
                  13
                ],
                [
                  6,
                  "Freddy",
                  "Frog",
                  "Pond",
                  8
                ],
                [
                  7,
                  "Marty",
                  "Moose",
                  "Forest",
                  15
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Andy",
                  "Antelope",
                  "Savanna",
                  16
                ],
                [
                  2,
                  "Benny",
                  "Buffalo",
                  "Savanna",
                  21
                ],
                [
                  3,
                  "Cathy",
                  "Cheetah",
                  "Savanna",
                  15
                ],
                [
                  4,
                  "Daisy",
                  "Deer",
                  "Forest",
                  12
                ],
                [
                  5,
                  "Eddie",
                  "Elk",
                  "Forest",
                  13
                ],
                [
                  6,
                  "Freddy",
                  "Frog",
                  "Pond",
                  8
                ],
                [
                  7,
                  "Marty",
                  "Moose",
                  "Forest",
                  15
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Update the animals table so that lifespan_years is lifespan_years + 2 for animals whose lifespan is GREATER THAN 20 years. ",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET lifespan_years = lifespan_years + 2 WHERE lifespan_years > 20;</code>",
          "solution": [
            "update animals set lifespan_years = lifespan_years + 2 where lifespan_years > 20;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Otto",
                  "Otter",
                  "River",
                  10
                ],
                [
                  2,
                  "Bobby",
                  "Beaver",
                  "River",
                  11
                ],
                [
                  3,
                  "Carl",
                  "Crane",
                  "Wetlands",
                  25
                ],
                [
                  4,
                  "Nelly",
                  "Newt",
                  "Pond",
                  9
                ],
                [
                  5,
                  "Ivy",
                  "Ibis",
                  "Wetlands",
                  22
                ],
                [
                  6,
                  "Sally",
                  "Seal",
                  "Ocean",
                  30
                ],
                [
                  7,
                  "Perry",
                  "Pelican",
                  "Coast",
                  18
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Otto",
                  "Otter",
                  "River",
                  10
                ],
                [
                  2,
                  "Bobby",
                  "Beaver",
                  "River",
                  11
                ],
                [
                  3,
                  "Carl",
                  "Crane",
                  "Wetlands",
                  27
                ],
                [
                  4,
                  "Nelly",
                  "Newt",
                  "Pond",
                  9
                ],
                [
                  5,
                  "Ivy",
                  "Ibis",
                  "Wetlands",
                  24
                ],
                [
                  6,
                  "Sally",
                  "Seal",
                  "Ocean",
                  32
                ],
                [
                  7,
                  "Perry",
                  "Pelican",
                  "Coast",
                  18
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Update the animals table so that lifespan_years is 85 for animals whose habitat is Ocean AND whose species is Whale.",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET lifespan_years = 85 WHERE habitat = 'Ocean' AND species = 'Whale';</code>",
          "solution": [
            "update animals set lifespan_years = 85 where habitat = 'ocean' and species = 'whale';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Rocky",
                  "Raccoon",
                  "Forest",
                  8
                ],
                [
                  2,
                  "Sandy",
                  "Seal",
                  "Ocean",
                  30
                ],
                [
                  3,
                  "Tony",
                  "Tortoise",
                  "Desert",
                  100
                ],
                [
                  4,
                  "Wendy",
                  "Whale",
                  "Ocean",
                  80
                ],
                [
                  5,
                  "Gus",
                  "Goose",
                  "Wetlands",
                  20
                ],
                [
                  6,
                  "Mona",
                  "Monkey",
                  "Jungle",
                  25
                ],
                [
                  7,
                  "Earl",
                  "Eagle",
                  "Mountains",
                  28
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Rocky",
                  "Raccoon",
                  "Forest",
                  8
                ],
                [
                  2,
                  "Sandy",
                  "Seal",
                  "Ocean",
                  30
                ],
                [
                  3,
                  "Tony",
                  "Tortoise",
                  "Desert",
                  100
                ],
                [
                  4,
                  "Wendy",
                  "Whale",
                  "Ocean",
                  85
                ],
                [
                  5,
                  "Gus",
                  "Goose",
                  "Wetlands",
                  20
                ],
                [
                  6,
                  "Mona",
                  "Monkey",
                  "Jungle",
                  25
                ],
                [
                  7,
                  "Earl",
                  "Eagle",
                  "Mountains",
                  28
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Update the animals table so that lifespan_years is 22 for animals whose species is Llama OR Koala.",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET lifespan_years = 22 WHERE species = 'Llama' OR species = 'Koala';</code>",
          "solution": [
            "update animals set lifespan_years = 22 where species = 'llama' or species = 'koala';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Lily",
                  "Llama",
                  "Mountains",
                  20
                ],
                [
                  2,
                  "Paco",
                  "Panda",
                  "Forest",
                  20
                ],
                [
                  3,
                  "Kara",
                  "Koala",
                  "Forest",
                  18
                ],
                [
                  4,
                  "Sid",
                  "Sloth",
                  "Rainforest",
                  25
                ],
                [
                  5,
                  "Toby",
                  "Tapir",
                  "Rainforest",
                  30
                ],
                [
                  6,
                  "Rita",
                  "Rhino",
                  "Savanna",
                  40
                ],
                [
                  7,
                  "Zane",
                  "Zebra",
                  "Savanna",
                  22
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Lily",
                  "Llama",
                  "Mountains",
                  22
                ],
                [
                  2,
                  "Paco",
                  "Panda",
                  "Forest",
                  20
                ],
                [
                  3,
                  "Kara",
                  "Koala",
                  "Forest",
                  22
                ],
                [
                  4,
                  "Sid",
                  "Sloth",
                  "Rainforest",
                  25
                ],
                [
                  5,
                  "Toby",
                  "Tapir",
                  "Rainforest",
                  30
                ],
                [
                  6,
                  "Rita",
                  "Rhino",
                  "Savanna",
                  40
                ],
                [
                  7,
                  "Zane",
                  "Zebra",
                  "Savanna",
                  22
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Update the animals table so that lifespan_years is lifespan_years + 1 for animals whose species is NOT Turtle.",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET lifespan_years = lifespan_years + 1 WHERE NOT species = 'Turtle';</code>",
          "solution": [
            "update animals set lifespan_years = lifespan_years + 1 where not species = 'turtle';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Finn",
                  "Fish",
                  "Ocean",
                  5
                ],
                [
                  2,
                  "Clara",
                  "Clam",
                  "Ocean",
                  10
                ],
                [
                  3,
                  "Oscar",
                  "Octopus",
                  "Ocean",
                  12
                ],
                [
                  4,
                  "Tina",
                  "Turtle",
                  "Ocean",
                  80
                ],
                [
                  5,
                  "Larry",
                  "Lobster",
                  "Ocean",
                  50
                ],
                [
                  6,
                  "Sandy",
                  "Starfish",
                  "Ocean",
                  35
                ],
                [
                  7,
                  "Moe",
                  "Mole",
                  "Underground",
                  6
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Finn",
                  "Fish",
                  "Ocean",
                  6
                ],
                [
                  2,
                  "Clara",
                  "Clam",
                  "Ocean",
                  11
                ],
                [
                  3,
                  "Oscar",
                  "Octopus",
                  "Ocean",
                  13
                ],
                [
                  4,
                  "Tina",
                  "Turtle",
                  "Ocean",
                  80
                ],
                [
                  5,
                  "Larry",
                  "Lobster",
                  "Ocean",
                  51
                ],
                [
                  6,
                  "Sandy",
                  "Starfish",
                  "Ocean",
                  36
                ],
                [
                  7,
                  "Moe",
                  "Mole",
                  "Underground",
                  7
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Update the animals table so that lifespan_years is 8 for the animal with id 4.",
          "explanation": "",
          "correctAnswer": "<code>UPDATE animals SET lifespan_years = 8 WHERE animal_id = 4;</code>",
          "solution": [
            "update animals set lifespan_years = 8 where animal_id = 4;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Bubbles",
                  "Dolphin",
                  "Ocean",
                  35
                ],
                [
                  2,
                  "Chirpy",
                  "Sparrow",
                  "Urban",
                  6
                ],
                [
                  3,
                  "Sneaky",
                  "Snake",
                  "Jungle",
                  9
                ],
                [
                  4,
                  "Fluffy",
                  "Ferret",
                  "Grasslands",
                  7
                ],
                [
                  5,
                  "Hugo",
                  "Hippo",
                  "River",
                  40
                ],
                [
                  6,
                  "Yara",
                  "Yak",
                  "Mountains",
                  20
                ],
                [
                  7,
                  "Penny",
                  "Porcupine",
                  "Forest",
                  15
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "animal_id",
                "animal_name",
                "species",
                "habitat",
                "lifespan_years"
              ],
              "rows": [
                [
                  1,
                  "Bubbles",
                  "Dolphin",
                  "Ocean",
                  35
                ],
                [
                  2,
                  "Chirpy",
                  "Sparrow",
                  "Urban",
                  6
                ],
                [
                  3,
                  "Sneaky",
                  "Snake",
                  "Jungle",
                  9
                ],
                [
                  4,
                  "Fluffy",
                  "Ferret",
                  "Grasslands",
                  8
                ],
                [
                  5,
                  "Hugo",
                  "Hippo",
                  "River",
                  40
                ],
                [
                  6,
                  "Yara",
                  "Yak",
                  "Mountains",
                  20
                ],
                [
                  7,
                  "Penny",
                  "Porcupine",
                  "Forest",
                  15
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 11,
      "sourceId": 11,
      "title": "LIMIT",
      "category": "Basic Queries",
      "sourcePage": "sql-query-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "LIMIT limits the result to a certain number of records. To get the top 3 records of the creatures table, try:<br><br><code>SELECT * FROM creatures LIMIT 3;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM creatures LIMIT 3;</code>",
          "solution": [
            "select * from creatures limit 3;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "type",
                "strength_level"
              ],
              "rows": [
                [
                  1,
                  "Bigfoot",
                  "Cryptid",
                  85
                ],
                [
                  2,
                  "Loch Ness Monster",
                  "Cryptid",
                  90
                ],
                [
                  3,
                  "Chupacabra",
                  "Cryptid",
                  70
                ],
                [
                  4,
                  "Mothman",
                  "Cryptid",
                  65
                ],
                [
                  5,
                  "Jersey Devil",
                  "Cryptid",
                  75
                ],
                [
                  6,
                  "Yeti",
                  "Cryptid",
                  88
                ],
                [
                  7,
                  "Flatwoods Monster",
                  "Cryptid",
                  60
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "type",
                "strength_level"
              ],
              "rows": [
                [
                  1,
                  "Bigfoot",
                  "Cryptid",
                  85
                ],
                [
                  2,
                  "Loch Ness Monster",
                  "Cryptid",
                  90
                ],
                [
                  3,
                  "Chupacabra",
                  "Cryptid",
                  70
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Select creature_id, name, and danger_level from the creatures table for ONLY 4 records. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT creature_id, name, danger_level FROM creatures LIMIT 4;</code>",
          "solution": [
            "select creature_id, name, danger_level from creatures limit 4;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "origin",
                "danger_level"
              ],
              "rows": [
                [
                  1,
                  "Vampire",
                  "Eastern Europe",
                  90
                ],
                [
                  2,
                  "Werewolf",
                  "Europe",
                  85
                ],
                [
                  3,
                  "Zombie",
                  "Global",
                  60
                ],
                [
                  4,
                  "Ghost",
                  "Global",
                  50
                ],
                [
                  5,
                  "Witch",
                  "Europe",
                  70
                ],
                [
                  6,
                  "Demon",
                  "Mythical",
                  95
                ],
                [
                  7,
                  "Ghoul",
                  "Middle East",
                  65
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "danger_level"
              ],
              "rows": [
                [
                  1,
                  "Vampire",
                  90
                ],
                [
                  2,
                  "Werewolf",
                  85
                ],
                [
                  3,
                  "Zombie",
                  60
                ],
                [
                  4,
                  "Ghost",
                  50
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "LIMIT is often used with ORDER BY. Return creature_id, name, and strength_level from the creatures table for the 3 STRONGEST creatures. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT creature_id, name, strength_level FROM creatures ORDER BY strength_level DESC LIMIT 3;</code>",
          "solution": [
            "select creature_id, name, strength_level from creatures order by strength_level desc limit 3;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "type",
                "strength_level"
              ],
              "rows": [
                [
                  1,
                  "Dragon",
                  "Mythical",
                  100
                ],
                [
                  2,
                  "Cyclops",
                  "Mythical",
                  85
                ],
                [
                  3,
                  "Minotaur",
                  "Mythical",
                  88
                ],
                [
                  4,
                  "Hydra",
                  "Mythical",
                  92
                ],
                [
                  5,
                  "Kraken",
                  "Mythical",
                  95
                ],
                [
                  6,
                  "Griffin",
                  "Mythical",
                  80
                ],
                [
                  7,
                  "Gorgon",
                  "Mythical",
                  78
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "strength_level"
              ],
              "rows": [
                [
                  1,
                  "Dragon",
                  100
                ],
                [
                  5,
                  "Kraken",
                  95
                ],
                [
                  4,
                  "Hydra",
                  92
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Return records from the creatures table for the 2 WEAKEST creatures. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM creatures ORDER BY danger_level ASC LIMIT 2;</code>",
          "solution": [
            "select * from creatures order by danger_level asc limit 2;",
            "select * from creatures order by danger_level limit 2;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "danger_level"
              ],
              "rows": [
                [
                  1,
                  "Fairy",
                  20
                ],
                [
                  2,
                  "Goblin",
                  40
                ],
                [
                  3,
                  "Imp",
                  30
                ],
                [
                  4,
                  "Gremlin",
                  45
                ],
                [
                  5,
                  "Pixie",
                  15
                ],
                [
                  6,
                  "Sprite",
                  18
                ],
                [
                  7,
                  "Brownie",
                  10
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "danger_level"
              ],
              "rows": [
                [
                  7,
                  "Brownie",
                  10
                ],
                [
                  5,
                  "Pixie",
                  15
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Return records from the creatures table for the 3 MOST SIGHTED creatures. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM creature_sightings ORDER BY sightings_count DESC LIMIT 3;</code>",
          "solution": [
            "select * from creature_sightings order by sightings_count desc limit 3;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "sightings_count"
              ],
              "rows": [
                [
                  1,
                  "Bigfoot",
                  120
                ],
                [
                  2,
                  "UFO Gremlin",
                  40
                ],
                [
                  3,
                  "Mothman",
                  75
                ],
                [
                  4,
                  "Chupacabra",
                  65
                ],
                [
                  5,
                  "Yeti",
                  95
                ],
                [
                  6,
                  "Loch Ness Monster",
                  110
                ],
                [
                  7,
                  "Shadow Person",
                  55
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "sightings_count"
              ],
              "rows": [
                [
                  1,
                  "Bigfoot",
                  120
                ],
                [
                  6,
                  "Loch Ness Monster",
                  110
                ],
                [
                  5,
                  "Yeti",
                  95
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Return records from the creatures table for the 2 MOST DANGEROUS creatures from the undead category.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM creatures WHERE type = 'Undead' ORDER BY danger_level DESC LIMIT 2;</code>",
          "solution": [
            "select * from creatures where type = 'undead' order by danger_level desc limit 2;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "type",
                "danger_level"
              ],
              "rows": [
                [
                  1,
                  "Vampire",
                  "Undead",
                  90
                ],
                [
                  2,
                  "Zombie",
                  "Undead",
                  60
                ],
                [
                  3,
                  "Skeleton",
                  "Undead",
                  50
                ],
                [
                  4,
                  "Ghoul",
                  "Undead",
                  65
                ],
                [
                  5,
                  "Ghost",
                  "Undead",
                  40
                ],
                [
                  6,
                  "Lich",
                  "Undead",
                  95
                ],
                [
                  7,
                  "Mothman",
                  "Cryptid",
                  98
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "type",
                "danger_level"
              ],
              "rows": [
                [
                  6,
                  "Lich",
                  "Undead",
                  95
                ],
                [
                  1,
                  "Vampire",
                  "Undead",
                  90
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Return records from the creatures table for the 2 OLDEST creatures.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM creatures ORDER BY age_years DESC LIMIT 2;</code>",
          "solution": [
            "select * from creatures order by age_years desc limit 2;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "age_years"
              ],
              "rows": [
                [
                  1,
                  "Dragon",
                  1200
                ],
                [
                  2,
                  "Phoenix",
                  900
                ],
                [
                  3,
                  "Unicorn",
                  500
                ],
                [
                  4,
                  "Griffin",
                  700
                ],
                [
                  5,
                  "Hydra",
                  850
                ],
                [
                  6,
                  "Kraken",
                  1000
                ],
                [
                  7,
                  "Basilisk",
                  600
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "age_years"
              ],
              "rows": [
                [
                  1,
                  "Dragon",
                  1200
                ],
                [
                  6,
                  "Kraken",
                  1000
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Return records from the creatures table for the 3 least aggressive creatures.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM creatures ORDER BY aggression_level ASC LIMIT 3;</code>",
          "solution": [
            "select * from creatures order by aggression_level asc limit 3;",
            "select * from creatures order by aggression_level limit 3;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "aggression_level"
              ],
              "rows": [
                [
                  1,
                  "Fairy",
                  10
                ],
                [
                  2,
                  "Unicorn",
                  15
                ],
                [
                  3,
                  "Elf",
                  20
                ],
                [
                  4,
                  "Dryad",
                  12
                ],
                [
                  5,
                  "Mermaid",
                  18
                ],
                [
                  6,
                  "Centaur",
                  35
                ],
                [
                  7,
                  "Satyr",
                  30
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "aggression_level"
              ],
              "rows": [
                [
                  1,
                  "Fairy",
                  10
                ],
                [
                  4,
                  "Dryad",
                  12
                ],
                [
                  2,
                  "Unicorn",
                  15
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Return records from the cryptids table for the 3 most dangerous creatures.",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM cryptids ORDER BY danger_level DESC LIMIT 3;</code>",
          "solution": [
            "select * from cryptids order by danger_level desc limit 3;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "cryptid_id",
                "name",
                "danger_level"
              ],
              "rows": [
                [
                  1,
                  "Bigfoot",
                  70
                ],
                [
                  2,
                  "Mothman",
                  65
                ],
                [
                  3,
                  "Chupacabra",
                  80
                ],
                [
                  4,
                  "Jersey Devil",
                  75
                ],
                [
                  5,
                  "Yeti",
                  85
                ],
                [
                  6,
                  "Flatwoods Monster",
                  60
                ],
                [
                  7,
                  "Loveland Frog",
                  50
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "cryptid_id",
                "name",
                "danger_level"
              ],
              "rows": [
                [
                  5,
                  "Yeti",
                  85
                ],
                [
                  3,
                  "Chupacabra",
                  80
                ],
                [
                  4,
                  "Jersey Devil",
                  75
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Return creature_id, name, and strength_level for the two strongest MYTHICAL creatures. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT creature_id, name, strength_level FROM creatures WHERE type = 'Mythical' ORDER BY strength_level DESC LIMIT 2;</code>",
          "solution": [
            "select creature_id, name, strength_level from creatures where type = 'mythical' order by strength_level desc limit 2;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "type",
                "strength_level"
              ],
              "rows": [
                [
                  1,
                  "Dragon",
                  "Mythical",
                  100
                ],
                [
                  2,
                  "Werewolf",
                  "Mythical",
                  85
                ],
                [
                  3,
                  "Vampire",
                  "Mythical",
                  90
                ],
                [
                  4,
                  "Zombie",
                  "Undead",
                  60
                ],
                [
                  5,
                  "Ghoul",
                  "Undead",
                  65
                ],
                [
                  6,
                  "Demon",
                  "Mythical",
                  95
                ],
                [
                  7,
                  "Witch",
                  "Mythical",
                  70
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "name",
                "strength_level"
              ],
              "rows": [
                [
                  1,
                  "Dragon",
                  100
                ],
                [
                  6,
                  "Demon",
                  95
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 12,
      "sourceId": 12,
      "title": "LIKE & Wildcards",
      "category": "Filtering Queries",
      "sourcePage": "sql-filtering-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "We can use LIKE with wildcards to filter for certain patterns in text. The % wildcard replaces <b>any number of characters</b> in a string of text. To select any dog whose name starts with B, try:<br><br><code>SELECT dog_id, name FROM dogs WHERE name LIKE 'B%';</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT dog_id, name FROM dogs WHERE name LIKE 'B%';</code>",
          "solution": [
            "select dog_id, name from dogs where name like 'b%';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name",
                "breed",
                "age"
              ],
              "rows": [
                [
                  1,
                  "Buddy",
                  "Golden Retriever",
                  5
                ],
                [
                  2,
                  "Bella",
                  "Labrador",
                  4
                ],
                [
                  3,
                  "Bailey",
                  "Beagle",
                  3
                ],
                [
                  4,
                  "Max",
                  "German Shepherd",
                  6
                ],
                [
                  5,
                  "Milo",
                  "Pug",
                  2
                ],
                [
                  6,
                  "Buster",
                  "Bulldog",
                  7
                ],
                [
                  7,
                  "Charlie",
                  "Spaniel",
                  4
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Buddy"
                ],
                [
                  2,
                  "Bella"
                ],
                [
                  3,
                  "Bailey"
                ],
                [
                  6,
                  "Buster"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "The <i>underscore</i> wildcard, on the other hand, replaces <b>exactly one character</b> in a string of text. To select any dog whose name is exactly four characters long, try:<br><br><code>SELECT dog_id, name FROM dogs WHERE name LIKE '____';</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT dog_id, name FROM dogs WHERE name LIKE '____';</code>",
          "solution": [
            "select dog_id, name from dogs where name like '____';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name",
                "breed"
              ],
              "rows": [
                [
                  1,
                  "Max",
                  "Shepherd"
                ],
                [
                  2,
                  "Lily",
                  "Poodle"
                ],
                [
                  3,
                  "Bear",
                  "Akita"
                ],
                [
                  4,
                  "Duke",
                  "Boxer"
                ],
                [
                  5,
                  "Rocky",
                  "Bulldog"
                ],
                [
                  6,
                  "Milo",
                  "Pug"
                ],
                [
                  7,
                  "Toby",
                  "Beagle"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  2,
                  "Lily"
                ],
                [
                  3,
                  "Bear"
                ],
                [
                  4,
                  "Duke"
                ],
                [
                  6,
                  "Milo"
                ],
                [
                  7,
                  "Toby"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Use LIKE with the % wildcard to return all records from the dogs table for any breed that ends with \"Retriever.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM dogs WHERE breed LIKE '%Retriever';</code>",
          "solution": [
            "select * from dogs where breed like '%retriever';",
            "select * from dogs where breed like '% retriever';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name",
                "breed"
              ],
              "rows": [
                [
                  1,
                  "Rocky",
                  "Shepherd"
                ],
                [
                  2,
                  "Luna",
                  "Labrador Retriever"
                ],
                [
                  3,
                  "Daisy",
                  "Terrier"
                ],
                [
                  4,
                  "Cooper",
                  "Golden Retriever"
                ],
                [
                  5,
                  "Sadie",
                  "Poodle"
                ],
                [
                  6,
                  "Toby",
                  "Terrier"
                ],
                [
                  7,
                  "Zoey",
                  "Hound"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name",
                "breed"
              ],
              "rows": [
                [
                  2,
                  "Luna",
                  "Labrador Retriever"
                ],
                [
                  4,
                  "Cooper",
                  "Golden Retriever"
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Use LIKE with the % wildcard to return all records from the dogs table for any breed that contains the word \"Bull.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM dogs WHERE breed LIKE '%Bull%';</code>",
          "solution": [
            "select * from dogs where breed like '%bull%';",
            "select * from dogs where breed like '% bull%';",
            "select * from dogs where breed like '%bull %';",
            "select * from dogs where breed like '% bull %';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name",
                "breed"
              ],
              "rows": [
                [
                  1,
                  "Jack",
                  "Jack Russell Terrier"
                ],
                [
                  2,
                  "Molly",
                  "Boston Terrier"
                ],
                [
                  3,
                  "Oscar",
                  "Border Collie"
                ],
                [
                  4,
                  "Ruby",
                  "Pit Bull"
                ],
                [
                  5,
                  "Leo",
                  "Pug"
                ],
                [
                  6,
                  "Lucy",
                  "Bull Terrier"
                ],
                [
                  7,
                  "Finn",
                  "Golden Retriever"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name",
                "breed"
              ],
              "rows": [
                [
                  4,
                  "Ruby",
                  "Pit Bull"
                ],
                [
                  6,
                  "Lucy",
                  "Bull Terrier"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Use LIKE with BOTH wildcards to return records from the dogs table for dogs where the <b>second</b> letter is \"a.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM dogs WHERE name LIKE '_a%';</code>",
          "solution": [
            "select * from dogs where name like '_a%';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Max"
                ],
                [
                  2,
                  "Baxter"
                ],
                [
                  3,
                  "Charlie"
                ],
                [
                  4,
                  "Bandit"
                ],
                [
                  5,
                  "Rocky"
                ],
                [
                  6,
                  "Lassie"
                ],
                [
                  7,
                  "Buddy"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Max"
                ],
                [
                  2,
                  "Baxter"
                ],
                [
                  4,
                  "Bandit"
                ],
                [
                  6,
                  "Lassie"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Use LIKE to return records from the dogs table for dogs where the name is exactly five letters long and starts with \"B.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM dogs WHERE name LIKE 'B____';</code>",
          "solution": [
            "select * from dogs where name like 'b____';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Buddy"
                ],
                [
                  2,
                  "Benny"
                ],
                [
                  3,
                  "Bella"
                ],
                [
                  4,
                  "Bruno"
                ],
                [
                  5,
                  "Baxter"
                ],
                [
                  6,
                  "Rocky"
                ],
                [
                  7,
                  "Bailey"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Buddy"
                ],
                [
                  2,
                  "Benny"
                ],
                [
                  3,
                  "Bella"
                ],
                [
                  4,
                  "Bruno"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Use LIKE to return records from the dogs table for dogs whose name contains the letter \"o.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM dogs WHERE name LIKE '%o%';</code>",
          "solution": [
            "select * from dogs where name like '%o%';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Shadow"
                ],
                [
                  2,
                  "Chance"
                ],
                [
                  3,
                  "Copper"
                ],
                [
                  4,
                  "Lucky"
                ],
                [
                  5,
                  "Scout"
                ],
                [
                  6,
                  "Ace"
                ],
                [
                  7,
                  "Rosie"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Shadow"
                ],
                [
                  3,
                  "Copper"
                ],
                [
                  5,
                  "Scout"
                ],
                [
                  7,
                  "Rosie"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Use LIKE to return records from the dogs table for dogs whose names are exactly five letters long and end in \"y.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM dogs WHERE name LIKE '____y';</code>",
          "solution": [
            "select * from dogs where name like '____y';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Rocky"
                ],
                [
                  2,
                  "Buddy"
                ],
                [
                  3,
                  "Lucky"
                ],
                [
                  4,
                  "Benny"
                ],
                [
                  5,
                  "Molly"
                ],
                [
                  6,
                  "Sadie"
                ],
                [
                  7,
                  "Bailey"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Rocky"
                ],
                [
                  2,
                  "Buddy"
                ],
                [
                  3,
                  "Lucky"
                ],
                [
                  4,
                  "Benny"
                ],
                [
                  5,
                  "Molly"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Use LIKE to return records from the dogs table for dogs where breed begins with the word \"German.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM dogs WHERE breed LIKE 'German%';</code>",
          "solution": [
            "select * from dogs where breed like 'german%';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name",
                "breed"
              ],
              "rows": [
                [
                  1,
                  "Rex",
                  "German Shepherd"
                ],
                [
                  2,
                  "Max",
                  "German Shorthaired Pointer"
                ],
                [
                  3,
                  "Bella",
                  "Belgian Malinois"
                ],
                [
                  4,
                  "Duke",
                  "German Spitz"
                ],
                [
                  5,
                  "Luna",
                  "Labrador"
                ],
                [
                  6,
                  "Rocky",
                  "German Wirehaired Pointer"
                ],
                [
                  7,
                  "Sadie",
                  "Poodle"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name",
                "breed"
              ],
              "rows": [
                [
                  1,
                  "Rex",
                  "German Shepherd"
                ],
                [
                  2,
                  "Max",
                  "German Shorthaired Pointer"
                ],
                [
                  4,
                  "Duke",
                  "German Spitz"
                ],
                [
                  6,
                  "Rocky",
                  "German Wirehaired Pointer"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Use LIKE to return records from the dogs table for dogs whose name is five letters long, where the first letter is \"B\" and the fourth letter is \"d.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM dogs WHERE name LIKE 'B__d_';</code>",
          "solution": [
            "select * from dogs where name like 'b__d_';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Buddy"
                ],
                [
                  2,
                  "Bodhi"
                ],
                [
                  3,
                  "Brady"
                ],
                [
                  4,
                  "Brody"
                ],
                [
                  5,
                  "Bailey"
                ],
                [
                  6,
                  "Bentley"
                ],
                [
                  7,
                  "Bobby"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "dog_id",
                "name"
              ],
              "rows": [
                [
                  1,
                  "Buddy"
                ],
                [
                  3,
                  "Brady"
                ],
                [
                  4,
                  "Brody"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 13,
      "sourceId": 13,
      "title": "DELETE",
      "category": "Data Modification",
      "sourcePage": "sql-modification-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "You can use DELETE to remove a record from a database table. Try:<br><br><code>DELETE FROM sightings WHERE sighting_id = 3;</code>",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE sighting_id = 3;</code>",
          "solution": [
            "delete from sightings where sighting_id = 3;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant",
                  1966
                ],
                [
                  2,
                  "Bigfoot",
                  "Oregon",
                  1972
                ],
                [
                  3,
                  "Mothman",
                  "Chicago",
                  2017
                ],
                [
                  4,
                  "Chupacabra",
                  "Texas",
                  1995
                ],
                [
                  5,
                  "Mothman",
                  "Ohio",
                  2020
                ],
                [
                  6,
                  "Jersey Devil",
                  "New Jersey",
                  1909
                ],
                [
                  7,
                  "Mothman",
                  "West Virginia",
                  1967
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant"
                ],
                [
                  2,
                  "Bigfoot",
                  "Washington"
                ],
                [
                  4,
                  "Chupacabra",
                  "Arizona"
                ],
                [
                  5,
                  "Mothman",
                  "Ohio"
                ],
                [
                  6,
                  "Yeti",
                  "Nepal"
                ],
                [
                  7,
                  "Mothman",
                  "West Virginia"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "DELETE can remove multiple records at once. Delete all records from the sightings table where creature_name is Mothman.",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE creature_name = 'Mothman';</code>",
          "solution": [
            "delete from sightings where creature_name = 'mothman';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant"
                ],
                [
                  2,
                  "Bigfoot",
                  "Washington"
                ],
                [
                  3,
                  "Mothman",
                  "Chicago"
                ],
                [
                  4,
                  "Chupacabra",
                  "Arizona"
                ],
                [
                  5,
                  "Mothman",
                  "Ohio"
                ],
                [
                  6,
                  "Yeti",
                  "Nepal"
                ],
                [
                  7,
                  "Mothman",
                  "West Virginia"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  2,
                  "Bigfoot",
                  "Washington"
                ],
                [
                  4,
                  "Chupacabra",
                  "Arizona"
                ],
                [
                  6,
                  "Yeti",
                  "Nepal"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Delete all records from the sightings table where location is Chicago and creature_name is Mothman. ",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE creature_name = 'Mothman' AND location = 'Chicago';</code>",
          "solution": [
            "delete from sightings where creature_name = 'mothman' and location = 'chicago';",
            "delete from sightings where location = 'chicago' and creature_name = 'mothman';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant",
                  1966
                ],
                [
                  2,
                  "Mothman",
                  "Chicago",
                  2017
                ],
                [
                  3,
                  "Mothman",
                  "Ohio",
                  2020
                ],
                [
                  4,
                  "Bigfoot",
                  "Ohio",
                  2019
                ],
                [
                  5,
                  "Chupacabra",
                  "Texas",
                  1995
                ],
                [
                  6,
                  "Mothman",
                  "Chicago",
                  1967
                ],
                [
                  7,
                  "Yeti",
                  "Nepal",
                  2001
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant",
                  1966
                ],
                [
                  3,
                  "Mothman",
                  "Ohio",
                  2020
                ],
                [
                  4,
                  "Bigfoot",
                  "Ohio",
                  2019
                ],
                [
                  5,
                  "Chupacabra",
                  "Texas",
                  1995
                ],
                [
                  7,
                  "Yeti",
                  "Nepal",
                  2001
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Delete all records from the sightings table where year is less than 1970. ",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE year < 1970;</code>",
          "solution": [
            "delete from sightings where year < 1970;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  1966
                ],
                [
                  2,
                  "Mothman",
                  1967
                ],
                [
                  3,
                  "Mothman",
                  1970
                ],
                [
                  4,
                  "Bigfoot",
                  1982
                ],
                [
                  5,
                  "Chupacabra",
                  1995
                ],
                [
                  6,
                  "Mothman",
                  2020
                ],
                [
                  7,
                  "Jersey Devil",
                  1909
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "year"
              ],
              "rows": [
                [
                  3,
                  "Mothman",
                  1970
                ],
                [
                  4,
                  "Bigfoot",
                  1982
                ],
                [
                  5,
                  "Chupacabra",
                  1995
                ],
                [
                  6,
                  "Mothman",
                  2020
                ],
                [
                  7,
                  "Jersey Devil",
                  1909
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Delete all records from the sightings table where location is Ohio OR location is Arizona. ",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE location = 'Ohio' OR location = 'Arizona';</code>",
          "solution": [
            "delete from sightings where location = 'ohio' or location = 'arizona';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant"
                ],
                [
                  2,
                  "Bigfoot",
                  "Oregon"
                ],
                [
                  3,
                  "Mothman",
                  "Ohio"
                ],
                [
                  4,
                  "Chupacabra",
                  "Arizona"
                ],
                [
                  5,
                  "Jersey Devil",
                  "New Jersey"
                ],
                [
                  6,
                  "Mothman",
                  "Chicago"
                ],
                [
                  7,
                  "Bigfoot",
                  "California"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant"
                ],
                [
                  2,
                  "Bigfoot",
                  "Oregon"
                ],
                [
                  5,
                  "Jersey Devil",
                  "New Jersey"
                ],
                [
                  6,
                  "Mothman",
                  "Chicago"
                ],
                [
                  7,
                  "Bigfoot",
                  "California"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Delete all records from the sightings table where location STARTS with \"Pleasant\".<br><br>Hint:<code>LIKE 'Pleasant%'</code>",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE location LIKE 'Pleasant%';</code>",
          "solution": [
            "delete from sightings where location like 'pleasant%';",
            "delete from sightings where location like 'pleasant %';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant"
                ],
                [
                  2,
                  "Mothman",
                  "Pleasant Grove"
                ],
                [
                  3,
                  "Bigfoot",
                  "Pleasant Valley"
                ],
                [
                  4,
                  "Chupacabra",
                  "El Paso"
                ],
                [
                  5,
                  "Mothman",
                  "Chicago"
                ],
                [
                  6,
                  "Jersey Devil",
                  "New Jersey"
                ],
                [
                  7,
                  "Mothman",
                  "Pleasant Hill"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant"
                ],
                [
                  4,
                  "Chupacabra",
                  "El Paso"
                ],
                [
                  5,
                  "Mothman",
                  "Chicago"
                ],
                [
                  6,
                  "Jersey Devil",
                  "New Jersey"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Delete all records from the sightings table where creature_name is NOT Mothman. ",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE NOT creature_name = 'Mothman';</code>",
          "solution": [
            "delete from sightings where not creature_name = 'mothman';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name"
              ],
              "rows": [
                [
                  1,
                  "Mothman"
                ],
                [
                  2,
                  "Bigfoot"
                ],
                [
                  3,
                  "Chupacabra"
                ],
                [
                  4,
                  "Mothman"
                ],
                [
                  5,
                  "Jersey Devil"
                ],
                [
                  6,
                  "Mothman"
                ],
                [
                  7,
                  "Yeti"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name"
              ],
              "rows": [
                [
                  2,
                  "Bigfoot"
                ],
                [
                  3,
                  "Chupacabra"
                ],
                [
                  5,
                  "Jersey Devil"
                ],
                [
                  7,
                  "Yeti"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Delete all records from the sightings table where year is BETWEEN 1970 and 1990.",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE year BETWEEN 1970 AND 1990;</code>",
          "solution": [
            "delete from sightings where year between 1970 and 1990;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  1966
                ],
                [
                  2,
                  "Mothman",
                  1967
                ],
                [
                  3,
                  "Bigfoot",
                  1975
                ],
                [
                  4,
                  "Mothman",
                  1980
                ],
                [
                  5,
                  "Chupacabra",
                  1995
                ],
                [
                  6,
                  "Mothman",
                  2005
                ],
                [
                  7,
                  "Yeti",
                  2010
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  1966
                ],
                [
                  2,
                  "Mothman",
                  1967
                ],
                [
                  5,
                  "Chupacabra",
                  1995
                ],
                [
                  6,
                  "Mothman",
                  2005
                ],
                [
                  7,
                  "Yeti",
                  2010
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Delete all records from the sightings table where creature_name is IN ('Bigfoot', 'Yeti').",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings WHERE creature_name IN ('Bigfoot', 'Yeti');</code>",
          "solution": [
            "delete from sightings where creature_name in ('bigfoot', 'yeti');",
            "delete from sightings where creature_name in ('yeti', 'bigfoot');"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name"
              ],
              "rows": [
                [
                  1,
                  "Mothman"
                ],
                [
                  2,
                  "Bigfoot"
                ],
                [
                  3,
                  "Chupacabra"
                ],
                [
                  4,
                  "Mothman"
                ],
                [
                  5,
                  "Jersey Devil"
                ],
                [
                  6,
                  "Yeti"
                ],
                [
                  7,
                  "Flatwoods Monster"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name"
              ],
              "rows": [
                [
                  1,
                  "Mothman"
                ],
                [
                  3,
                  "Chupacabra"
                ],
                [
                  4,
                  "Mothman"
                ],
                [
                  5,
                  "Jersey Devil"
                ],
                [
                  7,
                  "Flatwoods Monster"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "⚠️ DELETE without WHERE deletes all records in a table. Let's do it anyway: delete all records in the table with:<br><br><code>DELETE FROM sightings;</code>",
          "explanation": "",
          "correctAnswer": "<code>DELETE FROM sightings;</code>",
          "solution": [
            "delete from sightings;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  1,
                  "Mothman",
                  "Point Pleasant"
                ],
                [
                  2,
                  "Bigfoot",
                  "Oregon"
                ],
                [
                  3,
                  "Chupacabra",
                  "Texas"
                ],
                [
                  4,
                  "Jersey Devil",
                  "New Jersey"
                ],
                [
                  5,
                  "Yeti",
                  "Nepal"
                ],
                [
                  6,
                  "Mothman",
                  "Ohio"
                ],
                [
                  7,
                  "Flatwoods Monster",
                  "West Virginia"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sighting_id",
                "creature_name",
                "location"
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 14,
      "sourceId": 14,
      "title": "Inner Join",
      "category": "Joins",
      "sourcePage": "sql-join-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "In SQL, you can use a JOIN to combine different tables. You join them by a common column, like the customer_id in both tables below. <br><br>\nWe can match the customer_id in the orders with the customer_id in the customers table to combine the tables and get a result that you couldn't get from either table alone. Try:<br><br><code>SELECT customer_name, order_total FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT customer_name, order_total FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id;</code>",
          "solution": [
            "select customer_name, order_total from customers inner join orders on customers.customer_id = orders.customer_id;",
            "select customer_name, order_total from customers join orders on customers.customer_id = orders.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "customer_name",
                "country"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "USA"
                ],
                [
                  2,
                  "Bob",
                  "Canada"
                ],
                [
                  3,
                  "Carlos",
                  "Spain"
                ],
                [
                  4,
                  "Diana",
                  "UK"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id",
                "order_total"
              ],
              "rows": [
                [
                  101,
                  1,
                  45.99
                ],
                [
                  102,
                  1,
                  "89.50"
                ],
                [
                  103,
                  2,
                  "22.00"
                ],
                [
                  104,
                  5,
                  "100.00"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_name",
                "order_total"
              ],
              "rows": [
                [
                  "Alice",
                  45.99
                ],
                [
                  "Alice",
                  "89.50"
                ],
                [
                  "Bob",
                  "22.00"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "An INNER JOIN (what we're learning now) means that any row <i>without</i> a matching value in the other table is <i>excluded</i>. It is the default join in SQL.<br><br>\nThe syntax is as follows: <br><code>SELECT [columns]<br>FROM [table1]<br>INNER JOIN [table2]<br>ON [table1].[column name in table1] = [table2].[matching column in table2]</code><br><br>\nFor this next example, we want to combine the orders table and the customers table to show order_id, customer_name, and order_date. \n\nTry:<br><br><code>SELECT order_id, customer_name, order_date<br>FROM orders<br>INNER JOIN customers<br>ON orders.customer_id = customers.customer_id;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT order_id, customer_name, order_date FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id;</code>",
          "solution": [
            "select order_id, customer_name, order_date from orders inner join customers on orders.customer_id = customers.customer_id;",
            "select order_id, customer_name, order_date from orders join customers on orders.customer_id = customers.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "customer_name"
              ],
              "rows": [
                [
                  1,
                  "Alice"
                ],
                [
                  2,
                  "Bob"
                ],
                [
                  3,
                  "Carlos"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id",
                "order_date"
              ],
              "rows": [
                [
                  201,
                  1,
                  2024
                ],
                [
                  202,
                  3,
                  2024
                ],
                [
                  203,
                  4,
                  2024
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_name",
                "order_date"
              ],
              "rows": [
                [
                  201,
                  "Alice",
                  2024
                ],
                [
                  202,
                  "Carlos",
                  2024
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "For this next example, we want to combine the products table and the orders table to show order_id, product_name, and quantity. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT order_id, product_name, quantity FROM orders INNER JOIN products ON orders.product_id = products.product_id;</code>",
          "solution": [
            "select order_id, product_name, quantity from orders inner join products on orders.product_id = products.product_id;",
            "select order_id, product_name, quantity from products inner join orders on orders.product_id = products.product_id;",
            "select order_id, product_name, quantity from products inner join orders on products.product_id = orders.product_id;",
            "select order_id, product_name, quantity from orders inner join products on products.product_id = orders.product_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_id",
                "product_name",
                "price"
              ],
              "rows": [
                [
                  10,
                  "Laptop",
                  999.99
                ],
                [
                  11,
                  "Mouse",
                  "25.00"
                ],
                [
                  12,
                  "Keyboard",
                  "75.00"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "product_id",
                "quantity"
              ],
              "rows": [
                [
                  301,
                  10,
                  1
                ],
                [
                  302,
                  11,
                  2
                ],
                [
                  303,
                  15,
                  1
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "product_name",
                "quantity"
              ],
              "rows": [
                [
                  301,
                  "Laptop",
                  1
                ],
                [
                  302,
                  "Mouse",
                  2
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Join the customers table and the orders table to show customer_name, order_id. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT customer_name, order_id FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id;</code>",
          "solution": [
            "select customer_name, order_id from customers inner join orders on customers.customer_id = orders.customer_id;",
            "select customer_name, order_id from orders inner join customers on customers.customer_id = orders.customer_id;",
            "select customer_name, order_id from orders inner join customers on orders.customer_id = customers.customer_id;",
            "select customer_name, order_id from customers inner join orders on orders.customer_id = customers.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "customer_name"
              ],
              "rows": [
                [
                  1,
                  "Alice"
                ],
                [
                  2,
                  "Bob"
                ],
                [
                  3,
                  "Carlos"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id"
              ],
              "rows": [
                [
                  401,
                  1
                ],
                [
                  402,
                  1
                ],
                [
                  403,
                  3
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_name",
                "order_id"
              ],
              "rows": [
                [
                  "Alice",
                  401
                ],
                [
                  "Alice",
                  402
                ],
                [
                  "Carlos",
                  403
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Join the orders table and the products table to show order_id, product_name. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT order_id, product_name FROM orders INNER JOIN products ON orders.product_id = products.product_id;</code>",
          "solution": [
            "select order_id, product_name from orders inner join products on orders.product_id = products.product_id;",
            "select order_id, product_name from orders inner join products on products.product_id = orders.product_id;",
            "select order_id, product_name from products inner join orders on orders.product_id = products.product_id;",
            "select order_id, product_name from products inner join orders on products.product_id = orders.product_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_id",
                "product_name"
              ],
              "rows": [
                [
                  1,
                  "Phone"
                ],
                [
                  2,
                  "Tablet"
                ],
                [
                  3,
                  "Charger"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "product_id"
              ],
              "rows": [
                [
                  501,
                  1
                ],
                [
                  502,
                  3
                ],
                [
                  503,
                  5
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "product_name"
              ],
              "rows": [
                [
                  501,
                  "Phone"
                ],
                [
                  502,
                  "Charger"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Join the customers table and the orders table to show country, order_total. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT country, order_total FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id;</code>",
          "solution": [
            "select country, order_total from customers inner join orders on customers.customer_id = orders.customer_id;",
            "select country, order_total from customers inner join orders on orders.customer_id = customers.customer_id;",
            "select country, order_total from orders inner join customers on customers.customer_id = orders.customer_id;",
            "select country, order_total from orders inner join customers on orders.customer_id = customers.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "country"
              ],
              "rows": [
                [
                  1,
                  "USA"
                ],
                [
                  2,
                  "Canada"
                ],
                [
                  3,
                  "Spain"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id",
                "order_total"
              ],
              "rows": [
                [
                  601,
                  1,
                  120
                ],
                [
                  602,
                  2,
                  80
                ],
                [
                  603,
                  4,
                  60
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "country",
                "order_total"
              ],
              "rows": [
                [
                  "USA",
                  120
                ],
                [
                  "Canada",
                  80
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Show ONLY the orders that match with a valid customer ID. To do this, join the orders table and the customers table to show order_id, customer_id. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT order_id, customer_id FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id;</code>",
          "solution": [
            "select order_id, customer_id from orders inner join customers on orders.customer_id = customers.customer_id;",
            "select order_id, customer_id from orders inner join customers on customers.customer_id = orders.customer_id;",
            "select order_id, customer_id from customers inner join orders on orders.customer_id = customers.customer_id;",
            "select order_id, customer_id from customers inner join orders on customers.customer_id = orders.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id"
              ],
              "rows": [
                [
                  1
                ],
                [
                  2
                ],
                [
                  3
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id"
              ],
              "rows": [
                [
                  701,
                  1
                ],
                [
                  702,
                  3
                ],
                [
                  703,
                  5
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id"
              ],
              "rows": [
                [
                  701,
                  1
                ],
                [
                  702,
                  3
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Join the customers table and the orders table to show customer_name, product_id. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT customer_name, product_id FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id;</code>",
          "solution": [
            "select customer_name, product_id from customers inner join orders on customers.customer_id = orders.customer_id;",
            "select customer_name, product_id from customers inner join orders on orders.customer_id = customers.customer_id;",
            "select customer_name, product_id from orders inner join customers on customers.customer_id = orders.customer_id;",
            "select customer_name, product_id from orders inner join customers on orders.customer_id = customers.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "customer_name"
              ],
              "rows": [
                [
                  1,
                  "Alice"
                ],
                [
                  2,
                  "Bob"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id",
                "product_id"
              ],
              "rows": [
                [
                  801,
                  1,
                  10
                ],
                [
                  802,
                  2,
                  11
                ],
                [
                  803,
                  3,
                  12
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_name",
                "product_id"
              ],
              "rows": [
                [
                  "Alice",
                  10
                ],
                [
                  "Bob",
                  11
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Join the orders table and the customers table to show order_id, customer_name. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT order_id, customer_name FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id;</code>",
          "solution": [
            "select order_id, customer_name from orders inner join customers on orders.customer_id = customers.customer_id;",
            "select order_id, customer_name from orders inner join customers on customers.customer_id = orders.customer_id;",
            "select order_id, customer_name from customers inner join orders on orders.customer_id = customers.customer_id;",
            "select order_id, customer_name from customers inner join orders on customers.customer_id = orders.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "customer_name"
              ],
              "rows": [
                [
                  1,
                  "Alice"
                ],
                [
                  2,
                  "Bob"
                ],
                [
                  3,
                  "Carlos"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id"
              ],
              "rows": [
                [
                  901,
                  2
                ],
                [
                  902,
                  3
                ],
                [
                  903,
                  4
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_name"
              ],
              "rows": [
                [
                  901,
                  "Bob"
                ],
                [
                  902,
                  "Carlos"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Join the customers table and the orders table to show customer_name, order_total. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT customer_name, order_total FROM customers INNER JOIN orders ON customers.customer_id = orders.customer_id;</code>",
          "solution": [
            "select customer_name, order_total from customers inner join orders on customers.customer_id = orders.customer_id;",
            "select customer_name, order_total from customers inner join orders on orders.customer_id = customers.customer_id;",
            "select customer_name, order_total from orders inner join customers on customers.customer_id = orders.customer_id;",
            "select customer_name, order_total from orders inner join customers on orders.customer_id = customers.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "customer_name"
              ],
              "rows": [
                [
                  1,
                  "Alice"
                ],
                [
                  2,
                  "Bob"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer_id",
                "order_total"
              ],
              "rows": [
                [
                  1001,
                  1,
                  55
                ],
                [
                  1002,
                  2,
                  75
                ],
                [
                  1003,
                  3,
                  90
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_name",
                "order_total"
              ],
              "rows": [
                [
                  "Alice",
                  55
                ],
                [
                  "Bob",
                  75
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 15,
      "sourceId": 15,
      "title": "MIN & MAX",
      "category": "Aggregate Functions",
      "sourcePage": "sql-aggregate-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "<i>Aggregate functions</i> in SQL look at many rows and return a single result. MIN and MAX are examples of aggregate functions. To get the minimum height in the landmarks table, try:<br><br><code>SELECT MIN(height_meters) FROM landmarks;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT MIN(height_meters) FROM landmarks;</code>",
          "solution": [
            "select min(height_meters) from landmarks;",
            "select min (height_meters) from landmarks;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "height_meters",
                "borough"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  93,
                  "Manhattan"
                ],
                [
                  2,
                  "Empire State Building",
                  381,
                  "Manhattan"
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  84,
                  "Brooklyn"
                ],
                [
                  4,
                  "Chrysler Building",
                  319,
                  "Manhattan"
                ],
                [
                  5,
                  "One World Trade Center",
                  541,
                  "Manhattan"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "min"
              ],
              "rows": [
                [
                  84
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Now find the MAX height from the landmarks table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT MAX(height_meters) FROM landmarks;</code>",
          "solution": [
            "select max(height_meters) from landmarks;",
            "select max (height_meters) from landmarks;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "height_meters",
                "borough"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  93,
                  "Manhattan"
                ],
                [
                  2,
                  "Empire State Building",
                  381,
                  "Manhattan"
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  84,
                  "Brooklyn"
                ],
                [
                  4,
                  "Chrysler Building",
                  319,
                  "Manhattan"
                ],
                [
                  5,
                  "One World Trade Center",
                  541,
                  "Manhattan"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "max"
              ],
              "rows": [
                [
                  541
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Use MIN to find the earliest year_built from the landmarks table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT MIN(year_built) FROM landmarks;</code>",
          "solution": [
            "select min(year_built) from landmarks;",
            "select min (year_built) from landmarks;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "year_built",
                "borough"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  1886,
                  "Manhattan"
                ],
                [
                  2,
                  "Empire State Building",
                  1931,
                  "Manhattan"
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  1883,
                  "Brooklyn"
                ],
                [
                  4,
                  "Chrysler Building",
                  1930,
                  "Manhattan"
                ],
                [
                  5,
                  "One World Trade Center",
                  2014,
                  "Manhattan"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "min"
              ],
              "rows": [
                [
                  1883
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Use MAX to find the most recent year from the landmarks table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT MAX(year_built) FROM landmarks;</code>",
          "solution": [
            "select max(year_built) from landmarks;",
            "select max (year_built) from landmarks;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "year_built",
                "borough"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  1886,
                  "Manhattan"
                ],
                [
                  2,
                  "Empire State Building",
                  1931,
                  "Manhattan"
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  1883,
                  "Brooklyn"
                ],
                [
                  4,
                  "Chrysler Building",
                  1930,
                  "Manhattan"
                ],
                [
                  5,
                  "One World Trade Center",
                  2014,
                  "Manhattan"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "max"
              ],
              "rows": [
                [
                  2014
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Use MIN to find the lowest number of annual visitors from the landmarks table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT MIN(annual_visitors_millions) FROM landmarks;</code>",
          "solution": [
            "select min(annual_visitors_millions) from landmarks;",
            "select min (annual_visitors_millions) from landmarks;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "annual_visitors_millions"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  4.5
                ],
                [
                  2,
                  "Empire State Building",
                  4
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  14
                ],
                [
                  4,
                  "Chrysler Building",
                  1.5
                ],
                [
                  5,
                  "One World Trade Center",
                  2.3
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "min"
              ],
              "rows": [
                [
                  1.5
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Find the highest number of annual visitors in the landmarks table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT MAX(annual_visitors_millions) FROM landmarks;</code>",
          "solution": [
            "select max(annual_visitors_millions) from landmarks;",
            "select max (annual_visitors_millions) from landmarks;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "annual_visitors_millions"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  4.5
                ],
                [
                  2,
                  "Empire State Building",
                  4
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  14
                ],
                [
                  4,
                  "Chrysler Building",
                  1.5
                ],
                [
                  5,
                  "One World Trade Center",
                  2.3
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "max"
              ],
              "rows": [
                [
                  14
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Find the lowest height in the landmarks table for landmarks in Manhattan. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT MIN(height_meters) FROM landmarks WHERE borough = 'Manhattan';</code>",
          "solution": [
            "select min(height_meters) from landmarks where borough = 'manhattan';",
            "select min (height_meters) from landmarks where borough = 'manhattan';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "height_meters",
                "borough"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  93,
                  "Manhattan"
                ],
                [
                  2,
                  "Empire State Building",
                  381,
                  "Manhattan"
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  84,
                  "Brooklyn"
                ],
                [
                  4,
                  "Chrysler Building",
                  319,
                  "Manhattan"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "min"
              ],
              "rows": [
                [
                  93
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Find the tallest landmark that is not in Brooklyn.",
          "explanation": "",
          "correctAnswer": "<code>SELECT MAX(height_meters) FROM landmarks WHERE NOT borough = 'Brooklyn';</code>",
          "solution": [
            "select max(height_meters) from landmarks where not borough = 'brooklyn';",
            "select max (height_meters) from landmarks where not borough = 'brooklyn';",
            "select max(height_meters) from landmarks where borough != 'brooklyn';",
            "select max (height_meters) from landmarks where borough != 'brooklyn';",
            "select max(height_meters) from landmarks where borough <> 'brooklyn';",
            "select max (height_meters) from landmarks where borough <> 'brooklyn';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "height_meters",
                "borough"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  93,
                  "Manhattan"
                ],
                [
                  2,
                  "Empire State Building",
                  381,
                  "Manhattan"
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  84,
                  "Brooklyn"
                ],
                [
                  4,
                  "One World Trade Center",
                  541,
                  "Manhattan"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "max"
              ],
              "rows": [
                [
                  541
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Find the oldest year from the landmarks table and rename the resulting column oldest_year.",
          "explanation": "",
          "correctAnswer": "<code>SELECT MIN(year_built) AS oldest_year FROM landmarks;</code>",
          "solution": [
            "select min(year_built) as oldest_year from landmarks;",
            "select min (year_built) as oldest_year from landmarks;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "year_built"
              ],
              "rows": [
                [
                  1,
                  "Statue of Liberty",
                  1886
                ],
                [
                  2,
                  "Empire State Building",
                  1931
                ],
                [
                  3,
                  "Brooklyn Bridge",
                  1883
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "oldest_year"
              ],
              "rows": [
                [
                  1883
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Find the most recent year from the landmarks table and rename the resulting column newest_year.",
          "explanation": "",
          "correctAnswer": "<code>SELECT MAX(year_built) AS newest_year FROM landmarks;</code>",
          "solution": [
            "select max(year_built) as newest_year from landmarks;",
            "select max (year_built) as newest_year from landmarks;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "landmark_id",
                "landmark_name",
                "year_built"
              ],
              "rows": [
                [
                  1,
                  "Chrysler Building",
                  1930
                ],
                [
                  2,
                  "Empire State Building",
                  1931
                ],
                [
                  3,
                  "One World Trade Center",
                  2014
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "newest_year"
              ],
              "rows": [
                [
                  2014
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 16,
      "sourceId": 16,
      "title": "COUNT",
      "category": "Aggregate Functions",
      "sourcePage": "sql-aggregate-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "The COUNT aggregate function counts the number of rows in a table. Try:<br><br><code>SELECT COUNT(*) FROM characters;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM characters;</code>",
          "solution": [
            "select count(*) from characters;",
            "select count (*) from characters;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "character_id",
                "character_name",
                "house"
              ],
              "rows": [
                [
                  1,
                  "Harry Potter",
                  "Gryffindor"
                ],
                [
                  2,
                  "Hermione Granger",
                  "Gryffindor"
                ],
                [
                  3,
                  "Ron Weasley",
                  "Gryffindor"
                ],
                [
                  4,
                  "Draco Malfoy",
                  "Slytherin"
                ],
                [
                  5,
                  "Luna Lovegood",
                  "Ravenclaw"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  5
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Use the COUNT function to get the number of records in the characters table where house is Gryffindor.",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM characters WHERE house = 'Gryffindor';</code>",
          "solution": [
            "select count(*) from characters where house = 'gryffindor';",
            "select count (*) from characters where house = 'gryffindor';",
            "select count(*) from characters where house='gryffindor';",
            "select count (*) from characters where house='gryffindor';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "character_id",
                "character_name",
                "house"
              ],
              "rows": [
                [
                  1,
                  "Harry Potter",
                  "Gryffindor"
                ],
                [
                  2,
                  "Hermione Granger",
                  "Gryffindor"
                ],
                [
                  3,
                  "Ron Weasley",
                  "Gryffindor"
                ],
                [
                  4,
                  "Draco Malfoy",
                  "Slytherin"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  3
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Use the COUNT function to get the number of records in the spells table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM spells;</code>",
          "solution": [
            "select count(*) from spells;",
            "select count (*) from spells;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "spell_id",
                "spell_name",
                "spell_type"
              ],
              "rows": [
                [
                  1,
                  "Expelliarmus",
                  "Charm"
                ],
                [
                  2,
                  "Lumos",
                  "Charm"
                ],
                [
                  3,
                  "Avada Kedavra",
                  "Curse"
                ],
                [
                  4,
                  "Stupefy",
                  "Charm"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  4
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Use the COUNT function to get the number of records in the spells table that are classified as a Charm.",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM spells WHERE spell_type = 'Charm';</code>",
          "solution": [
            "select count(*) from spells where spell_type = 'charm';",
            "select count (*) from spells where spell_type = 'charm';",
            "select count(*) from spells where spell_type='charm';",
            "select count (*) from spells where spell_type='charm';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "spell_id",
                "spell_name",
                "spell_type"
              ],
              "rows": [
                [
                  1,
                  "Expelliarmus",
                  "Charm"
                ],
                [
                  2,
                  "Lumos",
                  "Charm"
                ],
                [
                  3,
                  "Avada Kedavra",
                  "Curse"
                ],
                [
                  4,
                  "Stupefy",
                  "Charm"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  3
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Use the COUNT function to get the number of records in the students table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM students;</code>",
          "solution": [
            "select count(*) from students;",
            "select count (*) from students;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_id",
                "student_name",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Harry Potter",
                  1
                ],
                [
                  2,
                  "Hermione Granger",
                  1
                ],
                [
                  3,
                  "Ron Weasley",
                  1
                ],
                [
                  4,
                  "Ginny Weasley",
                  2
                ],
                [
                  5,
                  "Neville Longbottom",
                  1
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  5
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Use the COUNT function to get the number of students who are in year 1. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM students WHERE year = 1;</code>",
          "solution": [
            "select count(*) from students where year = 1;",
            "select count (*) from students where year = 1;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_id",
                "student_name",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Harry Potter",
                  2
                ],
                [
                  2,
                  "Hermione Granger",
                  2
                ],
                [
                  3,
                  "Ron Weasley",
                  2
                ],
                [
                  4,
                  "Ginny Weasley",
                  1
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  1
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Use the COUNT function to get the number of records in the creatures table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM creatures;</code>",
          "solution": [
            "select count(*) from creatures;",
            "select count (*) from creatures;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "creature_name",
                "danger_level"
              ],
              "rows": [
                [
                  1,
                  "Hippogriff",
                  "High"
                ],
                [
                  2,
                  "House Elf",
                  "Low"
                ],
                [
                  3,
                  "Basilisk",
                  "Extreme"
                ],
                [
                  4,
                  "Phoenix",
                  "Medium"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  4
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Use the COUNT function to get the number of creatures with a High danger level. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM creatures WHERE danger_level = 'High';</code>",
          "solution": [
            "select count(*) from creatures where danger_level = 'high';",
            "select count(*) from creatures where danger_level='high';",
            "select count (*) from creatures where danger_level = 'high';",
            "select count (*) from creatures where danger_level='high';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "creature_name",
                "danger_level"
              ],
              "rows": [
                [
                  1,
                  "Hippogriff",
                  "High"
                ],
                [
                  2,
                  "House Elf",
                  "Low"
                ],
                [
                  3,
                  "Basilisk",
                  "Extreme"
                ],
                [
                  4,
                  "Acromantula",
                  "High"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  2
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Use the COUNT function to get the number of characters have a known house using COUNT(column).",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(house) FROM characters;</code>",
          "solution": [
            "select count(house) from characters;",
            "select count (house) from characters;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "character_id",
                "character_name",
                "house"
              ],
              "rows": [
                [
                  1,
                  "Harry Potter",
                  "Gryffindor"
                ],
                [
                  2,
                  "Tom Riddle",
                  "null"
                ],
                [
                  3,
                  "Luna Lovegood",
                  "Ravenclaw"
                ],
                [
                  4,
                  "Cedric Diggory",
                  "Hufflepuff"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  3
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Use the COUNT function to get the number of creatures where danger level is not High. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(*) FROM creatures WHERE NOT danger_level = 'High';</code>",
          "solution": [
            "select count(*) from creatures where not danger_level = 'high';",
            "select count (*) from creatures where not danger_level = 'high';",
            "select count(*) from creatures where not danger_level='high';",
            "select count (*) from creatures where not danger_level='high';",
            "select count(*) from creatures where danger_level != 'high';",
            "select count(*) from creatures where danger_level <> 'high';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "creature_id",
                "creature_name",
                "danger_level"
              ],
              "rows": [
                [
                  1,
                  "Hippogriff",
                  "High"
                ],
                [
                  2,
                  "House Elf",
                  "Low"
                ],
                [
                  3,
                  "Basilisk",
                  "Extreme"
                ],
                [
                  4,
                  "Phoenix",
                  "Medium"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  3
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 17,
      "sourceId": 17,
      "title": "Null Values",
      "category": "The Basics",
      "sourcePage": "sql-basics-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "i",
          "title": "Null means there is <b>no value</b>. It means there is no data at all for a given value within a record.<br><br>\nNull and 0 are different. 0 is a real number, and null means there is no number at all.<br><br>\nNull and an empty text string ('') are <i>also</i> different. An empty string is a valid string of text with 0 characters. Null is nothing. ",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "If you use COUNT on a specific column, null values are <b>not</b> counted. Look at the characters table below. See what the following query returns:<br><br><code>SELECT COUNT(house) FROM characters;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT COUNT(house) FROM characters;</code>",
          "solution": [
            "select count(house) from characters;",
            "select count (house) from characters;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "character_id",
                "character_name",
                "house"
              ],
              "rows": [
                [
                  1,
                  "Harry Potter",
                  "Gryffindor"
                ],
                [
                  2,
                  "Tom Riddle",
                  "null"
                ],
                [
                  3,
                  "Luna Lovegood",
                  "Ravenclaw"
                ],
                [
                  4,
                  "Cedric Diggory",
                  "Hufflepuff"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "count"
              ],
              "rows": [
                [
                  3
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "i",
          "title": "Any comparison with null will be unknown, so rows may not match if you're comparing to null. <br><br>\n<code>WHERE age > 10</code> will <b>not</b> include any rows where age is null. Instead, use IS NULL and IS NOT NULL.",
          "explanation": "",
          "correctAnswer": "",
          "solution": [],
          "setupTables": [],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "",
                "",
                ""
              ],
              "rows": [
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  ""
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "To get a list of students who have not declared a major yet, try:<br><br>\n<code>SELECT student_name FROM students WHERE major IS NULL;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT student_name FROM students WHERE major IS NULL;</code>",
          "solution": [
            "select student_name from students where major is null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_id",
                "student_name",
                "major"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Biology"
                ],
                [
                  2,
                  "Bob",
                  "null"
                ],
                [
                  3,
                  "Carlos",
                  "History"
                ],
                [
                  4,
                  "Diana",
                  "null"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_name"
              ],
              "rows": [
                [
                  "Bob"
                ],
                [
                  "Diana"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "To find all students who have declared a major, try:<br><br>\n<code>SELECT student_name FROM students WHERE major IS NOT NULL;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT student_name FROM students WHERE major IS NOT NULL;</code>",
          "solution": [
            "select student_name from students where major is not null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_id",
                "student_name",
                "major"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Biology"
                ],
                [
                  2,
                  "Bob",
                  "null"
                ],
                [
                  3,
                  "Carlos",
                  "History"
                ],
                [
                  4,
                  "Diana",
                  "null"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_name"
              ],
              "rows": [
                [
                  "Alice"
                ],
                [
                  "Carlos"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Select course_name from the courses table for courses that do not yet have an assigned instructor. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT course_name FROM courses WHERE instructor IS NULL;</code>",
          "solution": [
            "select course_name from courses where instructor is null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "course_id",
                "course_name",
                "instructor"
              ],
              "rows": [
                [
                  101,
                  "Math 101",
                  "Dr. Smith"
                ],
                [
                  102,
                  "History 201",
                  "null"
                ],
                [
                  103,
                  "Biology 150",
                  "Dr. Lee"
                ],
                [
                  104,
                  "Philosophy 101",
                  "null"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "course_name"
              ],
              "rows": [
                [
                  "History 201"
                ],
                [
                  "Philosophy 101"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Select course_name from the courses table for courses that <b>do</b> have an assigned instructor. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT course_name FROM courses WHERE instructor IS NOT NULL;</code>",
          "solution": [
            "select course_name from courses where instructor is not null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "course_id",
                "course_name",
                "instructor"
              ],
              "rows": [
                [
                  101,
                  "Math 101",
                  "Dr. Smith"
                ],
                [
                  102,
                  "History 201",
                  "null"
                ],
                [
                  103,
                  "Biology 150",
                  "Dr. Lee"
                ],
                [
                  104,
                  "Philosophy 101",
                  "null"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "course_name"
              ],
              "rows": [
                [
                  "Math 101"
                ],
                [
                  "Biology 150"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Select student_name from the students table for students that do not have a graduation year recorded.  ",
          "explanation": "",
          "correctAnswer": "<code>SELECT student_name FROM students WHERE graduation_year IS NULL;</code>",
          "solution": [
            "select student_name from students where graduation_year is null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_id",
                "student_name",
                "graduation_year"
              ],
              "rows": [
                [
                  1,
                  "Emily",
                  2025
                ],
                [
                  2,
                  "Frank",
                  "null"
                ],
                [
                  3,
                  "Grace",
                  2024
                ],
                [
                  4,
                  "Henry",
                  "null"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_name"
              ],
              "rows": [
                [
                  "Frank"
                ],
                [
                  "Henry"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Select student_name from the students table for students that do have a graduation year recorded.  ",
          "explanation": "",
          "correctAnswer": "<code>SELECT student_name FROM students WHERE graduation_year IS NOT NULL;</code>",
          "solution": [
            "select student_name from students where graduation_year is not null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_id",
                "student_name",
                "graduation_year"
              ],
              "rows": [
                [
                  1,
                  "Emily",
                  2025
                ],
                [
                  2,
                  "Frank",
                  "null"
                ],
                [
                  3,
                  "Grace",
                  2024
                ],
                [
                  4,
                  "Henry",
                  "null"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_name"
              ],
              "rows": [
                [
                  "Emily"
                ],
                [
                  "Grace"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Select student_name from the registrations table where the optional notes field has been filled in. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT student_name FROM registrations WHERE notes IS NOT NULL;</code>",
          "solution": [
            "select student_name from registrations where notes is not null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "registration_id",
                "student_name",
                "notes"
              ],
              "rows": [
                [
                  1,
                  "Ivy",
                  "null"
                ],
                [
                  2,
                  "Jack",
                  "Needs evening classes"
                ],
                [
                  3,
                  "Kara",
                  "null"
                ],
                [
                  4,
                  "Leo",
                  "Transfer student"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_name"
              ],
              "rows": [
                [
                  "Jack"
                ],
                [
                  "Leo"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 18,
      "sourceId": 18,
      "title": "Not Equal To",
      "category": "The Basics",
      "sourcePage": "sql-basics-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "Select brand and color from the suits table for all suits that are not black, using the NOT operator.<br><br>\nNotice that suit #4 doesn't show up. Because color is null, the comparison logic won't work. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE NOT color = 'Black';</code>",
          "solution": [
            "select brand, color from suits where not color = 'black';",
            "select brand, color from suits where not color='black';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Armani",
                  "Black",
                  1200
                ],
                [
                  2,
                  "Hugo Boss",
                  "Navy",
                  950
                ],
                [
                  3,
                  "Zara",
                  "Gray",
                  300
                ],
                [
                  4,
                  "Brooks Brothers",
                  "null",
                  1100
                ],
                [
                  5,
                  "SuitSupply",
                  "Black",
                  700
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Hugo Boss",
                  "Navy"
                ],
                [
                  "Zara",
                  "Gray"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Another way to say \"not equal to\" is to use the <code><></code> operator. Try:<br><br><code>SELECT brand, color FROM suits WHERE color <> 'Black';</code>\n<br><br>\n<i>Again</i>, notice that suit #4 doesn't show up because the color is null.",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE color <> 'Black';</code>",
          "solution": [
            "select brand, color from suits where color <> 'black';",
            "select brand, color from suits where color<>'black';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Armani",
                  "Black",
                  1200
                ],
                [
                  2,
                  "Hugo Boss",
                  "Navy",
                  950
                ],
                [
                  3,
                  "Zara",
                  "Gray",
                  300
                ],
                [
                  4,
                  "Brooks Brothers",
                  "null",
                  1100
                ],
                [
                  5,
                  "SuitSupply",
                  "Black",
                  700
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Hugo Boss",
                  "Navy"
                ],
                [
                  "Zara",
                  "Gray"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Yet a third way to say \"not equal to\" is to use the <code>!=</code> operator. Try:<br><br><code>SELECT brand, color FROM suits WHERE color != 'Black';</code>\n<br><br>\nNot to sound like a broken record, but suit #4 still doesn't show up because the color is null. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE color != 'Black';</code>",
          "solution": [
            "select brand, color from suits where color != 'black';",
            "select brand, color from suits where color!='black';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Armani",
                  "Black",
                  1200
                ],
                [
                  2,
                  "Hugo Boss",
                  "Navy",
                  950
                ],
                [
                  3,
                  "Zara",
                  "Gray",
                  300
                ],
                [
                  4,
                  "Brooks Brothers",
                  "null",
                  1100
                ],
                [
                  5,
                  "SuitSupply",
                  "Black",
                  700
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Hugo Boss",
                  "Navy"
                ],
                [
                  "Zara",
                  "Gray"
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "In the prior examples, we query for suits where color is not black, but that doesn't return suits where color is null. That's because these suits are of an unknown color, so we can't be sure they are not black!<br><br>\nSo how do we find suits where color is not black, <i>including</i> suits where color is null? Try:<br><br><code>SELECT brand, color FROM suits WHERE color <> 'Black' OR color IS NULL;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE color <> 'Black' OR color IS NULL;</code>",
          "solution": [
            "select brand, color from suits where color <> 'black' or color is null;",
            "select brand, color from suits where color<>'black' or color is null;",
            "select brand, color from suits where color != 'black' or color is null;",
            "select brand, color from suits where color!='black' or color is null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Armani",
                  "Black",
                  1200
                ],
                [
                  2,
                  "Hugo Boss",
                  "Navy",
                  950
                ],
                [
                  3,
                  "Zara",
                  "Gray",
                  300
                ],
                [
                  4,
                  "Brooks Brothers",
                  "null",
                  1100
                ],
                [
                  5,
                  "SuitSupply",
                  "Black",
                  700
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Hugo Boss",
                  "Navy"
                ],
                [
                  "Zara",
                  "Gray"
                ],
                [
                  "Brooks Brothers",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Select brand, color from the suits table where color is not black and includes null colors, using the <code>!=</code> operator. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE color != 'Black' OR color IS NULL;</code>",
          "solution": [
            "select brand, color from suits where color <> 'black' or color is null;",
            "select brand, color from suits where color<>'black' or color is null;",
            "select brand, color from suits where color != 'black' or color is null;",
            "select brand, color from suits where color!='black' or color is null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Armani",
                  "Black",
                  1200
                ],
                [
                  2,
                  "Hugo Boss",
                  "Navy",
                  950
                ],
                [
                  3,
                  "Zara",
                  "Gray",
                  300
                ],
                [
                  4,
                  "Brooks Brothers",
                  "null",
                  1100
                ],
                [
                  5,
                  "SuitSupply",
                  "Black",
                  700
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Hugo Boss",
                  "Navy"
                ],
                [
                  "Zara",
                  "Gray"
                ],
                [
                  "Brooks Brothers",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Select brand, color from the suits table where color is not black but includes null, using the <code>NOT</code> operator. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE NOT color = 'Black' OR color IS NULL;</code>",
          "solution": [
            "select brand, color from suits where not color = 'black' or color is null;",
            "select brand, color from suits where not color='black' or color is null;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Armani",
                  "Black",
                  1200
                ],
                [
                  2,
                  "Hugo Boss",
                  "Navy",
                  950
                ],
                [
                  3,
                  "Zara",
                  "Gray",
                  300
                ],
                [
                  4,
                  "Brooks Brothers",
                  "null",
                  1100
                ],
                [
                  5,
                  "SuitSupply",
                  "Black",
                  700
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Hugo Boss",
                  "Navy"
                ],
                [
                  "Zara",
                  "Gray"
                ],
                [
                  "Brooks Brothers",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Select brand, color from the suits table where color is not black (EXCLUDE suits with null color), using the <code><></code> operator. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE color <> 'Black';</code>",
          "solution": [
            "select brand, color from suits where color <> 'black';",
            "select brand, color from suits where color<>'black';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Tom Ford",
                  "Black",
                  2200
                ],
                [
                  2,
                  "Theory",
                  "Charcoal",
                  800
                ],
                [
                  3,
                  "Uniqlo",
                  "null",
                  200
                ],
                [
                  4,
                  "Zegna",
                  "Navy",
                  1800
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Theory",
                  "Charcoal"
                ],
                [
                  "Zegna",
                  "Navy"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Select brand, color from the suits table where color is not black (EXCLUDE suits with null color), using the <code>!=</code> operator. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE color != 'Black';</code>",
          "solution": [
            "select brand, color from suits where color != 'black';",
            "select brand, color from suits where color!='black';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Tom Ford",
                  "Black",
                  2200
                ],
                [
                  2,
                  "Theory",
                  "Charcoal",
                  800
                ],
                [
                  3,
                  "Uniqlo",
                  "null",
                  200
                ],
                [
                  4,
                  "Zegna",
                  "Navy",
                  1800
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Theory",
                  "Charcoal"
                ],
                [
                  "Zegna",
                  "Navy"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Select brand, color from the suits table where color is not black (EXCLUDE suits with null color), using the <code>NOT</code> operator. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE NOT color = 'Black';</code>",
          "solution": [
            "select brand, color from suits where not color = 'black';",
            "select brand, color from suits where not color='black';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Tom Ford",
                  "Black",
                  2200
                ],
                [
                  2,
                  "Theory",
                  "Charcoal",
                  800
                ],
                [
                  3,
                  "Uniqlo",
                  "null",
                  200
                ],
                [
                  4,
                  "Zegna",
                  "Navy",
                  1800
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Theory",
                  "Charcoal"
                ],
                [
                  "Zegna",
                  "Navy"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Select brand, color from the suits table where color is not black (EXCLUDE suits with null color), using the <code><></code> operator. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT brand, color FROM suits WHERE color <> 'Black';</code>",
          "solution": [
            "select brand, color from suits where color <> 'black';",
            "select brand, color from suits where color<>'black';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "suit_id",
                "brand",
                "color",
                "price"
              ],
              "rows": [
                [
                  1,
                  "Tom Ford",
                  "Black",
                  2200
                ],
                [
                  2,
                  "Theory",
                  "Charcoal",
                  800
                ],
                [
                  3,
                  "Uniqlo",
                  "null",
                  200
                ],
                [
                  4,
                  "Zegna",
                  "Navy",
                  1800
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "brand",
                "color"
              ],
              "rows": [
                [
                  "Theory",
                  "Charcoal"
                ],
                [
                  "Zegna",
                  "Navy"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 19,
      "sourceId": 19,
      "title": "AVG",
      "category": "Aggregate Functions",
      "sourcePage": "sql-aggregate-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "AVG is an aggregate function that returns the average of a specified column. To get the average ticket price, try:<br><br><code>SELECT AVG(ticket_price) FROM flights;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(ticket_price) FROM flights;</code>",
          "solution": [
            "select avg(ticket_price) from flights;",
            "select avg (ticket_price) from flights;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "Delta",
                  "NYC-LAX",
                  320,
                  360
                ],
                [
                  2,
                  "United",
                  "NYC-ORD",
                  210,
                  150
                ],
                [
                  3,
                  "American",
                  "NYC-MIA",
                  260,
                  180
                ],
                [
                  4,
                  "JetBlue",
                  "NYC-BOS",
                  120,
                  60
                ],
                [
                  5,
                  "Southwest",
                  "NYC-DEN",
                  280,
                  300
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  238
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Find the average flight duration in minutes from the flights table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(duration_minutes) FROM flights;</code>",
          "solution": [
            "select avg(duration_minutes) from flights;",
            "select avg (duration_minutes) from flights;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "Delta",
                  "ATL-LAX",
                  340,
                  330
                ],
                [
                  2,
                  "United",
                  "ORD-SEA",
                  290,
                  260
                ],
                [
                  3,
                  "American",
                  "DFW-JFK",
                  310,
                  210
                ],
                [
                  4,
                  "JetBlue",
                  "BOS-MCO",
                  200,
                  180
                ],
                [
                  5,
                  "Alaska",
                  "SEA-SFO",
                  180,
                  120
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  220
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Calculate the average ticket price for Delta flights in the flights table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(ticket_price) FROM flights WHERE airline = 'Delta';</code>",
          "solution": [
            "select avg(ticket_price) from flights where airline = 'delta';",
            "select avg (ticket_price) from flights where airline = 'delta';",
            "select avg(ticket_price) from flights where airline='delta';",
            "select avg (ticket_price) from flights where airline='delta';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "Delta",
                  "NYC-LAX",
                  320,
                  360
                ],
                [
                  2,
                  "Delta",
                  "ATL-MIA",
                  180,
                  120
                ],
                [
                  3,
                  "United",
                  "NYC-LAX",
                  300,
                  355
                ],
                [
                  4,
                  "Delta",
                  "SEA-DEN",
                  260,
                  150
                ],
                [
                  5,
                  "American",
                  "DFW-LAX",
                  280,
                  190
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  253.33
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Find the average ticket price for flights longer than 200 minutes.",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(ticket_price) FROM flights WHERE duration_minutes > 200;</code>",
          "solution": [
            "select avg(ticket_price) from flights where duration_minutes > 200;",
            "select avg(ticket_price) from flights where duration_minutes>200;",
            "select avg (ticket_price) from flights where duration_minutes > 200;",
            "select avg (ticket_price) from flights where duration_minutes>200;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "United",
                  "ORD-LAX",
                  310,
                  280
                ],
                [
                  2,
                  "JetBlue",
                  "JFK-BOS",
                  120,
                  60
                ],
                [
                  3,
                  "Delta",
                  "ATL-SFO",
                  350,
                  310
                ],
                [
                  4,
                  "American",
                  "DFW-SEA",
                  330,
                  260
                ],
                [
                  5,
                  "Southwest",
                  "DEN-PHX",
                  200,
                  140
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  330
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "<b>Remember, </b> aggregate functions ignore null values.<br><br>Calculate the average ticket price, noting that missing (null) prices are ignored. They are NOT counted as 0.",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(ticket_price) FROM flights;</code>",
          "solution": [
            "select avg(ticket_price) from flights;",
            "select avg (ticket_price) from flights;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "Delta",
                  "NYC-LAX",
                  320,
                  360
                ],
                [
                  2,
                  "United",
                  "NYC-ORD",
                  "null",
                  150
                ],
                [
                  3,
                  "American",
                  "NYC-MIA",
                  260,
                  180
                ],
                [
                  4,
                  "JetBlue",
                  "NYC-BOS",
                  120,
                  60
                ],
                [
                  5,
                  "Southwest",
                  "NYC-DEN",
                  280,
                  300
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  245
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Find the average duration of flights (where the duration is known).",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(duration_minutes) FROM flights;</code>",
          "solution": [
            "select avg(duration_minutes) from flights;",
            "select avg (duration_minutes) from flights;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "Alaska",
                  "SEA-JFK",
                  340,
                  320
                ],
                [
                  2,
                  "United",
                  "ORD-LAX",
                  300,
                  "null"
                ],
                [
                  3,
                  "Delta",
                  "ATL-DEN",
                  260,
                  180
                ],
                [
                  4,
                  "American",
                  "DFW-LAS",
                  220,
                  160
                ],
                [
                  5,
                  "JetBlue",
                  "BOS-MCO",
                  210,
                  "null"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  220
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Calculate the average ticket price in the flights table for American Airlines flights only.",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(ticket_price) FROM flights WHERE airline = 'American';</code>",
          "solution": [
            "select avg(ticket_price) from flights where airline = 'american';",
            "select avg(ticket_price) from flights where airline='american';",
            "select avg (ticket_price) from flights where airline = 'american';",
            "select avg (ticket_price) from flights where airline='american';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "American",
                  "LAX-JFK",
                  340,
                  360
                ],
                [
                  2,
                  "American",
                  "DFW-MIA",
                  280,
                  160
                ],
                [
                  3,
                  "Delta",
                  "ATL-LAX",
                  320,
                  330
                ],
                [
                  4,
                  "American",
                  "ORD-SFO",
                  360,
                  300
                ],
                [
                  5,
                  "United",
                  "DEN-SEA",
                  290,
                  180
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  326.67
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Find the average ticket price for flights under 200 minutes in the flights table.",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(ticket_price) FROM flights WHERE duration_minutes < 200;</code>",
          "solution": [
            "select avg(ticket_price) from flights where duration_minutes < 200;",
            "select avg(ticket_price) from flights where duration_minutes<200;",
            "select avg (ticket_price) from flights where duration_minutes < 200;",
            "select avg (ticket_price) from flights where duration_minutes<200;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "JetBlue",
                  "JFK-BOS",
                  120,
                  60
                ],
                [
                  2,
                  "Southwest",
                  "DAL-HOU",
                  90,
                  50
                ],
                [
                  3,
                  "Delta",
                  "ATL-MIA",
                  180,
                  120
                ],
                [
                  4,
                  "United",
                  "ORD-MSP",
                  200,
                  90
                ],
                [
                  5,
                  "American",
                  "DFW-OKC",
                  160,
                  70
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  150
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Calculate the average ticket price (for flights with a known price).",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(ticket_price) FROM flights;</code>",
          "solution": [
            "select avg(ticket_price) from flights;",
            "select avg (ticket_price) from flights;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "Delta",
                  "NYC-LAX",
                  320,
                  360
                ],
                [
                  2,
                  "United",
                  "NYC-ORD",
                  "null",
                  150
                ],
                [
                  3,
                  "American",
                  "NYC-MIA",
                  260,
                  180
                ],
                [
                  4,
                  "JetBlue",
                  "NYC-BOS",
                  120,
                  60
                ],
                [
                  5,
                  "Southwest",
                  "NYC-DEN",
                  "null",
                  300
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  233.33
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Find the average ticket price for flights priced above $200.",
          "explanation": "",
          "correctAnswer": "<code>SELECT AVG(ticket_price) FROM flights WHERE ticket_price > 200;</code>",
          "solution": [
            "select avg(ticket_price) from flights where ticket_price > 200;",
            "select avg(ticket_price) from flights where ticket_price>200;",
            "select avg (ticket_price) from flights where ticket_price > 200;",
            "select avg (ticket_price) from flights where ticket_price>200;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "airline",
                "route",
                "ticket_price",
                "duration_minutes"
              ],
              "rows": [
                [
                  1,
                  "Delta",
                  "ATL-LAX",
                  320,
                  330
                ],
                [
                  2,
                  "United",
                  "ORD-LAX",
                  290,
                  280
                ],
                [
                  3,
                  "JetBlue",
                  "BOS-MCO",
                  180,
                  180
                ],
                [
                  4,
                  "American",
                  "DFW-SEA",
                  340,
                  260
                ],
                [
                  5,
                  "Alaska",
                  "SEA-SFO",
                  210,
                  120
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "avg"
              ],
              "rows": [
                [
                  290
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 20,
      "sourceId": 20,
      "title": "SUM",
      "category": "Aggregate Functions",
      "sourcePage": "sql-aggregate-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "SUM is an aggregate function which calculates the sum of a column. To find the sum of all order totals in the table, try:<br><br><code>SELECT SUM(order_total) FROM orders;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(order_total) FROM orders;</code>",
          "solution": [
            "select sum(order_total) from orders;",
            "select sum (order_total) from orders;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  40
                ],
                [
                  3,
                  "Carlos",
                  "Monitor",
                  1,
                  300
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  5,
                  "Evan",
                  "Headphones",
                  1,
                  150
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  1790
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Find the total quantity of items sold across all orders. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(quantity) FROM orders;</code>",
          "solution": [
            "select sum(quantity) from orders;",
            "select sum (quantity) from orders;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  40
                ],
                [
                  3,
                  "Carlos",
                  "Monitor",
                  1,
                  300
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  5,
                  "Evan",
                  "Headphones",
                  3,
                  450
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  8
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Find the total revenue for orders over $200.",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(order_total) FROM orders WHERE order_total > 200;</code>",
          "solution": [
            "select sum(order_total) from orders where order_total > 200;",
            "select sum(order_total) from orders where order_total>200;",
            "select sum (order_total) from orders where order_total > 200;",
            "select sum (order_total) from orders where order_total>200;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  40
                ],
                [
                  3,
                  "Carlos",
                  "Monitor",
                  1,
                  300
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  5,
                  "Evan",
                  "Headphones",
                  1,
                  150
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  1500
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Find the total revenue generated from laptop sales.",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(order_total) FROM orders WHERE item = 'Laptop';</code>",
          "solution": [
            "select sum(order_total) from orders where item = 'laptop';",
            "select sum(order_total) from orders where item='laptop';",
            "select sum (order_total) from orders where item = 'laptop';",
            "select sum (order_total) from orders where item='laptop';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  40
                ],
                [
                  3,
                  "Carlos",
                  "Laptop",
                  1,
                  1150
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  5,
                  "Evan",
                  "Laptop",
                  2,
                  2300
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  4650
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Calculate the total quantity ordered for keyboards.",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(quantity) FROM orders WHERE item = 'Keyboard';</code>",
          "solution": [
            "select sum(quantity) from orders where item = 'keyboard';",
            "select sum(quantity) from orders where item = 'keyboard';",
            "select sum (quantity) from orders where item='keyboard';",
            "select sum (quantity) from orders where item='keyboard';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  2,
                  "Bob",
                  "Keyboard",
                  2,
                  200
                ],
                [
                  3,
                  "Carlos",
                  "Mouse",
                  1,
                  20
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  5,
                  "Evan",
                  "Monitor",
                  1,
                  300
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  4
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Calculate total revenue, noting that missing order totals are ignored.",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(order_total) FROM orders;</code>",
          "solution": [
            "select sum(order_total) from orders;",
            "select sum (order_total) from orders;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  "null"
                ],
                [
                  3,
                  "Carlos",
                  "Monitor",
                  1,
                  300
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  5,
                  "Evan",
                  "Headphones",
                  1,
                  "null"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  1600
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Find the total revenue for orders placed by Alice.",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(order_total) FROM orders WHERE customer = 'Alice';</code>",
          "solution": [
            "select sum(order_total) from orders where customer = 'alice';",
            "select sum(order_total) from orders where customer='alice';",
            "select sum (order_total) from orders where customer = 'alice';",
            "select sum (order_total) from orders where customer='alice';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  40
                ],
                [
                  3,
                  "Alice",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  4,
                  "Diana",
                  "Monitor",
                  1,
                  300
                ],
                [
                  5,
                  "Alice",
                  "Mouse",
                  2,
                  40
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  1340
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Calculate the total revenue from orders with more than one item.",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(order_total) FROM orders WHERE quantity > 1;</code>",
          "solution": [
            "select sum(order_total) from orders where quantity > 1;",
            "select sum(order_total) from orders where quantity>1;",
            "select sum (order_total) from orders where quantity > 1;",
            "select sum (order_total) from orders where quantity>1;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  40
                ],
                [
                  3,
                  "Carlos",
                  "Monitor",
                  1,
                  300
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  3,
                  300
                ],
                [
                  5,
                  "Evan",
                  "Headphones",
                  1,
                  150
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  340
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Find the total quantity sold for items costing more than $100 per order.",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(quantity) FROM orders WHERE order_total > 100;</code>",
          "solution": [
            "select sum(quantity) from orders where order_total > 100;",
            "select sum(quantity) from orders where order_total>100;",
            "select sum (quantity) from orders where order_total > 100;",
            "select sum (quantity) from orders where order_total>100;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  40
                ],
                [
                  3,
                  "Carlos",
                  "Monitor",
                  1,
                  300
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  5,
                  "Evan",
                  "Headphones",
                  2,
                  300
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  4
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Calculate total revenue for all orders except those with missing totals.",
          "explanation": "",
          "correctAnswer": "<code>SELECT SUM(order_total) FROM orders;</code>",
          "solution": [
            "select sum(order_total) from orders;",
            "select sum (order_total) from orders;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "customer",
                "item",
                "quantity",
                "order_total"
              ],
              "rows": [
                [
                  1,
                  "Alice",
                  "Laptop",
                  1,
                  1200
                ],
                [
                  2,
                  "Bob",
                  "Mouse",
                  2,
                  "null"
                ],
                [
                  3,
                  "Carlos",
                  "Monitor",
                  1,
                  300
                ],
                [
                  4,
                  "Diana",
                  "Keyboard",
                  1,
                  100
                ],
                [
                  5,
                  "Evan",
                  "Headphones",
                  1,
                  150
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "sum"
              ],
              "rows": [
                [
                  1750
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 21,
      "sourceId": 21,
      "title": "Left Join",
      "category": "Joins",
      "sourcePage": "sql-join-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "A <b>Left Join</b> keeps all rows from the first table (or \"left\" table) and shows results from the second table (or \"right\" table) only where there's a match. If there's no match, it shows null for the values in the joined row. Try typing:<br><br><code>SELECT * <br>FROM cars <br>LEFT JOIN owners <br>ON cars.car_id = owners.car_id;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM cars LEFT JOIN owners ON cars.car_id = owners.car_id;</code>",
          "solution": [
            "select * from cars left join owners on cars.car_id = owners.car_id;",
            "select * from cars left join owners on cars.car_id=owners.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "make",
                "model",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Toyota",
                  "Camry",
                  2020
                ],
                [
                  2,
                  "Honda",
                  "Civic",
                  2019
                ],
                [
                  3,
                  "Ford",
                  "Mustang",
                  2021
                ],
                [
                  4,
                  "Tesla",
                  "Model 3",
                  2022
                ],
                [
                  5,
                  "Chevrolet",
                  "Impala",
                  2018
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "owner_id",
                "car_id",
                "owner_name"
              ],
              "rows": [
                [
                  1,
                  1,
                  "Alice"
                ],
                [
                  2,
                  2,
                  "Bob"
                ],
                [
                  3,
                  4,
                  "Carlos"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "make",
                "model",
                "year",
                "owner_id",
                "car_id",
                "owner_name"
              ],
              "rows": [
                [
                  1,
                  "Toyota",
                  "Camry",
                  2020,
                  1,
                  1,
                  "Alice"
                ],
                [
                  2,
                  "Honda",
                  "Civic",
                  2019,
                  2,
                  2,
                  "Bob"
                ],
                [
                  3,
                  "Ford",
                  "Mustang",
                  2021,
                  "null",
                  "null",
                  "null"
                ],
                [
                  4,
                  "Tesla",
                  "Model 3",
                  2022,
                  3,
                  4,
                  "Carlos"
                ],
                [
                  5,
                  "Chevrolet",
                  "Impala",
                  2018,
                  "null",
                  "null",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Use SELECT * and left join the cars table with the manufacturing_plants table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM cars LEFT JOIN manufacturing_plants ON cars.car_id = manufacturing_plants.car_id;</code>",
          "solution": [
            "select * from cars left join manufacturing_plants on cars.car_id = manufacturing_plants.car_id;",
            "select * from cars left join manufacturing_plants on cars.car_id=manufacturing_plants.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name",
                "category",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Falcon",
                  "Sedan",
                  2020
                ],
                [
                  2,
                  "Ranger",
                  "SUV",
                  2021
                ],
                [
                  3,
                  "Volt",
                  "Electric",
                  2022
                ],
                [
                  4,
                  "Titan",
                  "Truck",
                  2019
                ],
                [
                  5,
                  "Comet",
                  "Coupe",
                  2023
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "plant_id",
                "plant_name",
                "location",
                "car_id"
              ],
              "rows": [
                [
                  101,
                  "Detroit Assembly",
                  "USA",
                  1
                ],
                [
                  102,
                  "Berlin Factory",
                  "Germany",
                  3
                ],
                [
                  103,
                  "Tokyo Plant",
                  "Japan",
                  4
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name",
                "category",
                "release_year",
                "plant_id",
                "plant_name",
                "location",
                "car_id"
              ],
              "rows": [
                [
                  1,
                  "Falcon",
                  "Sedan",
                  2020,
                  101,
                  "Detroit Assembly",
                  "USA",
                  1
                ],
                [
                  2,
                  "Ranger",
                  "SUV",
                  2021,
                  "null",
                  "null",
                  "null",
                  "null"
                ],
                [
                  3,
                  "Volt",
                  "Electric",
                  2022,
                  102,
                  "Berlin Factory",
                  "Germany",
                  3
                ],
                [
                  4,
                  "Titan",
                  "Truck",
                  2019,
                  103,
                  "Tokyo Plant",
                  "Japan",
                  4
                ],
                [
                  5,
                  "Comet",
                  "Coupe",
                  2023,
                  "null",
                  "null",
                  "null",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Use SELECT * and left join the cars table with the suppliers table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM cars LEFT JOIN suppliers ON cars.car_id = suppliers.car_id;</code>",
          "solution": [
            "select * from cars left join suppliers on cars.car_id = suppliers.car_id;",
            "select * from cars left join suppliers on cars.car_id=suppliers.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name",
                "segment",
                "launch_year"
              ],
              "rows": [
                [
                  1,
                  "Falcon",
                  "Sedan",
                  2020
                ],
                [
                  2,
                  "Ranger",
                  "SUV",
                  2021
                ],
                [
                  3,
                  "Volt",
                  "Electric",
                  2022
                ],
                [
                  4,
                  "Titan",
                  "Truck",
                  2019
                ],
                [
                  5,
                  "Comet",
                  "Coupe",
                  2023
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "supplier_id",
                "supplier_name",
                "component",
                "car_id"
              ],
              "rows": [
                [
                  201,
                  "AutoParts Co",
                  "Engine",
                  1
                ],
                [
                  202,
                  "GreenTech Motors",
                  "Battery",
                  3
                ],
                [
                  203,
                  "SteelWorks Ltd",
                  "Chassis",
                  4
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name",
                "segment",
                "launch_year",
                "supplier_id",
                "supplier_name",
                "component",
                "car_id"
              ],
              "rows": [
                [
                  1,
                  "Falcon",
                  "Sedan",
                  2020,
                  201,
                  "AutoParts Co",
                  "Engine",
                  1
                ],
                [
                  2,
                  "Ranger",
                  "SUV",
                  2021,
                  "null",
                  "null",
                  "null",
                  "null"
                ],
                [
                  3,
                  "Volt",
                  "Electric",
                  2022,
                  202,
                  "GreenTech Motors",
                  "Battery",
                  3
                ],
                [
                  4,
                  "Titan",
                  "Truck",
                  2019,
                  203,
                  "SteelWorks Ltd",
                  "Chassis",
                  4
                ],
                [
                  5,
                  "Comet",
                  "Coupe",
                  2023,
                  "null",
                  "null",
                  "null",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Use SELECT * and left join the cars table with the warranties table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT * FROM cars LEFT JOIN warranties ON cars.car_id = warranties.car_id;</code>",
          "solution": [
            "select * from cars left join warranties on cars.car_id = warranties.car_id;",
            "select * from cars left join warranties on cars.car_id=warranties.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name",
                "category",
                "year"
              ],
              "rows": [
                [
                  1,
                  "Falcon",
                  "Sedan",
                  2020
                ],
                [
                  2,
                  "Ranger",
                  "SUV",
                  2021
                ],
                [
                  3,
                  "Volt",
                  "Electric",
                  2022
                ],
                [
                  4,
                  "Titan",
                  "Truck",
                  2019
                ],
                [
                  5,
                  "Comet",
                  "Coupe",
                  2023
                ],
                [
                  6,
                  "Nova",
                  "Sedan",
                  2021
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "warranty_id",
                "car_id",
                "coverage_years",
                "provider"
              ],
              "rows": [
                [
                  301,
                  1,
                  5,
                  "AutoSecure"
                ],
                [
                  302,
                  2,
                  8,
                  "GreenShield"
                ],
                [
                  303,
                  3,
                  10,
                  "GreenShield Plus"
                ],
                [
                  304,
                  5,
                  3,
                  "QuickCover"
                ],
                [
                  305,
                  99,
                  4,
                  "LegacyCare"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name",
                "category",
                "year",
                "warranty_id",
                "car_id",
                "coverage_years",
                "provider"
              ],
              "rows": [
                [
                  1,
                  "Falcon",
                  "Sedan",
                  2020,
                  301,
                  1,
                  5,
                  "AutoSecure"
                ],
                [
                  2,
                  "Ranger",
                  "SUV",
                  2021,
                  302,
                  2,
                  8,
                  "GreenShield"
                ],
                [
                  3,
                  "Volt",
                  "Electric",
                  2022,
                  303,
                  3,
                  10,
                  "GreenShield Plus"
                ],
                [
                  4,
                  "Titan",
                  "Truck",
                  2019,
                  "null",
                  "null",
                  "null",
                  "null"
                ],
                [
                  5,
                  "Comet",
                  "Coupe",
                  2023,
                  304,
                  5,
                  3,
                  "QuickCover"
                ],
                [
                  6,
                  "Nova",
                  "Sedan",
                  2021,
                  "null",
                  "null",
                  "null",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Select model_name and plant_name and left join the cars table with the plants table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT cars.model_name, plants.plant_name FROM cars LEFT JOIN plants ON cars.car_id = plants.car_id;</code>",
          "solution": [
            "select cars.model_name, plants.plant_name from cars left join plants on cars.car_id = plants.car_id;",
            "select cars.model_name, plants.plant_name from cars left join plants on cars.car_id=plants.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name",
                "category"
              ],
              "rows": [
                [
                  1,
                  "Falcon",
                  "Sedan"
                ],
                [
                  2,
                  "Ranger",
                  "SUV"
                ],
                [
                  3,
                  "Volt",
                  "Electric"
                ],
                [
                  4,
                  "Titan",
                  "Truck"
                ],
                [
                  5,
                  "Comet",
                  "Coupe"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "plant_id",
                "plant_name",
                "car_id"
              ],
              "rows": [
                [
                  10,
                  "Detroit Assembly",
                  1
                ],
                [
                  11,
                  "Berlin Factory",
                  3
                ],
                [
                  12,
                  "Tokyo Plant",
                  4
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "model_name",
                "plant_name"
              ],
              "rows": [
                [
                  "Falcon",
                  "Detroit Assembly"
                ],
                [
                  "Ranger",
                  "null"
                ],
                [
                  "Volt",
                  "Berlin Factory"
                ],
                [
                  "Titan",
                  "Tokyo Plant"
                ],
                [
                  "Comet",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Select model_name and supplier_name and left join the cars table with the suppliers table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT cars.model_name, suppliers.supplier_name FROM cars LEFT JOIN suppliers ON cars.car_id = suppliers.car_id;</code>",
          "solution": [
            "select cars.model_name, suppliers.supplier_name from cars left join suppliers on cars.car_id = suppliers.car_id;",
            "select cars.model_name, suppliers.supplier_name from cars left join suppliers on cars.car_id=suppliers.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name"
              ],
              "rows": [
                [
                  1,
                  "Falcon"
                ],
                [
                  2,
                  "Ranger"
                ],
                [
                  3,
                  "Volt"
                ],
                [
                  4,
                  "Titan"
                ],
                [
                  5,
                  "Comet"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "supplier_id",
                "supplier_name",
                "car_id"
              ],
              "rows": [
                [
                  201,
                  "AutoParts Co",
                  1
                ],
                [
                  202,
                  "GreenTech Motors",
                  3
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "model_name",
                "supplier_name"
              ],
              "rows": [
                [
                  "Falcon",
                  "AutoParts Co"
                ],
                [
                  "Ranger",
                  "null"
                ],
                [
                  "Volt",
                  "GreenTech Motors"
                ],
                [
                  "Titan",
                  "null"
                ],
                [
                  "Comet",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Select model_name and coverage_years and left join the cars table with the warranties table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT cars.model_name, warranties.coverage_years FROM cars LEFT JOIN warranties ON cars.car_id = warranties.car_id;</code>",
          "solution": [
            "select cars.model_name, warranties.coverage_years from cars left join warranties on cars.car_id = warranties.car_id;",
            "select cars.model_name, warranties.coverage_years from cars left join warranties on cars.car_id=warranties.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name"
              ],
              "rows": [
                [
                  1,
                  "Falcon"
                ],
                [
                  2,
                  "Ranger"
                ],
                [
                  3,
                  "Volt"
                ],
                [
                  4,
                  "Titan"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "warranty_id",
                "car_id",
                "coverage_years"
              ],
              "rows": [
                [
                  301,
                  1,
                  5
                ],
                [
                  302,
                  3,
                  8
                ],
                [
                  303,
                  3,
                  10
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "model_name",
                "coverage_years"
              ],
              "rows": [
                [
                  "Falcon",
                  5
                ],
                [
                  "Ranger",
                  "null"
                ],
                [
                  "Volt",
                  8
                ],
                [
                  "Volt",
                  10
                ],
                [
                  "Titan",
                  "null"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Select model_name and dealership's city and left join the cars table with the dealership_inventory table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT cars.model_name, dealership_inventory.city FROM cars LEFT JOIN dealership_inventory ON cars.car_id = dealership_inventory.car_id;</code>",
          "solution": [
            "select cars.model_name, dealership_inventory.city from cars left join dealership_inventory on cars.car_id = dealership_inventory.car_id;",
            "select cars.model_name, dealership_inventory.city from cars left join dealership_inventory on cars.car_id=dealership_inventory.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name"
              ],
              "rows": [
                [
                  1,
                  "Falcon"
                ],
                [
                  2,
                  "Ranger"
                ],
                [
                  3,
                  "Volt"
                ],
                [
                  4,
                  "Titan"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "inventory_id",
                "car_id",
                "city"
              ],
              "rows": [
                [
                  401,
                  1,
                  "Chicago"
                ],
                [
                  402,
                  2,
                  "Dallas"
                ],
                [
                  403,
                  4,
                  "Seattle"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "model_name",
                "city"
              ],
              "rows": [
                [
                  "Falcon",
                  "Chicago"
                ],
                [
                  "Ranger",
                  "Dallas"
                ],
                [
                  "Volt",
                  "null"
                ],
                [
                  "Titan",
                  "Seattle"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Select model_name, category, and component and left join the cars table with the suppliers table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT cars.model_name, cars.category, suppliers.component FROM cars LEFT JOIN suppliers ON cars.car_id = suppliers.car_id;</code>",
          "solution": [
            "select cars.model_name, cars.category, suppliers.component from cars left join suppliers on cars.car_id = suppliers.car_id;",
            "select cars.model_name, cars.category, suppliers.component from cars left join suppliers on cars.car_id=suppliers.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name",
                "category"
              ],
              "rows": [
                [
                  1,
                  "Falcon",
                  "Sedan"
                ],
                [
                  2,
                  "Ranger",
                  "SUV"
                ],
                [
                  3,
                  "Volt",
                  "Electric"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "supplier_id",
                "car_id",
                "component"
              ],
              "rows": [
                [
                  201,
                  1,
                  "Engine"
                ],
                [
                  202,
                  3,
                  "Battery"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "model_name",
                "category",
                "component"
              ],
              "rows": [
                [
                  "Falcon",
                  "Sedan",
                  "Engine"
                ],
                [
                  "Ranger",
                  "SUV",
                  "null"
                ],
                [
                  "Volt",
                  "Electric",
                  "Battery"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Select model_name and warranty provider and left join the cars table with the warranties table. ",
          "explanation": "",
          "correctAnswer": "<code>SELECT cars.model_name, warranties.provider FROM cars LEFT JOIN warranties ON cars.car_id = warranties.car_id;</code>",
          "solution": [
            "select cars.model_name, warranties.provider from cars left join warranties on cars.car_id = warranties.car_id;",
            "select cars.model_name, warranties.provider from cars left join warranties on cars.car_id=warranties.car_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "car_id",
                "model_name"
              ],
              "rows": [
                [
                  1,
                  "Falcon"
                ],
                [
                  2,
                  "Ranger"
                ],
                [
                  3,
                  "Volt"
                ],
                [
                  4,
                  "Titan"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "warranty_id",
                "car_id",
                "provider"
              ],
              "rows": [
                [
                  301,
                  1,
                  "AutoSecure"
                ],
                [
                  302,
                  3,
                  "GreenShield"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "model_name",
                "provider"
              ],
              "rows": [
                [
                  "Falcon",
                  "AutoSecure"
                ],
                [
                  "Ranger",
                  "null"
                ],
                [
                  "Volt",
                  "GreenShield"
                ],
                [
                  "Titan",
                  "null"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 22,
      "sourceId": 22,
      "title": "UNION",
      "category": "Basic Queries",
      "sourcePage": "sql-query-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "The <code>UNION</code> operator <b>combines</b> the results of multiple queries and <b>removes duplicates</b>. Try:<br/><br/>\n<code>SELECT title FROM action_movies UNION SELECT title FROM scifi_movies;</code>\n<br/><br/>Notice which rows belong to both tables, and whether they appear as duplicates in the result (hint: they don't).",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM action_movies UNION SELECT title FROM scifi_movies;</code>",
          "solution": [
            "select title from action_movies union select title from scifi_movies;",
            "select title from scifi_movies union select title from action_movies;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "box_office_millions"
              ],
              "rows": [
                [
                  1,
                  "The Dark Knight",
                  2008,
                  1005
                ],
                [
                  2,
                  "Gladiator",
                  2000,
                  460
                ],
                [
                  3,
                  "The Bourne Ultimatum",
                  2007,
                  444
                ],
                [
                  4,
                  "Casino Royale",
                  2006,
                  616
                ],
                [
                  5,
                  "Avatar",
                  2009,
                  2923
                ],
                [
                  6,
                  "Iron Man",
                  2008,
                  585
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "box_office_millions"
              ],
              "rows": [
                [
                  1,
                  "Avatar",
                  2009,
                  2923
                ],
                [
                  2,
                  "Inception",
                  2010,
                  836
                ],
                [
                  3,
                  "The Matrix Reloaded",
                  2003,
                  741
                ],
                [
                  4,
                  "War of the Worlds",
                  2005,
                  603
                ],
                [
                  5,
                  "Minority Report",
                  2002,
                  358
                ],
                [
                  6,
                  "Iron Man",
                  2008,
                  585
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "The Dark Knight"
                ],
                [
                  "Gladiator"
                ],
                [
                  "The Bourne Ultimatum"
                ],
                [
                  "Casino Royale"
                ],
                [
                  "Avatar"
                ],
                [
                  "Iron Man"
                ],
                [
                  "Inception"
                ],
                [
                  "The Matrix Reloaded"
                ],
                [
                  "War of the Worlds"
                ],
                [
                  "Minority Report"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "Use UNION to get the <b>title of movies before 2008</b> from comedy_movies and drama_movies.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM comedy_movies WHERE release_year < 2008 UNION SELECT title FROM drama_movies WHERE release_year < 2008;</code>",
          "solution": [
            "select title from comedy_movies where release_year < 2008 union select title from drama_movies where release_year < 2008;",
            "select title from comedy_movies where release_year <= 2007 union select title from drama_movies where release_year <= 2007;",
            "select title from comedy_movies where release_year<2008 union select title from drama_movies where release_year<2008;",
            "select title from comedy_movies where release_year<=2007 union select title from drama_movies where release_year<=2007;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Superbad",
                  2007
                ],
                [
                  2,
                  "The Hangover",
                  2009
                ],
                [
                  3,
                  "Mean Girls",
                  2004
                ],
                [
                  4,
                  "Wedding Crashers",
                  2005
                ],
                [
                  5,
                  "Step Brothers",
                  2008
                ],
                [
                  6,
                  "Little Miss Sunshine",
                  2006
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year"
              ],
              "rows": [
                [
                  1,
                  "Gladiator",
                  2000
                ],
                [
                  2,
                  "The Departed",
                  2006
                ],
                [
                  3,
                  "A Beautiful Mind",
                  2001
                ],
                [
                  4,
                  "The Social Network",
                  2010
                ],
                [
                  5,
                  "No Country for Old Men",
                  2007
                ],
                [
                  6,
                  "There Will Be Blood",
                  2007
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "Superbad"
                ],
                [
                  "Mean Girls"
                ],
                [
                  "Wedding Crashers"
                ],
                [
                  "Little Miss Sunshine"
                ],
                [
                  "Gladiator"
                ],
                [
                  "The Departed"
                ],
                [
                  "A Beautiful Mind"
                ],
                [
                  "No Country for Old Men"
                ],
                [
                  "There Will Be Blood"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Use UNION to get the <b>title of movies that made over 600 million</b> from blockbusters_part1 and blockbusters_part2.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM blockbusters_part1 WHERE box_office_millions > 600 UNION SELECT title FROM blockbusters_part2 WHERE box_office_millions > 600;</code>",
          "solution": [
            "select title from blockbusters_part1 where box_office_millions > 600 union select title from blockbusters_part2 where box_office_millions > 600;",
            "select title from blockbusters_part1 where box_office_millions>600 union select title from blockbusters_part2 where box_office_millions>600;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "box_office_millions"
              ],
              "rows": [
                [
                  1,
                  "The Dark Knight",
                  1005
                ],
                [
                  2,
                  "Pirates of the Caribbean: Dead Man's Chest",
                  1066
                ],
                [
                  3,
                  "Harry Potter and the Sorcerer's Stone",
                  974
                ],
                [
                  4,
                  "Transformers",
                  709
                ],
                [
                  5,
                  "The Lord of the Rings: The Return of the King",
                  1146
                ],
                [
                  6,
                  "Shrek 2",
                  932
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "box_office_millions"
              ],
              "rows": [
                [
                  1,
                  "Avatar",
                  2923
                ],
                [
                  2,
                  "The Dark Knight",
                  1005
                ],
                [
                  3,
                  "The Twilight Saga: New Moon",
                  709
                ],
                [
                  4,
                  "Spider-Man 2",
                  789
                ],
                [
                  5,
                  "Inception",
                  836
                ],
                [
                  6,
                  "The Hunger Games",
                  694
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "The Dark Knight"
                ],
                [
                  "Pirates of the Caribbean: Dead Man's Chest"
                ],
                [
                  "Harry Potter and the Sorcerer's Stone"
                ],
                [
                  "Transformers"
                ],
                [
                  "The Lord of the Rings: The Return of the King"
                ],
                [
                  "Shrek 2"
                ],
                [
                  "Avatar"
                ],
                [
                  "The Twilight Saga: New Moon"
                ],
                [
                  "Spider-Man 2"
                ],
                [
                  "Inception"
                ],
                [
                  "The Hunger Games"
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Use UNION on a single table to combine movies released in 2008 and Action movies (UNION removes duplicates when a movie matches both conditions) from the movies table. Select only the titles.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM movies WHERE release_year = 2008 UNION SELECT title FROM movies WHERE genre = 'Action';</code>",
          "solution": [
            "select title from movies where release_year = 2008 union select title from movies where genre = 'action';",
            "select title from movies where release_year=2008 union select title from movies where genre='action';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "genre"
              ],
              "rows": [
                [
                  1,
                  "Iron Man",
                  2008,
                  "Action"
                ],
                [
                  2,
                  "The Dark Knight",
                  2008,
                  "Action"
                ],
                [
                  3,
                  "Mamma Mia!",
                  2008,
                  "Musical"
                ],
                [
                  4,
                  "Casino Royale",
                  2006,
                  "Action"
                ],
                [
                  5,
                  "Gladiator",
                  2000,
                  "Drama"
                ],
                [
                  6,
                  "The Hangover",
                  2009,
                  "Comedy"
                ],
                [
                  7,
                  "Avatar",
                  2009,
                  "Sci-Fi"
                ],
                [
                  8,
                  "Transformers",
                  2007,
                  "Action"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "Iron Man"
                ],
                [
                  "The Dark Knight"
                ],
                [
                  "Mamma Mia!"
                ],
                [
                  "Casino Royale"
                ],
                [
                  "Transformers"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Use UNION to combine movies released after 2007 and Action movies from the movies table. Select only the titles.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM movies WHERE release_year > 2007 UNION SELECT title FROM movies WHERE genre = 'Action';</code>",
          "solution": [
            "select title from movies where release_year > 2007 union select title from movies where genre = 'action';",
            "select title from movies where release_year>2007 union select title from movies where genre='action';",
            "select title from movies where genre = 'action' union select title from movies where release_year > 2007;",
            "select title from movies where genre='action' union select title from movies where release_year>2007;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "genre"
              ],
              "rows": [
                [
                  1,
                  "Iron Man",
                  2008,
                  "Action"
                ],
                [
                  2,
                  "The Dark Knight",
                  2008,
                  "Action"
                ],
                [
                  3,
                  "The Hangover",
                  2009,
                  "Comedy"
                ],
                [
                  4,
                  "Avatar",
                  2009,
                  "Sci-Fi"
                ],
                [
                  5,
                  "Casino Royale",
                  2006,
                  "Action"
                ],
                [
                  6,
                  "Gladiator",
                  2000,
                  "Drama"
                ],
                [
                  7,
                  "Transformers",
                  2007,
                  "Action"
                ],
                [
                  8,
                  "Mean Girls",
                  2004,
                  "Comedy"
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "Iron Man"
                ],
                [
                  "The Dark Knight"
                ],
                [
                  "The Hangover"
                ],
                [
                  "Avatar"
                ],
                [
                  "Casino Royale"
                ],
                [
                  "Transformers"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Use UNION to combine movies released in 1999 and Drama movies from the movies table. Select only the titles.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM movies WHERE release_year = 1999 UNION SELECT title FROM movies WHERE genre = 'Drama';</code>",
          "solution": [
            "select title from movies where release_year = 1999 union select title from movies where genre = 'drama';",
            "select title from movies where release_year=1999 union select title from movies where genre='drama';"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "genre",
                "rating"
              ],
              "rows": [
                [
                  1,
                  "The Matrix",
                  1999,
                  "Sci-Fi",
                  8.7
                ],
                [
                  2,
                  "Fight Club",
                  1999,
                  "Drama",
                  8.8
                ],
                [
                  3,
                  "Titanic",
                  1997,
                  "Drama",
                  7.9
                ],
                [
                  4,
                  "The Sixth Sense",
                  1999,
                  "Drama",
                  8.2
                ],
                [
                  5,
                  "Jurassic Park",
                  1993,
                  "Adventure",
                  8.1
                ],
                [
                  6,
                  "Goodfellas",
                  1990,
                  "Crime",
                  8.7
                ],
                [
                  7,
                  "Pulp Fiction",
                  1994,
                  "Crime",
                  8.9
                ],
                [
                  8,
                  "Forrest Gump",
                  1994,
                  "Drama",
                  8.8
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "The Matrix"
                ],
                [
                  "Fight Club"
                ],
                [
                  "The Sixth Sense"
                ],
                [
                  "Titanic"
                ],
                [
                  "Forrest Gump"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Use UNION to combine Crime movies and movies rated above 8.7 from the movies table. Select only the titles.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM movies WHERE genre = 'Crime' UNION SELECT title FROM movies WHERE rating > 8.7;</code>",
          "solution": [
            "select title from movies where genre = 'crime' union select title from movies where rating > 8.7;",
            "select title from movies where genre='crime' union select title from movies where rating>8.7;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "genre",
                "rating"
              ],
              "rows": [
                [
                  1,
                  "The Matrix",
                  1999,
                  "Sci-Fi",
                  8.7
                ],
                [
                  2,
                  "Fight Club",
                  1999,
                  "Drama",
                  8.8
                ],
                [
                  3,
                  "Titanic",
                  1997,
                  "Drama",
                  7.9
                ],
                [
                  4,
                  "The Sixth Sense",
                  1999,
                  "Drama",
                  8.2
                ],
                [
                  5,
                  "Jurassic Park",
                  1993,
                  "Adventure",
                  8.1
                ],
                [
                  6,
                  "Goodfellas",
                  1990,
                  "Crime",
                  8.7
                ],
                [
                  7,
                  "Pulp Fiction",
                  1994,
                  "Crime",
                  8.9
                ],
                [
                  8,
                  "Forrest Gump",
                  1994,
                  "Drama",
                  8.8
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "Goodfellas"
                ],
                [
                  "Pulp Fiction"
                ],
                [
                  "Fight Club"
                ],
                [
                  "Forrest Gump"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Use UNION to combine movies released in 1994 and movies rated above 8.5 from the movies table. Select only the titles.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM movies WHERE release_year = 1994 UNION SELECT title FROM movies WHERE rating >= 8.5;</code>",
          "solution": [
            "select title from movies where release_year = 1994 union select title from movies where rating > 8.5;",
            "select title from movies where release_year=1994 union select title from movies where rating>8.5;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "genre",
                "rating"
              ],
              "rows": [
                [
                  1,
                  "The Matrix",
                  1999,
                  "Sci-Fi",
                  8.7
                ],
                [
                  2,
                  "Fight Club",
                  1999,
                  "Drama",
                  8.8
                ],
                [
                  3,
                  "Titanic",
                  1997,
                  "Drama",
                  7.9
                ],
                [
                  4,
                  "The Sixth Sense",
                  1999,
                  "Drama",
                  8.2
                ],
                [
                  5,
                  "Jurassic Park",
                  1993,
                  "Adventure",
                  8.1
                ],
                [
                  6,
                  "Goodfellas",
                  1990,
                  "Crime",
                  8.7
                ],
                [
                  7,
                  "Pulp Fiction",
                  1994,
                  "Crime",
                  8.9
                ],
                [
                  8,
                  "Forrest Gump",
                  1994,
                  "Drama",
                  8.8
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "Pulp Fiction"
                ],
                [
                  "Forrest Gump"
                ],
                [
                  "The Matrix"
                ],
                [
                  "Fight Club"
                ],
                [
                  "Goodfellas"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Use UNION to combine Drama movies and movies released before 1995 from the movies table. Select only the titles.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM movies WHERE genre = 'Drama' UNION SELECT title FROM movies WHERE release_year < 1995;</code>",
          "solution": [
            "select title from movies where genre = 'drama' union select title from movies where release_year < 1995;",
            "select title from movies where genre='drama' union select title from movies where release_year<1995;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "genre",
                "rating"
              ],
              "rows": [
                [
                  1,
                  "The Matrix",
                  1999,
                  "Sci-Fi",
                  8.7
                ],
                [
                  2,
                  "Fight Club",
                  1999,
                  "Drama",
                  8.8
                ],
                [
                  3,
                  "Titanic",
                  1997,
                  "Drama",
                  7.9
                ],
                [
                  4,
                  "The Sixth Sense",
                  1999,
                  "Drama",
                  8.2
                ],
                [
                  5,
                  "Jurassic Park",
                  1993,
                  "Adventure",
                  8.1
                ],
                [
                  6,
                  "Goodfellas",
                  1990,
                  "Crime",
                  8.7
                ],
                [
                  7,
                  "Pulp Fiction",
                  1994,
                  "Crime",
                  8.9
                ],
                [
                  8,
                  "Forrest Gump",
                  1994,
                  "Drama",
                  8.8
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "Fight Club"
                ],
                [
                  "Titanic"
                ],
                [
                  "The Sixth Sense"
                ],
                [
                  "Forrest Gump"
                ],
                [
                  "Jurassic Park"
                ],
                [
                  "Goodfellas"
                ],
                [
                  "Pulp Fiction"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Use UNION to combine movies rated 8.8 or higher and movies released in 1999 from the movies table. Select only the titles.",
          "explanation": "",
          "correctAnswer": "<code>SELECT title FROM movies WHERE rating > 8.8 UNION SELECT title FROM movies WHERE release_year = 1999;</code>",
          "solution": [
            "select title from movies where rating >= 8.8 union select title from movies where release_year = 1999;",
            "select title from movies where rating>=8.8 union select title from movies where release_year=1999;",
            "select title from movies where rating > 8.7 union select title from movies where release_year = 1999;",
            "select title from movies where rating>8.7 union select title from movies where release_year=1999;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "movie_id",
                "title",
                "release_year",
                "genre",
                "rating"
              ],
              "rows": [
                [
                  1,
                  "The Matrix",
                  1999,
                  "Sci-Fi",
                  8.7
                ],
                [
                  2,
                  "Fight Club",
                  1999,
                  "Drama",
                  8.8
                ],
                [
                  3,
                  "Titanic",
                  1997,
                  "Drama",
                  7.9
                ],
                [
                  4,
                  "The Sixth Sense",
                  1999,
                  "Drama",
                  8.2
                ],
                [
                  5,
                  "Jurassic Park",
                  1993,
                  "Adventure",
                  8.1
                ],
                [
                  6,
                  "Goodfellas",
                  1990,
                  "Crime",
                  8.7
                ],
                [
                  7,
                  "Pulp Fiction",
                  1994,
                  "Crime",
                  8.9
                ],
                [
                  8,
                  "Forrest Gump",
                  1994,
                  "Drama",
                  8.8
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "title"
              ],
              "rows": [
                [
                  "Fight Club"
                ],
                [
                  "Pulp Fiction"
                ],
                [
                  "Forrest Gump"
                ],
                [
                  "The Matrix"
                ],
                [
                  "The Sixth Sense"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "localId": 23,
      "sourceId": 23,
      "title": "Right Join & Table Aliases",
      "category": "Joins",
      "sourcePage": "sql-join-lessons.html",
      "questions": [
        {
          "screen": 1,
          "type": "f",
          "title": "<code>RIGHT JOIN</code> is similar to <code>LEFT JOIN</code>, but reversed. All rows from the second (<b>right</b> of <code>JOIN</code>) table appear in the results, and only rows from the first (\"left\") table with matches to the second table appear. The non-matching rows will show null. Try:<br><br>\n\n<code>SELECT e.employee_name, c.company_name FROM companies AS c RIGHT JOIN employees AS e ON c.company_id = e.company_id;</code>\n<br><br>Note which employees in the second table don't have a company_id with a match in the first table. \n<br><br><b>Also</b> note that we are shortening the query by using <b>table aliases</b> to rename the tables \"c\" and \"e.\"",
          "explanation": "",
          "correctAnswer": "<code>SELECT e.employee_name, c.company_name FROM companies AS c RIGHT JOIN employees AS e ON c.company_id = e.company_id;</code>",
          "solution": [
            "select e.employee_name, c.company_name from companies c right join employees e on c.company_id = e.company_id;",
            "select e.employee_name, c.company_name from companies as c right join employees as e on c.company_id = e.company_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "company_id",
                "company_name",
                "headquarters"
              ],
              "rows": [
                [
                  1,
                  "Apple",
                  "Cupertino"
                ],
                [
                  2,
                  "Microsoft",
                  "Redmond"
                ],
                [
                  3,
                  "Google",
                  "Mountain View"
                ],
                [
                  4,
                  "Amazon",
                  "Seattle"
                ],
                [
                  5,
                  "Meta",
                  "Menlo Park"
                ],
                [
                  6,
                  "Netflix",
                  "Los Gatos"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "employee_id",
                "employee_name",
                "company_id"
              ],
              "rows": [
                [
                  1,
                  "Alice Chen",
                  1
                ],
                [
                  2,
                  "Brian Lee",
                  3
                ],
                [
                  3,
                  "Carla Gomez",
                  2
                ],
                [
                  4,
                  "David Kim",
                  7
                ],
                [
                  5,
                  "Elena Rossi",
                  4
                ],
                [
                  6,
                  "Frank Moore",
                  "null"
                ],
                [
                  7,
                  "Grace Patel",
                  5
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "employee_name",
                "company_name"
              ],
              "rows": [
                [
                  "Alice Chen",
                  "Apple"
                ],
                [
                  "Brian Lee",
                  "Google"
                ],
                [
                  "Carla Gomez",
                  "Microsoft"
                ],
                [
                  "David Kim",
                  "null"
                ],
                [
                  "Elena Rossi",
                  "Amazon"
                ],
                [
                  "Frank Moore",
                  "null"
                ],
                [
                  "Grace Patel",
                  "Meta"
                ]
              ]
            }
          ]
        },
        {
          "screen": 2,
          "type": "f",
          "title": "To shorten it further, you can also assign a table alias without using <code>AS</code>. Try:<br><br>\n\n<code>SELECT e.employee_name, c.company_name FROM companies c RIGHT JOIN employees e ON c.company_id = e.company_id;</code>",
          "explanation": "",
          "correctAnswer": "<code>SELECT e.employee_name, c.company_name FROM companies c RIGHT JOIN employees e ON c.company_id = e.company_id;</code>",
          "solution": [
            "select e.employee_name, c.company_name from companies c right join employees e on c.company_id = e.company_id;",
            "select e.employee_name, c.company_name from companies as c right join employees as e on c.company_id = e.company_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "company_id",
                "company_name",
                "headquarters"
              ],
              "rows": [
                [
                  1,
                  "Apple",
                  "Cupertino"
                ],
                [
                  2,
                  "Microsoft",
                  "Redmond"
                ],
                [
                  3,
                  "Google",
                  "Mountain View"
                ],
                [
                  4,
                  "Amazon",
                  "Seattle"
                ],
                [
                  5,
                  "Meta",
                  "Menlo Park"
                ],
                [
                  6,
                  "Netflix",
                  "Los Gatos"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "employee_id",
                "employee_name",
                "company_id"
              ],
              "rows": [
                [
                  1,
                  "Alice Chen",
                  1
                ],
                [
                  2,
                  "Brian Lee",
                  3
                ],
                [
                  3,
                  "Carla Gomez",
                  2
                ],
                [
                  4,
                  "David Kim",
                  7
                ],
                [
                  5,
                  "Elena Rossi",
                  4
                ],
                [
                  6,
                  "Frank Moore",
                  "null"
                ],
                [
                  7,
                  "Grace Patel",
                  5
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "employee_name",
                "company_name"
              ],
              "rows": [
                [
                  "Alice Chen",
                  "Apple"
                ],
                [
                  "Brian Lee",
                  "Google"
                ],
                [
                  "Carla Gomez",
                  "Microsoft"
                ],
                [
                  "David Kim",
                  "null"
                ],
                [
                  "Elena Rossi",
                  "Amazon"
                ],
                [
                  "Frank Moore",
                  "null"
                ],
                [
                  "Grace Patel",
                  "Meta"
                ]
              ]
            }
          ]
        },
        {
          "screen": 3,
          "type": "f",
          "title": "Use RIGHT JOIN to return product_name from products joined to company_name from companies (keeping the companies table intact). Use table aliases \"p\" and \"c\"!",
          "explanation": "",
          "correctAnswer": "<code>SELECT p.product_name, c.company_name FROM companies c RIGHT JOIN products p ON c.company_id = p.company_id;</code>",
          "solution": [
            "select p.product_name, c.company_name from companies c right join products p on c.company_id = p.company_id;",
            "select p.product_name, c.company_name from companies as c right join products as p on c.company_id = p.company_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "company_id",
                "company_name"
              ],
              "rows": [
                [
                  1,
                  "Apple"
                ],
                [
                  2,
                  "Microsoft"
                ],
                [
                  3,
                  "Google"
                ],
                [
                  4,
                  "Amazon"
                ],
                [
                  5,
                  "Meta"
                ],
                [
                  6,
                  "Netflix"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "product_id",
                "product_name",
                "company_id"
              ],
              "rows": [
                [
                  1,
                  "iPhone",
                  1
                ],
                [
                  2,
                  "Surface Pro",
                  2
                ],
                [
                  3,
                  "Pixel",
                  3
                ],
                [
                  4,
                  "Echo",
                  4
                ],
                [
                  5,
                  "Quest",
                  5
                ],
                [
                  6,
                  "Streaming Box",
                  8
                ],
                [
                  7,
                  "MacBook",
                  1
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name",
                "company_name"
              ],
              "rows": [
                [
                  "iPhone",
                  "Apple"
                ],
                [
                  "Surface Pro",
                  "Microsoft"
                ],
                [
                  "Pixel",
                  "Google"
                ],
                [
                  "Echo",
                  "Amazon"
                ],
                [
                  "Quest",
                  "Meta"
                ],
                [
                  "Streaming Box",
                  "null"
                ],
                [
                  "MacBook",
                  "Apple"
                ]
              ]
            }
          ]
        },
        {
          "screen": 4,
          "type": "f",
          "title": "Use RIGHT JOIN to return city from offices with company_name from companies, keeping the offices table intact. Use table aliases \"c\" and \"o\"!",
          "explanation": "",
          "correctAnswer": "<code>SELECT o.city, c.company_name FROM companies c RIGHT JOIN offices o ON c.company_id = o.company_id;</code>",
          "solution": [
            "select o.city, c.company_name from companies c right join offices o on c.company_id = o.company_id;",
            "select o.city, c.company_name from companies as c right join offices as o on c.company_id = o.company_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "company_id",
                "company_name"
              ],
              "rows": [
                [
                  1,
                  "Apple"
                ],
                [
                  2,
                  "Microsoft"
                ],
                [
                  3,
                  "Google"
                ],
                [
                  4,
                  "Amazon"
                ],
                [
                  5,
                  "Meta"
                ],
                [
                  6,
                  "Netflix"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "office_id",
                "city",
                "company_id"
              ],
              "rows": [
                [
                  1,
                  "Cupertino",
                  1
                ],
                [
                  2,
                  "Redmond",
                  2
                ],
                [
                  3,
                  "New York",
                  4
                ],
                [
                  4,
                  "Austin",
                  7
                ],
                [
                  5,
                  "London",
                  3
                ],
                [
                  6,
                  "Dublin",
                  "null"
                ],
                [
                  7,
                  "Seattle",
                  4
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "city",
                "company_name"
              ],
              "rows": [
                [
                  "Cupertino",
                  "Apple"
                ],
                [
                  "Redmond",
                  "Microsoft"
                ],
                [
                  "New York",
                  "Amazon"
                ],
                [
                  "Austin",
                  "null"
                ],
                [
                  "London",
                  "Google"
                ],
                [
                  "Dublin",
                  "null"
                ],
                [
                  "Seattle",
                  "Amazon"
                ]
              ]
            }
          ]
        },
        {
          "screen": 5,
          "type": "f",
          "title": "Use RIGHT JOIN to return issue_title from support_tickets with company_name from companies, keeping the support_tickets table intact. Use table aliases \"s\" and \"c\"!<br><br>Recall that in a right join, we keep all rows from the table to the right of the word <code>JOIN</code>, meaning we keep that table fully intact.",
          "explanation": "",
          "correctAnswer": "<code>SELECT s.issue_title, c.company_name FROM companies c RIGHT JOIN support_tickets s ON c.company_id = s.company_id;</code>",
          "solution": [
            "select s.issue_title, c.company_name from companies c right join support_tickets s on c.company_id = s.company_id;",
            "select s.issue_title, c.company_name from companies as c right join support_tickets as s on c.company_id = s.company_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "company_id",
                "company_name",
                "industry"
              ],
              "rows": [
                [
                  1,
                  "Apple",
                  "Hardware"
                ],
                [
                  2,
                  "Microsoft",
                  "Software"
                ],
                [
                  3,
                  "Google",
                  "Internet"
                ],
                [
                  4,
                  "Amazon",
                  "E-Commerce"
                ],
                [
                  5,
                  "Meta",
                  "Social Media"
                ],
                [
                  6,
                  "Oracle",
                  "Database"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "ticket_id",
                "issue_title",
                "company_id"
              ],
              "rows": [
                [
                  101,
                  "Login Failure",
                  2
                ],
                [
                  102,
                  "Server Downtime",
                  4
                ],
                [
                  103,
                  "API Error",
                  3
                ],
                [
                  104,
                  "Payment Bug",
                  7
                ],
                [
                  105,
                  "App Crash",
                  1
                ],
                [
                  106,
                  "Security Alert",
                  "null"
                ],
                [
                  107,
                  "Data Sync Issue",
                  6
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "issue_title",
                "company_name"
              ],
              "rows": [
                [
                  "Login Failure",
                  "Microsoft"
                ],
                [
                  "Server Downtime",
                  "Amazon"
                ],
                [
                  "API Error",
                  "Google"
                ],
                [
                  "Payment Bug",
                  "null"
                ],
                [
                  "App Crash",
                  "Apple"
                ],
                [
                  "Security Alert",
                  "null"
                ],
                [
                  "Data Sync Issue",
                  "Oracle"
                ]
              ]
            }
          ]
        },
        {
          "screen": 6,
          "type": "f",
          "title": "Use RIGHT JOIN to return product_name from subscriptions with company_name from companies, ensuring that it keeps all rows from subscriptions. Use table aliases \"s\" and \"c\"!",
          "explanation": "",
          "correctAnswer": "<code>SELECT s.product_name, c.company_name FROM companies c RIGHT JOIN subscriptions s ON c.company_id = s.company_id;</code>",
          "solution": [
            "select s.product_name, c.company_name from companies c right join subscriptions s on c.company_id = s.company_id;",
            "select s.product_name, c.company_name from companies as c right join subscriptions as s on c.company_id = s.company_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "company_id",
                "company_name"
              ],
              "rows": [
                [
                  1,
                  "Apple"
                ],
                [
                  2,
                  "Microsoft"
                ],
                [
                  3,
                  "Google"
                ],
                [
                  4,
                  "Amazon"
                ],
                [
                  5,
                  "Meta"
                ],
                [
                  6,
                  "Oracle"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "subscription_id",
                "product_name",
                "company_id"
              ],
              "rows": [
                [
                  201,
                  "iCloud",
                  1
                ],
                [
                  202,
                  "Azure",
                  2
                ],
                [
                  203,
                  "Google Workspace",
                  3
                ],
                [
                  204,
                  "AWS",
                  4
                ],
                [
                  205,
                  "Meta Verified",
                  5
                ],
                [
                  206,
                  "Unknown SaaS",
                  8
                ],
                [
                  207,
                  "Oracle Cloud",
                  6
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name",
                "company_name"
              ],
              "rows": [
                [
                  "iCloud",
                  "Apple"
                ],
                [
                  "Azure",
                  "Microsoft"
                ],
                [
                  "Google Workspace",
                  "Google"
                ],
                [
                  "AWS",
                  "Amazon"
                ],
                [
                  "Meta Verified",
                  "Meta"
                ],
                [
                  "Unknown SaaS",
                  "null"
                ],
                [
                  "Oracle Cloud",
                  "Oracle"
                ]
              ]
            }
          ]
        },
        {
          "screen": 7,
          "type": "f",
          "title": "Use RIGHT JOIN to return applicant_name from job_applications with company_name from companies, ensuring that it keeps all applicant names. Use table aliases \"j\" and \"c\".",
          "explanation": "",
          "correctAnswer": "<code>SELECT j.applicant_name, c.company_name FROM companies c RIGHT JOIN job_applications j ON c.company_id = j.company_id;</code>",
          "solution": [
            "select j.applicant_name, c.company_name from companies as c right join job_applications as j on c.company_id = j.company_id;",
            "select j.applicant_name, c.company_name from companies c right join job_applications j on c.company_id = j.company_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "company_id",
                "company_name"
              ],
              "rows": [
                [
                  1,
                  "Apple"
                ],
                [
                  2,
                  "Microsoft"
                ],
                [
                  3,
                  "Google"
                ],
                [
                  4,
                  "Amazon"
                ],
                [
                  5,
                  "Meta"
                ],
                [
                  6,
                  "Oracle"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "application_id",
                "applicant_name",
                "company_id"
              ],
              "rows": [
                [
                  301,
                  "John Smith",
                  1
                ],
                [
                  302,
                  "Sara Johnson",
                  3
                ],
                [
                  303,
                  "Michael Brown",
                  2
                ],
                [
                  304,
                  "Emily Davis",
                  9
                ],
                [
                  305,
                  "Daniel Wilson",
                  4
                ],
                [
                  306,
                  "Laura Martinez",
                  "null"
                ],
                [
                  307,
                  "Chris Taylor",
                  5
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "applicant_name",
                "company_name"
              ],
              "rows": [
                [
                  "John Smith",
                  "Apple"
                ],
                [
                  "Sara Johnson",
                  "Google"
                ],
                [
                  "Michael Brown",
                  "Microsoft"
                ],
                [
                  "Emily Davis",
                  "null"
                ],
                [
                  "Daniel Wilson",
                  "Amazon"
                ],
                [
                  "Laura Martinez",
                  "null"
                ],
                [
                  "Chris Taylor",
                  "Meta"
                ]
              ]
            }
          ]
        },
        {
          "screen": 8,
          "type": "f",
          "title": "Use RIGHT JOIN to return product_name from orders with customer_name from customers, ensuring that it keeps all orders even if customer does not exist. Use table aliases \"o\" and \"c\".",
          "explanation": "",
          "correctAnswer": "<code>SELECT o.product_name, c.customer_name FROM customers c RIGHT JOIN orders o ON c.customer_id = o.customer_id;</code>",
          "solution": [
            "select o.product_name, c.customer_name from customers c right join orders o on c.customer_id = o.customer_id;",
            "select o.product_name, c.customer_name from customers as c right join orders as o on c.customer_id = o.customer_id;",
            "select orders.product_name, customers.customer_name from customers right join orders on customers.customer_id = orders.customer_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "customer_id",
                "customer_name",
                "city"
              ],
              "rows": [
                [
                  1,
                  "Alice Johnson",
                  "Chicago"
                ],
                [
                  2,
                  "Brian Lee",
                  "Seattle"
                ],
                [
                  3,
                  "Carla Gomez",
                  "Austin"
                ],
                [
                  4,
                  "David Kim",
                  "Boston"
                ],
                [
                  5,
                  "Elena Rossi",
                  "Miami"
                ],
                [
                  6,
                  "Frank Moore",
                  "Denver"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "order_id",
                "product_name",
                "customer_id"
              ],
              "rows": [
                [
                  1001,
                  "Laptop",
                  1
                ],
                [
                  1002,
                  "Headphones",
                  3
                ],
                [
                  1003,
                  "Keyboard",
                  2
                ],
                [
                  1004,
                  "Mouse",
                  9
                ],
                [
                  1005,
                  "Monitor",
                  4
                ],
                [
                  1006,
                  "USB Cable",
                  "null"
                ],
                [
                  1007,
                  "Desk Lamp",
                  5
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "product_name",
                "customer_name"
              ],
              "rows": [
                [
                  "Laptop",
                  "Alice Johnson"
                ],
                [
                  "Headphones",
                  "Carla Gomez"
                ],
                [
                  "Keyboard",
                  "Brian Lee"
                ],
                [
                  "Mouse",
                  "null"
                ],
                [
                  "Monitor",
                  "David Kim"
                ],
                [
                  "USB Cable",
                  "null"
                ],
                [
                  "Desk Lamp",
                  "Elena Rossi"
                ]
              ]
            }
          ]
        },
        {
          "screen": 9,
          "type": "f",
          "title": "Use RIGHT JOIN to return course_name from enrollments with student_name from students, ensuring that it keeps all enrollments even if student does not exist. Use table aliases \"e\" and \"s\".",
          "explanation": "",
          "correctAnswer": "<code>SELECT e.course_name, s.student_name FROM students s RIGHT JOIN enrollments e ON s.student_id = e.student_id;</code>",
          "solution": [
            "select e.course_name, s.student_name from students s right join enrollments e on s.student_id = e.student_id;",
            "select e.course_name, s.student_name from students as s right join enrollments as e on s.student_id = e.student_id;",
            "select enrollments.course_name, students.student_name from students right join enrollments on students.student_id = enrollments.student_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "student_id",
                "student_name",
                "major"
              ],
              "rows": [
                [
                  1,
                  "Jake Miller",
                  "Computer Science"
                ],
                [
                  2,
                  "Sophia Chen",
                  "Biology"
                ],
                [
                  3,
                  "Marcus Rivera",
                  "History"
                ],
                [
                  4,
                  "Emily Davis",
                  "Economics"
                ],
                [
                  5,
                  "Liam Patel",
                  "Math"
                ],
                [
                  6,
                  "Olivia Brown",
                  "English"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "enrollment_id",
                "course_name",
                "student_id"
              ],
              "rows": [
                [
                  2001,
                  "Database Systems",
                  1
                ],
                [
                  2002,
                  "Organic Chemistry",
                  2
                ],
                [
                  2003,
                  "World History",
                  3
                ],
                [
                  2004,
                  "Machine Learning",
                  7
                ],
                [
                  2005,
                  "Statistics",
                  5
                ],
                [
                  2006,
                  "Philosophy",
                  "null"
                ],
                [
                  2007,
                  "Microeconomics",
                  4
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "course_name",
                "student_name"
              ],
              "rows": [
                [
                  "Database Systems",
                  "Jake Miller"
                ],
                [
                  "Organic Chemistry",
                  "Sophia Chen"
                ],
                [
                  "World History",
                  "Marcus Rivera"
                ],
                [
                  "Machine Learning",
                  "null"
                ],
                [
                  "Statistics",
                  "Liam Patel"
                ],
                [
                  "Philosophy",
                  "null"
                ],
                [
                  "Microeconomics",
                  "Emily Davis"
                ]
              ]
            }
          ]
        },
        {
          "screen": 10,
          "type": "f",
          "title": "Use RIGHT JOIN to return route from flights with airline_name from airlines, ensuring that it keeps all flights even if the airline record does not exist. Use table aliases \"f\" and \"a\".",
          "explanation": "",
          "correctAnswer": "<code>SELECT f.route, a.airline_name FROM airlines a RIGHT JOIN flights f ON a.airline_id = f.airline_id;</code>",
          "solution": [
            "select f.route, a.airline_name from airlines a right join flights f on a.airline_id = f.airline_id;",
            "select f.route, a.airline_name from airlines as a right join flights as f on a.airline_id = f.airline_id;",
            "select flights.route, airlines.airline_name from airlines right join flights on airlines.airline_id = flights.airline_id;"
          ],
          "setupTables": [
            {
              "title": "Untitled",
              "headers": [
                "airline_id",
                "airline_name",
                "country"
              ],
              "rows": [
                [
                  1,
                  "Delta",
                  "USA"
                ],
                [
                  2,
                  "United",
                  "USA"
                ],
                [
                  3,
                  "Lufthansa",
                  "Germany"
                ],
                [
                  4,
                  "Emirates",
                  "UAE"
                ],
                [
                  5,
                  "Air Canada",
                  "Canada"
                ],
                [
                  6,
                  "Qantas",
                  "Australia"
                ]
              ]
            },
            {
              "title": "Untitled",
              "headers": [
                "flight_id",
                "route",
                "airline_id"
              ],
              "rows": [
                [
                  3001,
                  "JFK-LAX",
                  1
                ],
                [
                  3002,
                  "ORD-SFO",
                  2
                ],
                [
                  3003,
                  "FRA-JFK",
                  3
                ],
                [
                  3004,
                  "DXB-LHR",
                  4
                ],
                [
                  3005,
                  "YYZ-YVR",
                  5
                ],
                [
                  3006,
                  "SYD-MEL",
                  6
                ],
                [
                  3007,
                  "MIA-BOG",
                  9
                ]
              ]
            }
          ],
          "resultTables": [
            {
              "title": "Untitled",
              "headers": [
                "route",
                "airline_name"
              ],
              "rows": [
                [
                  "JFK-LAX",
                  "Delta"
                ],
                [
                  "ORD-SFO",
                  "United"
                ],
                [
                  "FRA-JFK",
                  "Lufthansa"
                ],
                [
                  "DXB-LHR",
                  "Emirates"
                ],
                [
                  "YYZ-YVR",
                  "Air Canada"
                ],
                [
                  "SYD-MEL",
                  "Qantas"
                ],
                [
                  "MIA-BOG",
                  "null"
                ]
              ]
            }
          ]
        }
      ]
    }
  ]
};
