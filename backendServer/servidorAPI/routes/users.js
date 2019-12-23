var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')
var passport = require('passport')
const jwt = require('jsonwebtoken')
/* GET users listing. */


router.get('/', function (req, res, next) {
  Users.listar().then(dados => {
    res.jsonp(dados);
  }).catch(erro => {
    res.jsonp(erro)
  })
});

router.get('/test',passport.authenticate('jwt',{session: false}),function(req,res){
  res.status(200).jsonp({cenas: "cenas"});
})

router.post('/login', passport.authenticate('local', {session:false}),function (req, res) {
  console.log("cheguei aqui");
    jwt.sign({user: user.id},'secret', { expiresIn: '2h', algorithm: 'RS256' }, (err,token)=>{
      res.status(200).jsonp({token: token});
    })

});

router.post('/register', function (req, res, next) {
  Users.getUser(req.body.email).then(dados => {
    if (dados == null) {
      Users.addUser(req.body).then(v => {
        res.status(200).jsonp(v);
      })
        .catch(err => {

          res.jsonp(err);
        })
    }
    else {
      console.log("recebi um post " + email);
      res.status(401).jsonp({status: "Email ja existente"})
    };
  })
})


module.exports = router;


