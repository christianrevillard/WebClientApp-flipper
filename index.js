var server = require('cre-nodejs-server');

var handlers = [];

handlers = server.addDefaultHandlers(  
  handlers,                     // only defaults
  '/Flipper/Client/html/flipper.html' // Start page
);

server.server.start(
  require('path').resolve(__dirname), // root 
  handlers);