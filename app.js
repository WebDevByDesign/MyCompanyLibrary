const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table")

const db = mysql.createConnection({
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "rootroot",
    database: "emptracker_db",
  
  // console.log(`Connected to the emptracker_db database.`)
});

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
    
    .then(function (answers) {
      console.log(answers);
      if (answers.menuChoice === "View all deparments") {
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
            displayMenu();
          });
      } if (answers.menuChoice === "View all roles") {
        db.query('SELECT * FROM role', function (err, results) {
            console.table(results);
            displayMenu();
    });
}
});

displayMenu();
