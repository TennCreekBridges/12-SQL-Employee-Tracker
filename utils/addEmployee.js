const inquirer = require('inquirer');

const addEmployee = async (roles, employees) => {
    employees = employees.map((x) => `${x.first_name} ${x.last_name}`);
    employees.push('None');
    roles = roles.map((x) => x.title);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the employee\'\s first name?',
            validate: (firstName) => {
                if (firstName) {
                    return true;
                } else {
                    console.log ('You must enter a first name.');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employee\'\s last name?',
            validate: (lastName) => {
                if (lastName) {
                    return true;
                } else {
                    console.log('You must enter a last name.');
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'whichRole',
            message: 'What is their role?',
            choices: roles,
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Who is their manager?',
            choices: employees,
        },
    ]);
};

module.exports = addEmployee;
