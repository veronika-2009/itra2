const express = require('express');
const users = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

process.env.SECRET_KEY = 'secret';

users.get("/profile", (req, res) =>
    User.findAll().then((respone) => res.send(respone))
);
users.post("/delete/:id", function (req, res) {
    const id = req.params.id;
    User.destroy({ where: { id: id } }).then((response) => {
    return     res.send(response)
    }).catch(err => console.log(err));
});
users.post("/block/:id", function (req, res) {
    const id = req.params.id;
    User.update({ status: "BLOCK" }, { where: { id: id } }).then((response) => {
      return  res.send(response);
    })
        .catch(err => console.log(err));
});
users.post("/unblock/:id", function (req, res) {
    const id = req.params.id;
    User.update({ status: "UNBLOCK" }, { where: { id: id } }).then((response) => {
      return  res.send(response);
    })
        .catch(err => console.log(err));
});
users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        date_reg: req.body.date_reg,
        date_author: today,
        status: req.body.status
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(data => {
            if (!data) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(data => {
                            res.json({ status: data.email + 'register' })
                        })
                        .catch(err => {
                            res.send('error' + err)
                        })
                })
            } else {
                res.json({ error: 'Usee already exist' })
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(data => {
            if (data) {
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    let token = jwt.sign(data.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = users;