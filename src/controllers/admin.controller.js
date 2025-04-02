import Admin from "../models/admin.model.js";

const insert = async (req, res) => {
    const { name, email, password } = req.body;
    const data = { name, email, password };
    try {
        const response = await Admin.insertOne(data);

        if (response) {
            return res.send({ success: true, data: response });
        } else {
            return res.send({ success: false, data: response });
        }
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
}

const getAdmin = async (req, res) => {
    try {
        const response = await Admin.find();

        if (response) {
            return res.send({ success: true, data: response });
        } else {
            return res.send({ success: false, data: response });
        }
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
}

const updateAdmin = async (req, res) => {
    const { id, name, email, password } = req.body;

    try {
        const response = await Admin.updateOne(
            { _id: id },
            { $set: { name, email, password } }
        );

        if(response) {
            return res.send({ success: true, data: response });
        } else {
            return res.send({ success: false, data: response });
        }
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
}

export { insert, getAdmin, updateAdmin };