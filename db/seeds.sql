INSERT INTO department (department_name)
VALUES 
    ('Managerial Honchos'),
    ('Grunts'),
    ('Tech Nerds'),
    ('Number Crunchers');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (5, 'Chief Financial Officer', 75000, 4),
    (6, 'Chief Executive Officer', 75000, 4),
    (7, 'Data Entry', 36000, 2),
    (8, 'Dog Walker', 26000, 2),
    (9, 'Webmaster', 65000, 1),
    (10, 'IT Security', 60000, 1),
    (11, 'Purchasing', 58000, 3),
    (12, 'Accounts Receivable', 50000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (13, 'Janet', 'Jackson', 5, NULL),
    (14, 'Boy', 'George', 6, NULL),
    (15, 'Neil', 'Diamond', 9, NULL),
    (16, 'Jackson', 'Browne', 11, NULL),
    (17, 'Paul', 'Simon', 8, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (18, 'Paulie', 'Shore', 5, 14),
    (19, 'George', 'Michael', 6, 13),
    (20, 'Bruce', 'Springsteen', 9, 17),
    (21, 'Carly', 'Simon', 11, 14),
