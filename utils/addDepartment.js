const inquirer = require('inquirer');
const db = require('../db/server');

const addDepartment = async () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'department2',
            message: 'What is the name of the department?',
            validate: (department2) => {
                if (department2) {
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