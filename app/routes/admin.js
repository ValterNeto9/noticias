module.exports = (app) =>{
  app.get('/form_inclusao_noticia', (req, res)=>{
    res.render('admin/form_add_noticia', { validacao : {}, noticia : {} });
  });
  
  app.post('/noticias/salvar',(req, res)=>{
    const noticia = req.body;
    
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();
    
    var erros = req.validationErrors();
    
    if(erros){
        res.render('admin/form_add_noticia', {validacao: erros, noticia: noticia});
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
