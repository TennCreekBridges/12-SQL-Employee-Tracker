const inquirer = require('inquirer');
const db = require('../db/server');
require('console.table');

function addEmployee(){
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of this new employee?'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of this new employee?'
        }
    ]).then(answer => {
        const params = [answer.firstName, answer.lastName];

        const roleSql = `SELECT roles.id, roles.title FROM roles`;
        db.query(roleSql, (err, data) =>{
            if (err) throw err; 

            const roles = data.map(({ id, title }) => ({ name: title, value: id }));
            inquirer.prompt([
                {
                    name: 'role',
                    type: 'list',
                    message: "What is the new employee's role?",
                    choices: roles
                }
            ]).then(roleChoice => {
                const role = roleChoice.role;
                params.push(role);

                const managerSql = `SELECT * FROM employees`
                db.query(managerSql, (err, data) => {
                    if (err) throw error;
                    const managers = data.map(({ id, first_name, last_name }) => ({ name: first_name + " "+ last_name, value: id }));
                    inquirer.prompt([
                        {
                            name: 'manager',
                            type: 'list',
                            message: "Who will be this employee's manager?",
                            choices: managers
                        }
                    ]).then(managerChocie => {
                        const manager = managerChocie.manager;
                        params.push(manager);

                        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                                        VALUES (?,?,?,?)`;
                        db.query(sql, params, (err) => {
                            if (err) throw err;
                            viewEmployees();
                        });
                    });
                });
            });
        });
    });
};