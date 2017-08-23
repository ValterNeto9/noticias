
module.exports = (app) =>{
  
    app.get('/noticias', (req, res)=>{
      
      const connection = app.config.dbConnection();
      
      const query = 'select * from noticias';
      
      connection.query(query, (err, result) => {
        
        if(!err){
          res.render("noticias/noticias", {noticias : result});
        }else{
          console.log(err);
        }
        
      });
  
  });
};
