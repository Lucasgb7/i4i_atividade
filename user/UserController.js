// Bibliotecas
const express = require('express');
const router = express.Router();
const User = require('./User');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth')

// Lista de usuarios
router.get("/users", (req, res) => {
    User.findAll().then(users => {
        res.render("users/index", {users: users});
    });
});

// Direcionamento para criacao de usuarios
router.get("/users/create", (req, res) => {
    res.render("users/create", {user: undefined});
});

// Criacao de usuarios (usuario fornece informacoes)
router.post("/users/create", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var address = req.body.address;
    var address2 = req.body.address2;
    var country = req.body.country;
    var state = req.body.state;
    var zip = req.body.zip;
    
    User.findOne({where:{email: email}}).then( user => { 
        if(user == undefined){ // Verifica se o email nao foi usado

            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            
            User.create({
                email: email,
                password: hash,
                name: name,
                address: address,
                address2: address2,
                country: country,
                state: state,
                zip: zip
            }).then(() => {
                res.redirect("/users");
            }).catch((err) => {
                res.redirect("/users");
            });


        }else{ // Email ja cadastrado
            res.redirect("/users/create");
        }
    });
});

// Deletar um usuario ja cadastrado
router.post("/users/delete/:id", (req, res) => {
    var id = req.params.id;
    if(id != undefined){ 
        if(!isNaN(id)){ // Verifica se o usuario existe
            User.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/users");
            });
        }else{ // Nao for um numero
            res.redirect("/users");
        }
    }else{ // Null
        res.redirect("/users");
    }
});

router.get("/users/edit/:id" , (req, res) => {
    var id = req.params.id;
    User.findByPk(id).then(user => {
        if(user != undefined){
            res.render("users/create", {user: user});
            /*
            User.findAll().then(user => {
                res.render("users/create", {user: user})
            });*/
        }else{
            res.redirect("/users");
        }
    }).catch(err => {
        res.redirect("/users");
    });
});

router.post("/users/update", (req, res) => {
    var id = req.body.id;
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var address = req.body.address;
    var address2 = req.body.address2;
    var country = req.body.country;
    var state = req.body.state;
    var zip = req.body.zip;

    User.update(
        {email: email, 
        password: password,
        name: name,
        address: address,
        address2: address2,
        country: country,
        state: state,
        zip: zip},{
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/users");
    }).catch(err => {
        res.redirect("/users");
    });
});

router.get("/login", (req, res) => {
    res.render("users/login");
});

// Autentica o usuario que acabou de fazer login
router.post("/authenticate", (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({where:{email: email}}).then(user => {
        if(user != undefined){ // Se existe um usuário com esse email
            // Validar senha
            var correct = bcrypt.compareSync(password, user.password);

            if(correct){
                req.session.user = {
                    id: user.id,
                    email: user.email
                };
                res.redirect("/users");
            }else{
                alert("Senha incorreta! \nTente novamente");
                res.redirect("/login");
            }

        }else{
            alert("Usuario não encontrado! \nTente novamente");
            res.redirect("/login");

        }
    });

});

router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/login");
})

module.exports = router;