var express = require('express');
var router = express.Router();
var Users = require('../controllers/users')
var passport = require('passport')
/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.listar().then(dados => {
    res.jsonp(dados);
  }).catch(erro => {
    res.jsonp(erro)
  })
});


router.get('/:email', passport.authenticate('jwt'),function (req, res) {
  console.log("so par confirmar: " + req.body.email)
 

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


