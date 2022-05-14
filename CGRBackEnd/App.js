const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const app = express();

dotenv.config()



app.post('/form', (req, res) => {
    res.send('Hello from this side')
})


const Port = process.env.PORT || 3000;

app.listen(Port, (req, res) => {
    console.log(`Server is now running on port ${Port}`)
})

