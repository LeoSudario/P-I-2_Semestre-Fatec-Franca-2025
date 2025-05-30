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

function academias(nomeAcademia, endereco, callback){
    const sql = 'INSERT INTO academias (nome_academia, endereco_academia) VALUES (?, ?)';
    db.query(sql, [nomeAcademia, endereco], callback);
}

function mostraAcad(callback){
    const sql = 'SELECT nome_academia, endereco_academia FROM academias';
    db.query(sql, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
}

module.exports = { signin, login, academias, mostraAcad};