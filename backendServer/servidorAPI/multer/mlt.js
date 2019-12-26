const multer = require('multer')
const fs = require('fs')
const Imagestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        console.log("user " + req.user)
        const dir = './uploads/' + req.user.nome
        fs.exists(dir, exist => {
            if (!exist) {
                return fs.mkdir(dir, error => cb(error, dir))
            }
            return cb(null, dir)
        })
    },
    filename: (req, file, cb) => {
        cb(null, req.user.nome + "foto" + ".png" )
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