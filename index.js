var server = require('cre-nodejs-server');

server.start({
  pageHeader: 'Lib/Client/html/commonHeader.html',
  rootDirectory: require('path').resolve(__dirname), 
  routes: [{ route: "/", handler: server.clientFileHandler('/Flipper/Client/html/flipper.html') }]
});