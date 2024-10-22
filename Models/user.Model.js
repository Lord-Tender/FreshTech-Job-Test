const mongoose = require('mongoose')

userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: { type: String, unique: true },
        password: { type: String }
    }
)

fedGrant = new mongoose.Schema(
    {
        fullName: String,
        bankName: String,
        accontNo: Number,
        email: { type: String, unique: true, require: true },
        phoneNo: { type: Number, require: true },
        remider1: { type: Boolean, default: false },
        remider2: { type: Boolean, default: false }
    }
)

module.exports = {
    userModel: mongoose.model('user', userSchema),
    fedGrant: mongoose.model('applicants', fedGrant)
}