function NoticiasDAO(connection){
  this._connection = connection;  
}
    
NoticiasDAO.prototype.getNoticias = function(callback){
    const query = 'select * from noticias';
    this._connection.query(query, callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
    const query = 'select * from noticias where id_noticia = 1';
    this._connection.query(query, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

module.exports = () => {
    return NoticiasDAO;
};