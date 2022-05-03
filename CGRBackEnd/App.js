import express from 'express';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import nodemailer from 'nodemailer';

const app = express();

app.engine('handlebars', exphbs());
app.set('view engines', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.get('/', (req, res) => {
    res.send('Hello from this side')
})

const port = 3000;

app.listen(port, (req, res) => {
    console.log('Server has Started')
})

