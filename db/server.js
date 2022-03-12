// start server & add required 
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// add Express.js middleware
app.use(express.urlencoded({ extended: true }));
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