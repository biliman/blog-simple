const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/alluser', userController.getAllUser);

module.exports = router
