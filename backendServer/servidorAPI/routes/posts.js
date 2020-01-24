var express = require('express');
var router = express.Router();
var Posts = require('../controllers/posts')
var passport = require('passport')
const { uploadF, uploadFs } = require('./../multer/mlt')
var fs = require('fs')
var fsync = require('fs-sync')

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  Posts.listar(req.user).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
});



router.get('/:id', passport.authenticate('jwt', { session: false }),function (req, res) {
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


router.post('/addPostFiles', passport.authenticate('jwt', { session: false }), uploadF.array('files'), function (req, res) {
  Posts.getPost(req.body.id).then(post => {
    var folderpath = __dirname + '/../post/' + req.body.id
    fs.exists(folderpath, exist => {
      if (!exist) {
        fs.mkdir(folderpath, error => {
          for (i in req.files) {
            console.log("entrei " + i)
            var oldPath = __dirname + '/../post/' + req.files[i].filename
            var newPath = folderpath + '/' + req.files[i].filename
            fs.rename(oldPath, newPath, function (_error) {
              if(_error) throw _error
             })
            let f = {
              name: req.files[i].originalname,
              path: newPath
            }
            post.ficheiros.push(f);
            
          }
          post.save();
          console.log(post)
          return res.status(200).jsonp({message: "added files"})
        })
      }
    })
  }).catch(error => { return res.status(200).jsonp({message: "error"}) })
})





router.post('/addPost', passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log(req.body)
  Posts.createPost(req.body, req.user.id).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
})
module.exports = router;
