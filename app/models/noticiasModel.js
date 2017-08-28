module.exports = () => {
    
    this.getNoticias = (connection, callback) => {
        const query = 'select * from noticias';
        
        connection.query(query, callback);
    };
    
    this.getNoticia = (connection, callback) => {
        const query = 'select * from noticias where id_noticia = 1';
        
        connection.query(query, callback);
    };
    
    this.salvarNoticia = (noticia, connection, callback) =>{
        connection.query('insert into noticias set ? ', noticia, callback);
    };
    
    return this;
};