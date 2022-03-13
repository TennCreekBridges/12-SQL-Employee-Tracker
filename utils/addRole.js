const inquirer = require("inquirer");

const addRole = async (departments) => {
  departments = departments.map((x) => x.name);
  return inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "What is the name of the role?",
      validate: (role) => {
        if (role) {
          return true;
        } else {
          console.log("\n You must enter a role name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "salary",
      message: "What is this role's salary?",
      validate: (salary) => {
        if (isNaN(salary) === false) {
          return true;
        } else {
          console.log("\n Response must be a number. Please re-enter.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "whichDepartment",
      message: "What department does this role fall under?",
    },
  ]);
};

module.exports = addRole;
