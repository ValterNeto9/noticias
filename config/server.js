//const msg = require('./mod_test')(); //() executa a função exportada
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

module.exports = app;
