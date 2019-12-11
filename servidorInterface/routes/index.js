var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/tutorial',function(req, res, next) {
  res.render('tutorial');
});

router.get('/home',function(req,res,next){
  res.render('header');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

module.exports = router;
