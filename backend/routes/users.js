var express = require('express');
var router = express.Router();
const {
  login, 
  getUser, 
  getUserById, 
  storeUser,
  updateUser,
  deleteUser
} = require(`../controller/usersController`)
const verifyToken = require(`../middleware/jwt`)
const {adminAuthorization, userAuthorization} = require(`../middleware/authorization`)

router.post(`/login`, login)

router.use(verifyToken)

router.get(`/`, adminAuthorization, getUser)
router.get(`/:id`, userAuthorization, getUserById)
router.post(`/store-user`, adminAuthorization, storeUser)
router.patch(`/update-user/:id`, userAuthorization, updateUser)
router.delete(`/delete-user/:id`, adminAuthorization, deleteUser)

module.exports = router;
