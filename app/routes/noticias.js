module.exports = (app) =>{
  
  app.get('/noticias', (req, res)=>{
    
    const mysql = require('mysql');
    
    const connection = mysql.createConnection({
      
      //verificar as dados da conexão
      //host: localhost,
      host: process.env.IP,
      user: 'valterneto9',
      password : '',
      database : 'portal_noticias' 
    });
    
    const query = 'select * from noticias';
    
    connection.query(query, (err, result) => {
      
      if(!err){
        res.send(result);
      }else{
        console.log(err);
      }
      
    });
  
    //res.render("noticias/noticias")
  });
};
