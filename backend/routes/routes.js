var express = require('express');

var userController = require('../src/recycleController');
const router = express.router();

router.route('./login').post(userController.loginUserControllerFn);
router.route('./signup').post(userController.signUpUserControllerFn);

module.exports = router;