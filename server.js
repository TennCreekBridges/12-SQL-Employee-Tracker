// required & start server
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();
const cTable = require('console.table');

const topLevelPrompts = require('./utils/topLevelPrompts');
const addDepartment = require('./utils/addDepartment');
const addEmployee = require('./utils/addEmployee');
const addRole = require('./utils/addRole');


// add Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to mysql database
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'bridgett',
        password: 'passpass',
        database: 'employees'
    });

    // db.query(`SELECT * FROM employee`, (err, rows) => {
    //     console.log(rows);
    //   });

// default response for any other (not found) request
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows});
        });
    });

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });