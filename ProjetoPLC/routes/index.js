var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pri2019 _ 2020' });
});

router.get('/tutorial',function(req, res, next) {
  res.render('tutorial');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

module.exports = router;
