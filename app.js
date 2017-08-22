//INFORMAÇÕES ESTRUTURAIS

const app = require('./config/server');

const rotaHome = require('./app/routes/home')(app);
const formInclusaoNoticia = require('./app/routes/form_inclusao_noticias')(app);
const rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

//app.listen(3000, (req, res)=>{
app.listen(process.env.PORT, (req, res)=>{
  console.log('Server On');
});
