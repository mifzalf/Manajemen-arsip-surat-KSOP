var express = require('express');
const Users = require('../model/Users');
var router = express.Router();
const {login} = require(`../controller/usersController`)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post(`/login`, login)

router.get(`/register`)

module.exports = router;
