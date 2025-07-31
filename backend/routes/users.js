var express = require('express');
var router = express.Router();
const Users = require('../model/Users');
const {login} = require(`../controller/usersController`)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post(`/login`, login)

router.get(`/register`)

module.exports = router;
