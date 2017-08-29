module.exports = (app) =>{
  
    app.get('/noticia', (req, res)=>{
      
      const connection = app.config.dbConnection();
      
      const noticiasModel = new app.app.models.NoticiasDAO(connection);
      
      noticiasModel.getNoticia((err, result) => {
        
        if(!err){
          res.render("noticias/noticia", {noticia : result});
        }else{
          console.log(err);
        }
        
      });
  
  });
};