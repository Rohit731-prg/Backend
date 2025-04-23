import mongoose, {Schema} from "mongoose";

const qrCodeSchma = new Schema({
    BTC: {
        type: String,
        default: 'demo',
    },
    USDT: {
        type: String,
        default: 'demo',
    }
}, {
    timestamps: true
});

const qrCode = mongoose.model("qrCode", qrCodeSchma);
export default qrCode;