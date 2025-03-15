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
    address: {
        type: String,
        unique: true
    },
    coin: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

export default User