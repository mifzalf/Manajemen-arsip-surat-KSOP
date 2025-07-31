var express = require('express');
var router = express.Router();
const verifyToken = require(`../middleware/jwt`)
const {getMail, getMailByUser} = require(`../controller/mailController`)

router.use(verifyToken)

router.get(`/`, getMail)
router.get(`/user`, getMailByUser)

module.exports = router