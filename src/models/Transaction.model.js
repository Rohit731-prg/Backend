import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    buyer: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    transactionProof: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    coin: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;