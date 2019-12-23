var express = require('express');
var router = express.Router();
var Posts = require('../controllers/posts')

/* GET home page. */
router.get('/', function (req, res, next) {
  Posts.listar().then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
});


router.get('/:id', function (req, res) {
  Posts.getPost(req.params.id).then(dados => res.status(200).jsonp(dados))
  .catch(error => res.status(500).jsonp(error))
})

router.post('/', function(req,res){
  let post = {
    autor: "12341234",
    classificadores: ["Gramaticas e Pri"]
  }
  Posts.createPost(post).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
})
module.exports = router;
