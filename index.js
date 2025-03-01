const express = require('express')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const body = require("body-parser")
let myLibrary = require('./biasini.js')





let app = express()
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs")
app.use(body.urlencoded({ extended: true }))
app.set("views", path.join(__dirname, "views"))

app.get('/form', (req, res) => {
  res.render('form')
});




app.get('/', function(req, res) {
  data = JSON.parse(fs.readFileSync('./data/person.json', 'utf8', function(err) {
    if (err) {
      console.log(err)
    }
  }))

  res.render('home', { data: data })
});

app.post('/scrivi', function(req, res) {

  data = JSON.parse(fs.readFileSync('./data/person.json', 'utf8', function(err) {
    if (err) {
      console.log(err)
    }
  }))

  let postit = {
    nome: req.body.nome,
    titolo: req.body.titolo,
    commento: req.body.commento
  }

  myLibrary.addElementToJSON(data, postit)

  myLibrary.writeFileJSON('./data/person.json', data)

  res.redirect('/');
});



app.listen(8080)