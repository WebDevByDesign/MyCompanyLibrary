const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "emptracker_db",
});
// Add function to display menu w/ options
function displayMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuChoice",
        message:
          "What would you like to do? (please choose an option from the menu).",
        choices: [
          "View all deparments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
        ],
      },
    ])

    .then((answers) => {
      console.log(answers);
      if (answers.menuChoice === "View all deparments") {
        db.query("SELECT * FROM department", function (err, results) {
          console.table(results);
          displayMenu();
        });
      }
      if (answers.menuChoice === "View all roles") {
        db.query("SELECT * FROM role", function (err, results) {
          console.table(results);
          displayMenu();
        });
      }
      if (answers.menuChoice === "View all employees") {
        db.query("SELECT * FROM employee", function (err, results) {
          console.table(results);
          displayMenu();
        });
      }
      if (answers.menuChoice === "Add a department") {
        db.query("SELECT * FROM role", function (err, results) {
          console.table(results);
          displayMenu();
        });
      }
    });
}
displayMenu();

// Add department
const addDepartment = (departmentName) => {
  const sql = "INSERT INTO department (name) VALUES (?)";
  db.query(sql, [departmentName], (err, results) => {
    if (err) {
      console.error("Error adding department:", err);
      return;
    }
    console.log("Department added successfully");
  });
};

// Add role
const addRole = (title, salary, departmentId) => {
  const sql =
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
  db.query(sql, [title, salary, departmentId], (err, results) => {
    if (err) {
      console.error("Error adding role:", err);
      return;
    }
    console.log("Role added successfully");
  });
};
