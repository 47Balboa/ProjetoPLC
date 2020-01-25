var WebSocketServer = require('websocket').server;
const Users = require('../controllers/users')
const jwt = require("jsonwebtoken")
const fs = require('fs')
const publickey = fs.readFileSync('./keys/publickey.key', 'utf8')


var ws = null;
var count = 0;
var CLIENTS = [];

exports.ws = function () {
  return ws;
};

exports.initialize = function (server) {

  ws = new WebSocketServer({ httpServer: server })
  ws.on('close', function connection(wss){
   CLIENTS.splice(CLIENTS.find(o => o.socket === wss),1)
  });
  ws.on('request', function connection(wss){
    wss.accept();
    console.log("requestado")
  })
  ws.on('connect', function connection(wss) {
    wss.send("mnesagem")
    wss.on('message', function incoming(message){
      var parsed = JSON.parse(message.utf8Data)
      if(parsed.token !== undefined){
        jwt.verify(parsed.token, publickey, { algorithm: 'RS256' }, (err, data) => {
          if (!err) {
            var usersocket = {
              socket: wss,
              id: data.user.id
            }
            CLIENTS.push(usersocket)
            console.log("user added + " + data.user.id)
          }
        })
      }
      else if(parsed.id !== undefined){
        
        var aux = CLIENTS.find(o => o.id === parsed.id)
        console.log("aux" + aux)
        if(aux!==undefined){
          aux.socket.send("friend")
        }
      }
    })
  });
  
};