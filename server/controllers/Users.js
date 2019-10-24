const express = require('express');
const users = require('../models/Users');
const mongoose = require('mongoose');
const userController = require('./controllers/Users');
const bcrypt = require('bcrypt');


const app = express.Router();

app.get('/', (req, res) => {
    return res.send(users);
});
app.post('/', (req, res)=> {
    users.push(req.query);
    res.send(users[users.length - 1]);
})

let globalId = 2;

app.post('/signup' ,(req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if (err){
              return res.status(500).json({
                  error: err
              });
        } else{
            const user = new {
                _id: globalId++,
                email: req.body.email,
                password: hash,
                name: req.body.name,
                age: req.body.age
            }
            users.push(user);
            res.status(201).json({
                    message: "User Created!",
                    user
            });

        }
    }) 
          
});

module.exports = app;