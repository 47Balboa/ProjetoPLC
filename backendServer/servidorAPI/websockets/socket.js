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
   
  });
  ws.on('request', function connection(wss){
    wss.accept();
    console.log("requestado")
  })
  ws.on('connect', function connection(wss) {
   
  });
  
};