var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')
var passport = require('passport')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const privateKey = fs.readFileSync('./keys/privatekey.key', 'utf-8')
const publicKey = fs.readFileSync('./keys/publickey.key', 'utf-8')

const {uploadI, uploadF} = require('./../multer/mlt') 

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.listar().then(dados => {
    res.jsonp(dados);
  }).catch(erro => {
    res.jsonp(erro)
  })
});

router.get('/admin', function (req, res, next) {
  Users.listar().then(dados => {
    res.render('listaUsers', {alunos : dados})
  }).catch(erro => {
    res.jsonp(erro)
  })
});

router.post('/image',passport.authenticate('jwt', { session: false }),uploadI.single('image'), function(req,res){
  console.log("chegueeei  " + req.file);
  res.status(200).jsonp({neat: "neat"})
})



router.post('/login', passport.authenticate('local', { session: false }), function (req, res) {
  jwt.sign({ user: req.user }, privateKey, { expiresIn: '2h', algorithm: 'RS256' }, (err, tokengo) => {
    console.log("erro " + err);
    res.status(200).jsonp({ user: req.user, stuff: tokengo });
  })
});

router.post('/sendRequest', passport.authenticate('jwt', { session: false }), function (req, res) {
  if(Users.sendRequest(req.user.id, req.body.friend)){
    res.status(200).jsonp({message: "Friend request sent"})
  }
  else{
    res.status(500).jsonp({message: "Error in friend request"})
  }
  
  
})

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

router.delete('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {

})


module.exports = router;


