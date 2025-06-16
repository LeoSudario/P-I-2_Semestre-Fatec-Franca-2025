const bcrypt = require('bcryptjs');
const User = require('../models/userModels');

async function cadastro(req, res){
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    User.signin(username, hashedPassword,(err) => {
        if(err)return res.status(500).send('Erro ao cadastrar usuário.');
        res.send('Usuário cadastrado com sucesso!');
    });
}

function login(req, res){
    const { username, password } = req.body;

    User.login(username, (err, user) => {
        if(err)return res.status(500).send('Erro no servidor');
        if(!user)return res.status(401).send('Usuario nao encontrado');

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if(err)return res.status(500).send('Erro ao verificar senha');
            if(!isMatch)return res.status(401).send('Senha incorreta');

            res.send('Login bem-sucedido');
        });
    });
}

function academias(req, res){
    const { nomeAcademia, endereco } = req.body;
    if(!nomeAcademia || !endereco) {
        return res.status(400).json({ erro: 'Nome e endereço obrigatórios.' });
    }
    User.academias(nomeAcademia, endereco, (err) => {
        if(err)return res.status(500).json({ erro: err.message });
        res.status(201).json({ message: 'Academia registrada' });
    });
}

function mostraAcad(req, res) {
    User.mostraAcad((err, academias) => {
        if(err)return res.status(500).json({ erro: err.message });
        res.status(200).json(academias);
    });
}

module.exports = { cadastro, login, academias, mostraAcad};