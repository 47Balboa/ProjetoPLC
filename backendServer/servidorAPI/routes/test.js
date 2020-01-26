var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')
const fs = require('fs')
var antlr4 = require('antlr4')
var RegistoLexer = require('../grammar/RegistoLexer').RegistoLexer
var RegistoParser = require('../grammar/RegistoParser').RegistoParser
var RegistoVisitor = require('../grammar/RegistoVisitor').RegistoVisitor

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

      
router.post('/register', upload.single('ficheiro'), function(req, res){
  var oldPath = __dirname + '/../' + req.file.path

  fs.readFile(oldPath,function(erro,dados){
      if(erro) throw erro

      var input = dados.toString();
      var chars = new antlr4.InputStream(input);
      var lexer = new RegistoLexer(chars);
      var tokens  = new antlr4.CommonTokenStream(lexer);
      var parser = new RegistoParser(tokens);
      parser.buildParseTrees = true;
      var tree = parser.registo();
      var visitor = new RegistoVisitor();
      var ret = visitor.visitChildren(tree);
      //////Buscar Variaveis
      var nrAluno = ret[1][0]
      var firstName = ret[3][2][0].substring(1,ret[3][2][0].length-1)
      var lastName = ret[3][5][0].substring(1,ret[3][5][0].length-1)
      var email = ret[6][0].substring(1,ret[6][0].length-1)
      var data = ret[3][8][0]
      var curso = ret[9][0].substring(1,ret[9][0].length-1)
      var local = ret[3][11][0].substring(1,ret[3][11][0].length-1)
      var pass = ret[14][0].substring(1,ret[14][0].length-1)

      var cads = ret[12]
      var gps = new Array;

      for(var i=0, j=0; i < cads.length; i+=2, j++){
          gps[j] = cads[i][0].substring(1,cads[i][0].length-1)
      }

      Users.getUser(email).then(ds => {
          if(ds == null){
              var obj = {
                  id : nrAluno,
                  nome : firstName,
                  apelido : lastName,
                  password : pass,
                  email : email,
                  avatar : null,
                  dataNasc : data,
                  curso : curso,
                  morada : local,
                  posts : [],
                  groups: gps,
                  sentFriendRequests: [],
                  friends : [],
                  friendsRequests : [],
                  comments : [],
                  likes : []
              }
              Users.addUser(obj)
              .then(r => {
                  res.status(200).jsonp(r);
              })
              .catch(err => {
                  res.status(500).jsonp(err);
              })
          }
      else {
          res.status(401).jsonp({ status: "Email já existente!" })
      }
  })
  console.log(obj)
  })
  res.redirect('/')
})

module.exports = router;