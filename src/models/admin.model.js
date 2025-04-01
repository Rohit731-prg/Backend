import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true },
        password: { type: String, required: true },
        photo: { type: Buffer }, // Store image as buffer
        contentType: { type: String }, // Store MIME type
    },
    { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;