const db = require('../settings/mysql');

function signin(username, hashedPassword, callback){
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, hashedPassword], callback);
}

function login(username, callback){
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
}

module.exports = { signin, login };