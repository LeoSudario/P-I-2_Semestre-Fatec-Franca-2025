const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '11111',
    database: 'userDB'
});

db.connect(err => { 
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;