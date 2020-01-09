var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
var wws = require('../websockets/socket')


const privateKey = fs.readFileSync('./keys/privatekey.key', 'utf-8')
const publicKey = fs.readFileSync('./keys/publickey.key', 'utf-8')

const { uploadI, uploadF } = require('./../multer/mlt')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.listar().then(dados => {
    res.jsonp(dados);
  }).catch(erro => {
    res.jsonp(erro)
  })
});


router.get('/user', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.status(200).jsonp({ user: req.user })
})


//ainda nao sei como enviar a imagem logo por isso faço 2 pedidos

router.get('/image', passport.authenticate('jwt', { session: false }), function (req, res) {
  var path = req.user.nome + '/' + req.user.avatar
  console.log("user:" + req.user + "   s: " + req.user.avatar)
  if (path != null || path !== undefined) {
    console.log("path: " + path)
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

router.post('/register', function (req, res, next) {
  Users.getUser(req.body.email).then(dados => {
    if (dados == null) {
      Users.addUser(req.body).then(v => {
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

// -------- FRIEND ROUTER -------

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
  if (Users.sendRequest(req.user.id, req.body.friend)) {
    res.status(200).jsonp({ message: "Friend request sent" })
  }
  else {
    res.status(500).jsonp({ message: "Error in friend request" })
  }
})

router.post('/acceptRequest', passport.authenticate('jwt', { session: false }), function (req, res) {
  if (Users.acceptRequest(req.user.id, req.body.friend)) {
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


