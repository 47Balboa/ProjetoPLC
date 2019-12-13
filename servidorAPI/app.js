var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var uuid = require('uuid/v4')
var session = require('session')
var Filestore = require('session-file-store');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var flash = require('connect-flash');
var app = express();

// Conexão base de dados
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://taliban:pri20192020@pri2019-oycpr.mongodb.net/test?retryWrites=true&w=majority', {dbName:"pri2019", useUnifiedTopology: true, useNewUrlParser: true})
        .then(() => console.log("--> MongoAtlasDB connected\n"))
        .catch((error) => console.log("--> MongoAtlasDB connection refused\n" + error))


// Routes
var usersRouter = require('./routes/users');


// Autenticação com JWT
var passport = require('passport')
var JWTStrategy = require('passport-jwt').Strategy
var ExtractJWT = require('passport-jwt').ExtractJwt

var extractFromSession = function(req){
  var token = null
  if(req && req.session) token = req.session.token
  return token
}

var extractFromQS = function(req){
  var token = null
  console.log("este e o token: " + req.query.token)
  token = req.query.token
  return token
}

var extractFromBody = function(req){
  var token = null
  token = req.body.token
  
  return token
}

passport.use(new JWTStrategy({
  secretOrKey: 'pri',
  jwtFromRequest: ExtractJWT.fromExtractors([extractFromSession, extractFromQS, extractFromBody])
}, async (token, done) => {
  try{
    console.log(" OLAAAAAAA")
    return done(null, token)
  }
  catch(error){
    console.log(error + " <<<<<<<<<<------")
    return done(error)
  }
}))



app.use(passport.initialize())
app.use(passport.session())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
