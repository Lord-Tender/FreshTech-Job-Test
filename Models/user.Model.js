const mongoose = require('mongoose')

userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        dateOfBirth: { type: Date },
        emailInfo: {
            email: { type: String, unique: true },
            emailVerified: { type: Boolean, default: false },
            emailVerificationCode: { type: String, unique: true },
        },
        password: { type: String }
    }
)

module.exports = {
    userSchema: mongoose.model('user', userSchema)
}