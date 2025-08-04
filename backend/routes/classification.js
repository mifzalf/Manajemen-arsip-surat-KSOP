const express = require('express')
const router = express.Router()
const {
    getClassification, 
    getClassificationById, 
    storeClassification,
    updateClassification,
    deleteClassification
} = require(`../controller/classificationController`)
const {adminAuthorization} = require(`../middleware/authorization`)
const verifyToken = require(`../middleware/jwt`)

router.use(verifyToken)
router.use(adminAuthorization)

router.get(`/`, getClassification)
router.get(`/:id`, getClassificationById)
router.post('/store-class', storeClassification)
router.patch(`/update-class/:id`, updateClassification)
router.delete(`/delete-class/:id`, deleteClassification)

module.exports = router