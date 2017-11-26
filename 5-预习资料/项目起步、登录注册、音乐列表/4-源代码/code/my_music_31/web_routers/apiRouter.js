const express = require('express');
const userController = require('../controllers/userController.js');
const musicController = require('../controllers/musicController.js');

//数据接口
let router = express.Router();
router.get('/check-username', userController.checkUsername )
.post('/do-register', userController.doRegister)
.post('/do-login', userController.doLogin)
.post('/add-music',musicController.addMusic)

module.exports = router;