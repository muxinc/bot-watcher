const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');

const serve = serveStatic('dist', {'index': ['index.html', 'index.htm']});

const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res));
});

const start = port =>
  new Promise(res => {
    server.listen(port);
    console.log(`Static server started on port ${port}`);
    res();
  });

const stop = () =>
  new Promise(res => {
    server.close(() => {
      console.log('Static server stopped');
      res();
    });
  });

module.exports = { start, stop };
