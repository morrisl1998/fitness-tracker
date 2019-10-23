const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const userController = require('./controllers/Users');
const exerciseController = require('./controllers/Exercise');


dotenv.config({path: './config.env'});

const app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("Exercise!")
});

app.get('/port', (req,res) => res.send ("Using port: "+port));

app.use('/static', express.static(path.join(__dirname, '../HTML')));
app.use('/users' , userController);
app.use('/exercise', exerciseController);


app.listen(port, () => console.log(`Running on http://localhost:${port}`));



