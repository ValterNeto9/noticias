//INFORMAÇÕES ESTRUTURAIS
const app = require('./config/server');

//app.listen(3000, (req, res)=>{
app.listen(process.env.PORT, (req, res)=>{
  console.log('Server On');
});
