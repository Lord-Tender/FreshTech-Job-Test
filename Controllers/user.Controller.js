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

module.exports = {
    registerUser,
    loginUser
}