const mongoose = require('mongoose')

userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: { type: String, unique: true },
        password: { type: String }
    }
)

module.exports = {
    userSchema: mongoose.model('user', userSchema)
}