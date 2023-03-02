
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import dotenv from 'dotenv';
dotenv.config()

import express from 'express'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = process.env.PORT
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Yoselin Galvan',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre: 'Yoselin Galvan',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre: 'Yoselin Galvan',
        titulo: 'Curso de Node'
    })
})
/*app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
})*/

/*app.get('/generic', function (req, res) {
    res.sendFile(__dirname+'/public/generic.hbs.html');
})*/

/*app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/public/elements.hbs.html');
})*/


app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port)
