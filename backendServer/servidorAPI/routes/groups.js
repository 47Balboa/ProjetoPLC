var express = require('express');
var router = express.Router();
var passport = require('passport')
var uuid = require('uuid')
var Groups = require('../controllers/groups')


router.get('/getRequest', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  Groups.getRequests(req.user).then(dados => res.status(200).jsonp(dados))
    .catch(error => res.status(500).jsonp(error))
});

router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    Groups.getAllGroups(req.user).then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  });
  
  router.get('/:id', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    Groups.getGroup(req.params.id).then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  });
  router.post('/sendRequest', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    Groups.receiveRequests(req.user.id,req.body.groupid).then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  });

 

  router.post('/createGroup', passport.authenticate('jwt', { session: false }), function (req, res, next) {
      console.log(req.body)
    Groups.createGroup(req.user,req.body).then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  });

  router.post('/acceptRequest', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    console.log(req.body.memberid)
    Groups.acceptRequest(req.user.id,req.body.memberid,req.body.groupid).then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  });

  router.post('/publicRequest', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    Groups.publicAcceptRequest(req.user.id,req.body.groupid).then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  });

  router.post('/removeMember', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    Groups.removeMember(req.user.id,req.body.memberid,req.body.groupid).then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  });
  

  module.exports = router