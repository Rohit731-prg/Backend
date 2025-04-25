import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    messages: {
        type: Array,
        default: []
    }
});

const message = mongoose.model("message", messageSchema);
export default message;