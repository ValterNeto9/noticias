const http = require('http');

const server = http.createServer((req, res)=>{

  let categoria = req.url;

  if (categoria === '/tecnologia') {

    res.end('<html><h1>Portal de Tecnologia</h1></html>')
  } else if (categoria === '/moda') {

    res.end('<html><h1>Portal de Moda</h1></html>')
  } else if (categoria === '/beleza') {

    res.end('<html><h1>Portal de Beleza</h1></html>')
  } else {

    res.end('<html><h1>Portal de Noticias</h1></html>')
  }

});

server.listen(3000);
