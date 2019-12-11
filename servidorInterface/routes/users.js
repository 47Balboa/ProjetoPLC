var express = require('express');
var router = express.Router();
var axios = require('axios');
var bcrypt = require('bcryptjs');
var passport = require('passport');

/* GET users listing. */
router.get('/register', function (req, res) {
  res.render('form-register');
});

router.get('/login', function (req, res) {
  res.render('login');
})

router.get('/profile', function (req, res) {
  let user1 = {
    nome: 'Joao',
    email: 'Cabra'
  }
  res.render('profile', { user: user1 })
})

router.post('/login', passport.authenticate('local',
  {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }
))


router.post('/register', function (req, res) {
  var hash = bcrypt.hashSync(req.body.password, 6);
  axios.post('http://localhost:3061/users/register', { email: req.body.email, password: hash, nome: req.body.nome }).then(dados => {
    res.redirect('/login')
  }).catch(error => {
    res.redirect('/users/register');
  })
});

module.exports = router;
