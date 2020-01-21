var express = require('express');
var router = express.Router();
var Posts = require('../controllers/posts')
var passport = require('passport')
const { uploadF,uploadFs } = require('./../multer/mlt')
var fs = require('fs')

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  Posts.listar().then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
});


router.get('/:id', function (req, res) {
  Posts.getPost(req.params.id).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
})
router.post('/addPostFile', passport.authenticate('jwt', { session: false }), uploadF.single('file'), function (req, res) {
  var oldPath = __dirname + '/../post/' + req.file.filename
  var folderpath = __dirname + '/../post/' + req.body.id
  fs.exists(folderpath, exist => {
    if (!exist) {
      fs.mkdir(folderpath, error => console.log(error))
      var newPath = folderpath + '/' + req.file.filename
      fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
      })
      res.status(200)
    }
  })

})

router.post('/addPostFiles', passport.authenticate('jwt', { session: false }),uploadF.array('files'), function (req, res) {
  console.log("req.files " +req.files)
  res.status(200)
})

router.post('/addPost', passport.authenticate('jwt', { session: false }), function (req, res) {
  Posts.createPost(req.body).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
})
module.exports = router;
