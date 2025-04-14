import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: false,
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;