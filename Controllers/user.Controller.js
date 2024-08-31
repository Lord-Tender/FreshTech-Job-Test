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

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        let user = await userModel.findOne({ 'email': email })
        if (user) {
            const comparedPassword = bcrypt.compareSync(password, user.password)
            if (comparedPassword) {
                const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1d" });
                res.status(200).json({
                    Message: "User found",
                    token: token,
                    user: user
                })
            } else {
                res.status(400).json({ Message: "Invalid detail" })
            }
        } else {
            res.status(400).json({ Message: "Invalid detail" })
        }
    }
    catch (err) {
    }
}



const changePassword = (req, res) => {
    const { email, oldPassword, newPassword } = req.body
    userModel.findOne({ 'email': email })
        .then((user) => {
            const comparedPassword = bcrypt.compareSync(oldPassword, user.password)
            const comparedNewPassword = bcrypt.compareSync(newPassword, user.password)
            if (comparedNewPassword) {
                res.status(400).json({ mgs: "New password cannot be same as old password", status: false })
            } else if (comparedPassword) {
                const hashPassword = bcrypt.hashSync(newPassword, 10)
                user.password = hashPassword
                user.save()
                    .then((newUser) => {
                        res.status(200).json({ mgs: "Changed successfully", status: true })
                    })
                    .catch((error) => {
                    })
            } else {
                res.status(400).json({ mgs: "Incorrect password", status: false })
            }
        })
        .catch((err) => {
            res.status(400).json({ mgs: "can not find user", status: false })
        })

}

module.exports = {
    registerUser,
    loginUser
}