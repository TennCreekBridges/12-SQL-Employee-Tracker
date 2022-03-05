const inquirer = require('inquirer');

const topLevelPrompts = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'top',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role',
                'Exit',
            ],
        },
    ]);
};

module.exports = topLevelPrompts;