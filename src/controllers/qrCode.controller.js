import qrCode from "../models/qrCode.model.js";

export const updateQrCode = async (req, res) => {
    const { id, code, type } = req.body;

    try {
        console.log(id);
        const findQrCode = await qrCode.find({ _id: id });
        console.log(findQrCode);
        if (!findQrCode) {
            return res.status(404).send({ status: false, message: "No qrCode found" });
        }

        if(type === 'BTC') {
            const updateQrCode = await qrCode.updateOne({ _id: id }, { $set: { BTC: code } });
        } else {
            const updateQrCode = await qrCode.updateOne({ _id: id }, { $set: { USDT: code } });
        }

        return res.status(200).send({ status: true, data: updateQrCode });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

export const getQrCode = async (req, res) => {
    try {
        const response = await qrCode.find();

        if (!response) {
            return res.status(404).send({ status: false, message: "No qrCode found" });
        }

        return res.status(200).send({ status: true, data: response });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

export const insertQrCode = async (req, res) => {
    try {
        const response = await qrCode.insertOne();

        return res.status(200).send({ status: true, data: response });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}