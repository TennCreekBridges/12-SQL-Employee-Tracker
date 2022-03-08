INSERT INTO department (name)
VALUES 
    ('Managerial Honchos'),
    ('Grunts'),
    ('Tech Nerds'),
    ('Number Crunchers');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (5, 'Chief Financial Officer', 75000.00, 4),
    (6, 'Chief Executive Officer', 75000.00, 4),
    (7, 'Data Entry', 36000.00, 2),
    (8, 'Dog Walker', 26000.00, 2),
    (9, 'Webmaster', 65000.00, 1),
    (10, 'IT Security', 60000.00, 1),
    (11, 'Purchasing', 58000.00, 3),
    (12, 'Accounts Receivable', 50000.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (13, 'Janet', 'Jackson', 5, 14),
    (14, 'Boy', 'George', 6, 13),
    (15, 'Neil', 'Diamond', 9, 17),
    (16, 'Jackson', 'Browne', 11, 14),
    (17, 'Paul', 'Simon', 8, 8);
