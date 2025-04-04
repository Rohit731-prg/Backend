import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true
    },
    dateOfBirth: {
        type: String,
    },
    country: {
        type: String,
    },
    address: {
        type: String,
    },
    coin: {
        type: Number,
        default: 0
    },
    authorized: {
        type: Boolean,
        default: false
    },
    photo: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

export default User