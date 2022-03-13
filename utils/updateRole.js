const inquirer = require("inquirer");

const updateRole = async (employees, roles) => {
  employees = employees.map((x) => `${x.first_name} ${x.last_name}`);
  roles = roles.map((x) => x.title);
  return inquirer.prompt([
    {
      type: "list",
      name: "whichEmployee",
      message: "Which employee would you like to update?",
      choices: employees,
    },
    {
      type: "list",
      name: "whichRole",
      message: "Which new role will they have?",
      choices: roles,
    },
  ]);
};

console.log("Employee role updated! What's next? \n");

module.exports = updateRole;
