const inquirer = require('inquirer');

const addDepartment = async () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department?',
            validate: (department) => {
                if (department) {
                    return true;
                } else {
                    console.log ('You must enter a department name.');
                    return false;
                }
            },
        },
    ]);
};

module.exports = addDepartment;