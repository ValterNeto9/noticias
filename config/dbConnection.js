const mysql = require('mysql');

const connBd =  () => {
    
    return mysql.createConnection({
      
      //verificar as dados da conexão
      //host: localhost,
      host: process.env.IP,
      user: 'valterneto9',
      password : '',
      database : 'portal_noticias' 
    });
};    

module.exports = () => {
    return connBd;
}