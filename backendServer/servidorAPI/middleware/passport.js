const passport = require('passport');
const passportJWT = require("passport-jwt");
const passportFB = require("passport-facebook")
const Users = require('../controllers/users')
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcryptjs')
const fs = require('fs')
const publicKey = fs.readFileSync('./keys/publickey.key','utf-8')


const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;



passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, done) {
        console.log("este e o email: " +email + " e esta a pass: "+password)
        Users.getUser(email).then(dados => {
            var user = dados;
            if(bcrypt.compareSync(password,user.password)){
                return done(null,user)
            }
            else{
                done(null,false,{message: 'Password Errada'})
            }
        }).catch(error=>{
            console.log("errado");
            done(error);
        })
    }
));


passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: publicKey
},
    function (jwtPayload, done) {
        console.log("lista ")
        Users.getUser(jwtPayload.user.email).then(dados => {
            var user = dados;
            return done(null,user);
        })
        .catch(error=>{
            return done(error);
        })
    }
));