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
          "What would you like to do? (please choose an option from the drop down menu).",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role"
        ],
      },
    ])

    .then((answers) => {
      console.log(answers);

      if (answers.menuChoice === "View all departments") {
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
        inquirer
          .prompt([
            {
              type: "input",
              name: "title",
              message:
                "What is the name of the department you would like to add?",
            },
          ])
          .then((data) => addDepartment(data.title));
      }
      if (answers.menuChoice === "Add a role") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "title",
              message: "What is the name for this position?",
            },
            {
              type: "input",
              name: "salary",
              message: "What is the salary for this position?",
            },
            {
              type: "input",
              name: "departmentId",
              message: "What is the department ID for this position?",
            },
          ])
          .then((data) => addRole(data));
          
      }      
      if (answers.menuChoice === "Add an employee") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "firstName",
              message: "What is the first name of this employee?",
            },
            {
              type: "input",
              name: "lastName",
              message: "What is the last name of this employee?",
            },
            {
              type: "input",
              name: "roleId",
              message: "What is the role for this position?",
            },
            {
              type: "input",
              name: "managerId",
              message: "Who is the manager for this employee?",
            },
          ])
          .then((employeeData) => {
            addEmployee(employeeData);
          displayMenu();
    });
  }

  if (answers.menuChoice === "Update employee role") {
    inquirer
          .prompt([
            {
              type: "input",
              name: "firstName",
              message: "What is the first name of this employee?",
            },
            {
              type: "input",
              name: "lastName",
              message: "What is the last name of this employee?",
            },
            {
              type: "input",
              name: "roleId",
              message: "What is the new role ID for this position?",
            },
            {
              type: "input",
              name: "managerId",
              message: "Who is the manager for this employee?",
            },
          ])
          .then((employeeData) => {
            updateEmployee(employeeData);
          displayMenu();
        });
      }
    })

    
// Add department function
const addDepartment = (departmentName) => {
  const sql = "INSERT INTO department (name) VALUES (?)";
  db.query(sql, [departmentName], (err, results) => {
    if (err) {
      console.error("Error adding department:", err);
      return;
    }
    console.log("Department added successfully");
    displayMenu();
  });
}

// Add role function
const addRole = (roleData) => {
  const { title, salary, departmentId } = roleData;
  const sql =
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
  db.query(sql, [title, salary, departmentId], (err, results) => {
    if (err) {
      console.error("Error adding role:", err);
      return;
    }
    console.log("Role added successfully");
    displayMenu();
  });
};

// Add employee function
const addEmployee = (employeeData) => {
  const { firstName, lastName, roleId, managerId } = employeeData;
  const sql =
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
  db.query(sql, [firstName, lastName, roleId, managerId], (err, results) => {
    if (err) {
      console.error("Error adding employee:", err);
      return;
    }
    console.log("Employee added successfully");
    displayMenu();
  });
};
//Add update employee role function
const updateEmployee = (employeeData) => {
  const { firstName, lastName, roleId, managerId } = employeeData;
  const sql = "UPDATE employee SET role_id = ?, manager_id = ? WHERE first_name = ? AND last_name = ?";
  
  db.query(sql, [roleId, managerId, firstName, lastName], (err, results) => {
    if (err) {
      console.error("Error updating employee data", err);
      return;
    }
    console.log("Employee data updated successfully");
    displayMenu();
  });
};
}
displayMenu();