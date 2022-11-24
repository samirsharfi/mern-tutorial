const express = require('express');
const { registerUser, login, getMe } = require('../controllers/userController');
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')


router.post('/', registerUser)
router.post('/login', login)
router.get('/me', protect, getMe)

module.exports = router