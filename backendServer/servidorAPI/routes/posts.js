var express = require('express');
var router = express.Router();
var Posts = require('../controllers/posts')
var passport = require('passport')
var uuid = require('uuid')
const { uploadF, uploadFs } = require('./../multer/mlt')
var fs = require('fs')
var fsync = require('fs-sync')

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  Posts.listar(req.user).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
});

router.post('/giveLike/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  Posts.addLike(req.params.id, req.user.id).then(dados => res.status(200).jsonp(dados)).catch(error => res.status(500))
})

router.post('/takeLike/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  Posts.unlike(req.params.id, req.user.id).then(dados => res.status(200).jsonp(dados)).catch(error => res.status(500))
})


router.get('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  Posts.getPost(req.params.id).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
})

router.get('/user/:id',passport.authenticate('jwt',{session: false}),function(req,res){
  if(req.user.friends.includes(req.params.id) || req.user.id === req.params.id){
    req.user.groups.push('Individual')
  }
  Posts.getUserPosts(req.user.groups,req.params.id).then(dados => {
    res.status(200).jsonp(dados)
  }).catch(error => res.status(500).jsonp("error"))
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

router.get('/exportPost/:idpost',passport.authenticate('jwt', { session: false }),function(req,res){
  Posts.getPost(req.params.idpost).then(dados=>{
    var filePath = __dirname+"/../tmp/"+uuid()
    fs.writeFile(filePath,dados,function(err){
      if(!err){
        res.download(filePath)
      }
    })
  })
})

router.get('/download/:idpost/:filename', passport.authenticate('jwt', { session: false }),function(req,res){

  Posts.getPost(req.params.idpost).then(dados=>{
    console.log("i e" + dados)
    for(i in dados.ficheiros){
      if(dados.ficheiros[i].name=== req.params.filename){
        res.download(dados.ficheiros[i].path)
      }
    }
  })
})



router.get('/groupPosts/:nome', passport.authenticate('jwt', { session: false }), function (req, res) {
  Posts.getGroupPosts(req.params.nome).then(dados => res.status(200).json(dados)).catch(error => res.status(500))
})

router.post('/addPostFiles', passport.authenticate('jwt', { session: false }), uploadF.array('files'), function (req, res) {
  Posts.getPost(req.body.id).then(post => {
    var folderpath = __dirname + '/../post/' + req.body.id
    fs.exists(folderpath, exist => {
      if (!exist) {
        fs.mkdir(folderpath, error => {
          for (i in req.files) {
            var oldPath = __dirname + '/../post/' + req.files[i].filename
            var newPath = folderpath + '/' + req.files[i].filename
            fs.rename(oldPath, newPath, function (_error) {
              if (_error) throw _error
            })
            let f = {
              name: req.files[i].originalname,
              path: newPath
            }
            post.ficheiros.push(f);

          }
          post.save();
          console.log(post)
          return res.status(200).jsonp({ message: "added files" })
        })
      }
    })
  }).catch(error => { return res.status(200).jsonp({ message: "error" }) })
})





router.post('/addPost', passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log(req.body)
  Posts.createPost(req.body, req.user.id).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
})
module.exports = router;
