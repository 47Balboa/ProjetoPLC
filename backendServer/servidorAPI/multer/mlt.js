const multer = require('multer')
const fs = require('fs')
const uuid = require('uuid/v4')

var Users = require('../controllers/users')


const Imagestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        
        const dir = './uploads/' + req.user.nome + '/avatar'
        fs.exists(dir, exist => {
            if (!exist) {
                
                return fs.mkdir(dir, error => {
                    console.log("erro " + error),
                    cb(error, dir)
                })
            }
            return cb(null, dir)
        })
    },
    filename: (req, file, cb) => {
        var path = req.user.nome + uuid() + ".png"
        console.log("path " + path);
        Users.changeAvatar(req.user.id,path).then(x => cb(null, path ))
        .catch(error => cb(null, error))
        
    }
})

const Filestorage = multer.diskStorage({
    destination: (req, file, user, cb) => {

        const dir = './uploads/'
        fs.exists(dir, exist => {
            if (!exist) {
                return fs.mkdir(dir, error => cb(error, dir))
            }
            return cb(null, dir)
        })
    },
    filename: (req, file, cb) => {
        cb(null, 'dsfgdsfg')
    }
})

const uploadImages =  multer({ storage: Imagestorage });

exports.uploadI = uploadImages;
exports.uploadF = multer({ storage: Filestorage })