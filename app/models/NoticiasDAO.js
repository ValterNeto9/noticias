function NoticiasDAO(connection){
  this._connection = connection;  
}
    
NoticiasDAO.prototype.getNoticias = function(callback){
    const query = 'select * from noticias order by data_criacao desc';
    this._connection.query(query, callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    const query = 'select * from noticias where id_noticia =' + id_noticia.id_noticia;
    this._connection.query(query, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

NoticiasDAO.prototype.getCincoUltimasNoticias = function(callback){
    const query = 'select * from noticias order by data_criacao desc limit 5';
    this._connection.query(query, callback);
};

module.exports = () => {
    return NoticiasDAO;
};