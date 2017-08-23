const mysql = require('mysql');

const connBd =  () => {
    
    console.log('Conexão como o BD foi estabelecida.');
    
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
    console.log('O autoload carregou o módulo de conexão com o BD');
    return connBd;
}