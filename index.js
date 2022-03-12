// adds required files
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const app = express();
const cTable = require('console.table');
const topLevelPrompts = require('./utils/topLevelPrompts');
const addDepartment = require('./utils/addDepartment');
const addEmployee = require('./utils/addEmployee');
const addRole = require('./utils/addRole');
const { 
    insertDepartment,
    viewDepartment,
 } = require('./utils/dbQueries.js');

