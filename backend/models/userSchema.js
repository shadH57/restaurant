import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    typeOfUse: {
        type: String,
        enum: ['Casher', 'Chef'],
        required: true
    }
})

const User = mongoose.model('User', userSchema)

export default User