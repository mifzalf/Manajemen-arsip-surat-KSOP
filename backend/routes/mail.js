var express = require('express');
var router = express.Router();
const path = require('path')
const verifyToken = require(`../middleware/jwt`)
const { 
    getMail,
    getMailById, 
    getMailByUser, 
    storeMail,
    updateMail, 
    deleteMail 
} = require(`../controller/mailController`)

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (req.body.mail_type == "masuk") {
            cb(null, 'public/mail/incoming')
        }else{
            cb(null, 'public/mail/outcoming')
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.replace(/ /g, '+')
        const random = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
        cb(null, `${random}${name}`)
    }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx']
    const extName = path.extname(file.originalname)

    if(!allowedTypes.includes(extName)){
        cb(new Error("File yang diinputkan hanya berupa pdf dan docs saja"))
    }else {
        cb(null, true)
    }
}

const upload = multer({storage, fileFilter})

router.use(verifyToken)

router.get(`/`, getMail)
router.get(`/:id`, getMailById) 
router.get(`/user`, getMailByUser)
router.post(`/store-mail`, upload.single('file'), storeMail)
router.patch(`/update-mail/:id`, upload.single('file'), updateMail) 
router.delete(`/delete-mail/:id`, deleteMail) 

module.exports = router