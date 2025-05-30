const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./backEnd/routes/userRoutes')

app.use(cors());
app.use(express.json()); 
app.use(express.static('public'));

app.use('/', userRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

