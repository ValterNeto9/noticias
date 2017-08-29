module.exports = (app) =>{
  app.get('/form_inclusao_noticia', (req, res)=>{
    res.render('admin/form_add_noticia');
  });
  
  app.post('/noticias/salvar',(req, res)=>{
    const noticia = req.body;
    
    req.assert('titulo','titulo é obrigatório!').notEmpty();
    req.assert('resumo','resumo é obrigatório!').notEmpty();
    req.assert('resumo','resumo deve conter entre 10 e 100 caracteres!').len(10, 100);
    req.assert('autor','autor é obrigatório!').notEmpty();
    req.assert('data_noticia','data é obrigatório!').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','noticia é obrigatório!').notEmpty();
    
    const errors = req.validationErrors();
    
    if(errors){
      res.render("admin/form_add_noticia", {validacao: errors});
      return;
    }
    
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);
    
    noticiasModel.salvarNoticia(noticia, (err, result) => {
      if(!err){
        res.redirect("/noticias");
      }else{
        console.log(err);
      }
    
    });
    
  });
};
