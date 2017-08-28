
module.exports = (app) =>{
  
    app.get('/noticias', (req, res)=>{
      
      const connection = app.config.dbConnection();
      
      const noticiasModel = app.app.models.noticiasModel;
      
      noticiasModel.getNoticias(connection, (err, result) => {
        
        if(!err){
          res.render("noticias/noticias", {noticias : result});
        }else{
          console.log(err);
        }
        
      });
  
  });
};
