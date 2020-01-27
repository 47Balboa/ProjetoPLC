var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
var wws = require('../websockets/socket')
var Messages = require('../controllers/messages')
var antlr4 = require('antlr4')
var RegistoLexer = require('../grammar/RegistoLexer').RegistoLexer
var RegistoParser = require('../grammar/RegistoParser').RegistoParser
var RegistoVisitor = require('../grammar/RegistoVisitor').RegistoVisitor


const privateKey = fs.readFileSync('./keys/privatekey.key', 'utf-8')


const { uploadI } = require('./../multer/mlt')
const { uploadU } = require('./../multer/mlt')

/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }),function (req, res, next) {
  Users.listar().then(dados => {
    res.status(200).jsonp({data: dados,user:req.user})
  }).catch(erro => {
    res.status(500).jsonp(erro)
  })
});

router.get('/user/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  Users.getUserId(req.params.id).then(dados=>{
    res.status(200).jsonp({user: dados})
  }).catch(() => {
    res.status(500).jsonp({error: "error"})
  })
})

router.get('/user', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.status(200).jsonp({ user: req.user })
})


//ainda nao sei como enviar a imagem logo por isso faço 2 pedidos

router.get('/image', passport.authenticate('jwt', { session: false }), function (req, res) {
  var path = req.user.nome + '/' + req.user.avatar
  if (path != null || path !== undefined) {
    res.status(200).jsonp({ path: 'http://localhost:3061/static/uploads/' + path });
  }
})

router.post('/image', passport.authenticate('jwt', { session: false }), uploadI.single('image'), function (req, res) {
  res.status(200).jsonp({ neat: "neat" })
})



router.post('/login', passport.authenticate('local', { session: false }), function (req, res) {
  jwt.sign({ user: req.user }, privateKey, { expiresIn: '2h', algorithm: 'RS256' }, (err, tokengo) => {
    res.status(200).jsonp({ user: req.user, token: tokengo });
  })
});


router.post('/registerFile', uploadU.single('file'), function(req,res){
  console.log("---->" + req.path)

  fs.readFile(req.path, function(erro,dados){
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
        Users.getUserId(nrAluno).then(das => {
          if(das == null){
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
              var dir = './uploads/' + nrAluno
              fs.mkdir(dir,function(error,cena){
              });
              res.status(200).jsonp(r);
            })
            .catch(err => {
              res.status(500).jsonp(err);
            })
          }
          else {
            res.status(401).jsonp({ status: "Aluno já está inscrito!" })
          }
        })
      }
      else{
        res.status(401).jsonp({ status: "Email já existente!" })
      }
    })
  })
})


router.post('/register', function (req, res, next) {
  Users.getUser(req.body.email).then(dados => {
    if (dados === null) {
      Users.addUser(req.body).then(v => {
        var dir = './uploads/' + v.nome
        fs.mkdir(dir,function(error,cena){
        });
        
        res.status(200).jsonp(v);
      })
        .catch(err => {
          res.status(500).jsonp(err);
        })
    }
    else {
      res.status(401).jsonp({ status: "Email ja existente" })
    };
  })
})

// --------------------- Messages -------------------------

router.post('/sendMessage',passport.authenticate('jwt',{session:false}),function(req,res){
  var newMessage = {
    id: req.body.pid,
    myself: "asdf",
    content: req.body.message.content,
    timestamp: req.body.message.timestamp,
    participantId: req.user.id
  }
  Messages.addMessage(newMessage).then(dados=>{
    res.status(200).jsonp({message: "sent"})
  })
})

router.post('/getMessage',passport.authenticate('jwt',{session:false}),function(req,res){
  Messages.getMessages(req.user.id,req.body.friendid).then(userdata=>{
      res.status(200).jsonp({usr: req.user , messages: userdata})
  })
})

// --------------------- FRIEND ROUTER --------------------

router.get('/friends', passport.authenticate('jwt', { session: false }), function (req, res) {
  if (req.user.friends.length > 0) {
    getUsers(req.user).then(l => {
      res.status(200).jsonp(l)
    })
  }
  else {
    res.status(500)
  }
})

router.get('/getFriendsRequests',passport.authenticate('jwt', { session: false }), function (req, res) {
  Users.getFriendRequests(req.user.friendsRequests).then(dados => {
    res.status(200).jsonp(dados)
  }).catch(erro => {
    res.status(500).jsonp(erro)
  })
})

router.get('/friendRequests',passport.authenticate('jwt', { session: false }), function (req, res){
  if(req.user.friendsRequests.length>0){
    getUsersRequested(req.user).then(l => {
      res.status(200).jsonp(l)
    })
  }
  else {
    res.status(500)
  }
})

router.post('/sendRequest', passport.authenticate('jwt', { session: false }), function (req, res) {
  if (Users.sendRequest(req.user.id, req.body.friendid.id)) {
    res.status(200).jsonp({sentRequests: req.user.sentFriendRequests })
  }
  else {
    res.status(500).jsonp({ message: "Error in friend request" })
  }
})

router.post('/acceptRequest', passport.authenticate('jwt', { session: false }), function (req, res) {
  if (Users.acceptRequest(req.user.id, req.body.friendid.id)) {
    res.status(200).jsonp({ message: "Friend request sent" })
  }
  else {
    res.status(500).jsonp({ message: "Error in friend request" })
  }
})

// funçao auxiliar para os frienbds. temos que meter noutro ficheiro a parte
async function getUsers(user) {
  var list = [];
  for (i in user.friends) {
    await Users.getUserId(user.friends[i]).then(usr => {
      list.push(usr);
      var f = parseInt(i);
      f++;
      if (f === user.friendsRequests.length) {
      }
    })
  }
  return list
}

async function getUsersRequested(user) {
  var list = [];
  for (i in user.friendsRequests) {
    await Users.getUserId(user.friendsRequests[i]).then(usr => {
      list.push(usr);
      var f = parseInt(i);
      f++;
      if (f === user.friendsRequests.length) {
      }
    })
  }
  return list
}

router.delete('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {

})


module.exports = router;


