const express = require('express')
const router = express.Router()

const { getAllData } = require('../controllers/UserController')

// UserController
router.get('/users', getAllData)

module.exports = router
