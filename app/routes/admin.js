module.exports = (app) =>{
  app.get('/form_inclusao_noticia', (req, res)=>{
    app.app.controllers.admin.form_inclusao_noticia(app, req, res);
  });
  
  app.post('/noticias/salvar',(req, res)=>{
    app.app.controllers.admin.noticias_salvar(app, req, res);
  });
};
