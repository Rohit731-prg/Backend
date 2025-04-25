import message from "../models/message.model.js";
import User from "../models/user.model.js";

export const insert = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send({ status: false, message: "Id is required" });
    }
    try {
        const isuserexist = await User.findOne({ _id: id });
        if (!isuserexist) {
            return res.status(200).send({ status: false, message: "User not found" });
        }

        const response = await message.insertOne({ sender: id });

        return res.status(200).send({ status: true, data: response });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

export const getMessagesByUser = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send({ status: false, message: "Id is required" });
    }
    
    try {
        const response = await message.find({ sender: id });

        if(!response) {
            return res.status(200).send({ status: false, message: "No messages found" });
        }

        return res.status(200).send({ status: true, data: response });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

export const uploadMessage = async (req, res) => {
    const { id } = req.params;
    const { message, owner } = req.body;

    if(!id || !message || !owner) {
        return res.status(400).send({ status: false, message: "Id and message and owner is required" });
    }

    if(owner == "user" || owner == "admin") {
        return res.status(400).send({ status: false, message: "Owner should be user or admin" });
    }

    try {
        const isuserexist = await User.findOne({ _id: id });
        if (!isuserexist) {
            return res.status(200).send({ status: false, message: "User not found" });
        }

        const response = await message.updateOne({ _id: id }, { 
            $push: {
                messages: {
                    message: message,
                    owner: owner,
                    date: new Date()
                }
         } });

        return res.status(200).send({ status: true, data: response });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}