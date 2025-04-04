const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

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

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) return res.status(500).send('Erro ao cadastrar usuário.');
        res.send('Usuário cadastrado com sucesso!');
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';

    db.query(sql, [username], (err, results) => {
        if (err) return res.status(500).send('Erro no servidor');
        if (results.length === 0) return res.status(401).send('Usuário não encontrado');

        const storedHashedPassword = results[0].password;
        console.log("Senha no banco:", storedHashedPassword);
        console.log("Senha digitada:", password);

        bcrypt.compare(password, storedHashedPassword, (err, isMatch) => {
            if (err) return res.status(500).send('Erro ao verificar senha');
            if (!isMatch) return res.status(401).send('Senha incorreta');

            res.send('Login bem-sucedido');
        });
    });
});



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

