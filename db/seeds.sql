-- Active: 1684202989048@@127.0.0.1@3306@emptracker_db
-- Insert seed statements for dept, role and employee

INSERT INTO department
     (name)
VALUES
       ("Customer Service"),
       ("IT"),
       ("Operations"),
       ("Sales"),
       ("Manager"),
       ("Other");

INSERT INTO role 
    (title, salary, department_id)
VALUES 
       ("Customer Service Rep", 50000, 3),
       ("IT Admin", 60000, 2),
       ("Operations Assistant",70000, 4),
       ("Sales Coordinator", 50000, 5),
       ("Team Lead", 55000, 1),
       ("Third Party", 40000, 6);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
    VALUES
    ("Rebel", "Wilson", 5, 1),
    ("Anna", "Kendrick", 4, 1),
    ("Iliza", "Shlesinger", 6, NULL),
    ("Britney", "Spears", 2, NULL),
    ("Johnny", "Depp", 2, NULL);

   