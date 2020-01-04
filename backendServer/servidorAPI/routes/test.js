var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')
var antlr4 = require('antlr4')
var RegistoLexer = require('../grammar/RegistoLexer').RegistoLexer
var RegistoParser = require('../grammar/RegistoParser').RegistoParser

//input em formato de string, depois mudar para ficheiro
var input = "[81712] Nome: \"Filipa\" Apelido: \"Pereira\" DataNascimento: 12-10-1998 Morada: \"Cabeceiras de Basto\" Email: \"a81712@alunos.uminho.pt\" Curso: \"Engenharia Informática\" Password: \"coisas\""
//var input2 = new antlr4.FileStream(__dirname + '/../public/registos/reg1.txt') 
var chars = new antlr4.InputStream(input);
var lexer = new RegistoLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new RegistoParser(tokens);
parser.buildParseTrees = true;
var tree = parser.registo();


class Visitor {
    visitChildren(ctx) {

       if (!ctx) {
        return;
      }
      
       if (ctx.children) {
        return ctx.children.map(child => {
              if (child.children && child.children.length != 0) {
                return child.accept(this);
              } else {
                return child.getText();
              }
            });
          }
   }
}
      
router.get('/', function (req, res) {
    var v = new Visitor()
    var ret = v.visitChildren(tree)
    var nrAluno = ret[1][0]
    var firstName = ret[3][2][0]
    var lastName = ret[3][5][0]
    var email = ret[6][0]
    var data = ret[3][8][0]
    var curso = ret[9][0]
    var local = ret[3][11][0]
    var pass = ret[11][0]
    firstName = firstName.substring(1,firstName.length-1)
    lastName = lastName.substring(1,lastName.length-1)
    email = email.substring(1,email.length-1)
    curso = curso.substring(1,curso.length-1)
    local = local.substring(1,local.length-1)
    pass = pass.substring(1,pass.length-1)

    Users.getUser(email).then(dados => {
        if(dados == null) {
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
                friends : [],
                friendsRequests : [],
                comments : []
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
  });

module.exports = router;