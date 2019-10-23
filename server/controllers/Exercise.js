const express = require('express');
const users = require("../models/Users");
const app = express.Router();

const exercise={
    miles: [],
    minutes: [],
    friends: []
}

app.post('/join', (req,res) => {
    const userId = req.query.userId
    excersise.users.push(users[usersId]);
    res.send(users[userId]);
});

module.exports = app;