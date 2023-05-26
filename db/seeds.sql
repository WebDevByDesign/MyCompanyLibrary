-- Insert seed statements for dept, employee & salary

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
       ("Customer Service Rep", 50000, 1),
       ("IT Admin", 60000, 2),
       ("Operations Assistant",70000, 3),
       ("Sales Coordinator", 50000, 4),
       ("Team Lead", 55000, 5),
       ("Third Party", 40000, 6);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
    VALUES
    ("Rebel", "Wilson", 1, NULL),
    ("Anna", "Kendrick", 2, NULL),
    ("Iliza", "Shlesinger", 3, NULL),
    ("Britney", "Spears", 4, NULL),
    ("Johnny", "Depp", 5, NULL);