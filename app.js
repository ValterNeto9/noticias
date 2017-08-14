const express = require('express');

const app = express();

app.set('view engione', 'ejs');

app.get('/', (req, res)=>{

  res.send('<html><h1>Portal de Noticias</h1></html>')
})
app.get('/tecnologia', (req, res)=>{

  res.send('<html><h1>Portal de Tecnologia</h1></html>')
})
app.get('/moda', (req, res)=>{

  res.send('<html><h1>Portal de Moda</h1></html>')
})
app.get('/beleza', (req, res)=>{

  res.send('<html><h1>Portal de Beleza</h1></html>')
})

app.listen(3000, (req, res)=>{
  console.log('server rodando com express');
});
