const mysql = require('mysql2');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// add Express.js middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res) => {
    res.status(404).end();
});

// connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'bridgett',
        password: 'passpass',
        database: 'employees'
    },
    console.log('Employee database connected.')
);

db.connect(err => {
    if (err) throw err;
    console.log('Employee database connected, with ');
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}.`);
    });
  });

module.exports = db;