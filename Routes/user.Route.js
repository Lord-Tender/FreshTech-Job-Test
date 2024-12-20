const express = require("express");
const router = express.Router();
const { registerUser, loginUser, pageAuth, resetPassword, changePassword, saveViralData, sendCompletionEmail, test } = require("../Controllers/user.Controller");

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/page_auth", pageAuth)
router.post("/reset_password", resetPassword)
router.post("/change_password", changePassword)
router.get("/test", test)


router.post("/viral", saveViralData)
router.post("/viral/completed", sendCompletionEmail)

module.exports = router;