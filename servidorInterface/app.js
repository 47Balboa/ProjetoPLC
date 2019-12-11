var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var uuid = require('uuid');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var LocalStrategy = require('passport-local').Strategy
var flash = require('connect-flash');
var app = express();
var axios = require('axios');
var FileStore = require('session-file-store')(session);

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var passport = require('passport');

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  var token = jwt.sign({ sub: "teste token" }, 'pri', { expiresIn: 5040, issuer: "classbin", audience: "class" })
  axios.get('http://localhost:3061/users/' + email + '?token=' + token).then(dados => {
    const user = dados.data
    if (!user) {
      return done(null, false, { message: "utilizador inexistente" })
    }
    else {
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: "password invalida" })
      }
      else return done(null, user)
    }
  }).catch(erro => {
    done(erro);
  })
}))

passport.deserializeUser((email, done) => {
  axios.get('http://localhost:3061/users/' + email).then(dados => {
    done(null, dados.data);
  })
    .catch(erro => {
      done(erro, false);
    })
})

passport.serializeUser((user, done) => {
  done(null, user.email);
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
  genid: req => {
    return uuid();
  },
  store: new FileStore(),
  secret: 'pri',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
