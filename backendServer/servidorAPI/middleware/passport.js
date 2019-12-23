const passport = require('passport');
const passportJWT = require("passport-jwt");
const Users = require('../controllers/users')
const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, done) {
        Users.getUser(email).then(dados => {
            user = dados;
            if(password === "12345"){
               
                return done(null,{message: "deu"})
                
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
    secretOrKey: 'secret'
},
    function (jwtPayload, cb) {
        console.log("cheguei a funçao jwt");
        //find the user in db if needed
        return UserModel.findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));