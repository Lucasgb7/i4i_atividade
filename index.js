// Bibliotecas
const session = require('express-session');
const express = require('express');
const app = express();
const connection = require('./database/database');


// Models
const UserController = require('./user/UserController');
const User = require('./user/User');

// View Engine
app.set('view engine', 'ejs');

// Configuracoes do Express
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Controle de sessao
app.use(session({
    secret: "intelligence4innovation",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 600000} 
}));

// Routers
app.use('/', UserController)


// Conexao com banco de dados
connection.authenticate()
    .then(() => {
        console.log("DATABASE -> Conectado!");
    })
    .catch(() => {
        console.log("DATABASE -> Erro ao conetar!");
    })

// Rotas
app.get('/', function (req, res) { // home
    res.render("index");
});
 
app.listen(8080, () => {
    console.log("SERVER -> Rodando...");
});