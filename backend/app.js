const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const app = express();

dotenv.config()

app.use(express.json())

app.get('/api/form', (req, res) => {
    res.send('haolllo')
})

app.post("/api/form", ( req, res) => {
    console.log(req.body)

})


const Port = process.env.PORT || 3000;

app.listen(Port, (req, res) => {
    console.log(`Server is now running on port ${Port}`)
})

