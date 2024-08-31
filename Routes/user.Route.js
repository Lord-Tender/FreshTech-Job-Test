const express = require("express");
const router = express.Router();
const { registerUser, loginUser, resetPassword, changePassword } = require("../Controllers/user.Controller");

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/reset_password', resetPassword)
router.post('/change_password', changePassword)

module.exports = router;