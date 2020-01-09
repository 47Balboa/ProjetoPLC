var WebSocketServer = require('websocket').server;

var ws = null;
var count = 0;

exports.ws = function () {
  return ws;
};

exports.initialize = function (server) {

  ws = new WebSocketServer({ httpServer: server })
  ws.on('close', function connection(wss){
    console.log("cliente desconectado")
  });
  ws.on('request', function connection(wss){
    wss.accept();
    console.log("requestado")
  })
  ws.on('connect', function connection(wss) {
    console.log("cliente conectado")
    wss.on('message', function incoming(message){
      console.log(" a mensagem: " + message)
    })
  });
  
};