module.exports.noticias = (app, req, res) =>{

    const connection = app.config.dbConnection();
    
    const noticiasModel = new app.app.models.NoticiasDAO(connection);
    
    noticiasModel.getNoticias((err, result) => {
    
        if(!err){
            res.render("noticias/noticias", {noticias : result});
        }else{
            console.log(err);
        }
    
    });
};

module.exports.noticia = (app, req, res) =>{
    
    const connection = app.config.dbConnection();
    
    const noticiasModel = new app.app.models.NoticiasDAO(connection);
    
    const id_noticia = req.query;
    noticiasModel.getNoticia(id_noticia, (err, result) => {
    
        if(!err){
          res.render("noticias/noticia", {noticia : result});
        }else{
          console.log(err);
        }
    
    });
};