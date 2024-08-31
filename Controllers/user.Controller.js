const { userModel } = require("../Models/user.Model");



const registerUser = (req, res) => {
    const { firstName, lastName, email, password } = req.body
    const hashPassword = bcrypt.hashSync(password, 10);

    let user = new userModel({
        firstName,
        lastName,
        email,
        password: hashPassword
    })
    user.save()
        .then(data => {
            res.status(201).json({ status: "Register sucessfully", data: data })
            sendEmails(email, "Welcome to Tender Pay", welcomeTem(firstName))
            sendEmails(email, "Email verification", verifyEmailTemplate(firstName, emailVerifyToken))
        })
        .catch(err => {
            if (err) {
                res.status(400).json({ status: "Register unsucessfully!", error: err })
            }
        })
}

module.exports = {
    registerUser
}