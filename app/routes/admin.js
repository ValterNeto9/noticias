module.exports = (app) =>{
  app.get('/form_inclusao_noticia', (req, res)=>{
    res.render('admin/form_add_noticia');
  });
  
  app.post('/noticias/salvar',(req, res)=>{
    const noticia = req.body;
    
    const connection = app.config.dbConnection();
    const noticiasModel = app.app.models.noticiasModel;
    
    noticiasModel.salvarNoticia(noticia, connection, (err, result) => {
      if(!err){
        res.redirect("/noticias");
      }else{
        console.log(err);
      }
    
    });
    
  });
};
