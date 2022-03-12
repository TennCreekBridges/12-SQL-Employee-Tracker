// adds required 
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const app = express();
const cTable = require('console.table');

// includes external modules
const topLevelPrompts = require('./utils/topLevelPrompts');
const addDepartment = require('./utils/addDepartment');
const addEmployee = require('./utils/addEmployee');
const addRole = require('./utils/addRole');
const { 
    insertDepartment,
    insertRole,
    insertEmployee,
    viewDepartment,
    viewRole,
    viewEmployee,
 } = require('./utils/dbQueries.js');

// begin prompts
