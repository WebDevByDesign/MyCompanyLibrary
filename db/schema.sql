-- Active: 1684202989048@@127.0.0.1@3306@emptracker_db
-- Drop and create new db
DROP DATABASE IF EXISTS emptracker_db;
CREATE DATABASE emptracker_db;

USE emptracker_db;
-- Create table foundation
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);
-- Create role table with four columns - id, title, salary, department
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fkey_department FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id)
    REFERENCES employee(id) ON DELETE SET NULL
)
