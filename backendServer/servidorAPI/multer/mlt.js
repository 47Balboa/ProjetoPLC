const multer = require('multer')
const fs = require('fs')
const uuid = require('uuid/v4')
const util = require('util')

var Users = require('../controllers/users')


const Imagestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads/' + req.user.nome + '/avatar'
        fs.exists(dir, exist => {
            if (!exist) {
                return fs.mkdir(dir, error => {
                    cb(error, dir)
                })
            }
            return cb(null, dir)
        })
    },
    filename: (req, file, cb) => {
        var path = req.user.nome + uuid() + ".png"
        Users.changeAvatar(req.user.id,path).then(x => cb(null, path ))
        .catch(error => cb(null, error))
        
    }
})

const Filestorage = multer.diskStorage({
    destination: (req, file,cb) => {
        const dir = './post'
        fs.exists(dir, exist => {
            if (!exist) {
                return fs.mkdir(dir, error => cb(error, dir))
            }
            return cb(null, dir)
        })
    },
    filename: (req, file, cb) => {
        console.log("file")
        var path = req.user.nome + uuid() + ".txt"
        cb(null, path)
    }
})


const uploadImages =  multer({ storage: Imagestorage });
exports.uploadI = uploadImages;
exports.uploadF = multer({ storage: Filestorage })
