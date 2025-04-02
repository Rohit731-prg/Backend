import Admin from "../models/admin.model.js";

const insert = async (req, res) => {
    const { name, email, password } = req.body;
    if (!req.file) {
        return res.status(400).send({ success: false, message: "Image file is required" });
    }
    const newImage = new Admin({
        name,
        email,
        password,
        imageUrl: `/admin/${req.file.filename}`,
      });
    try {
        const response = await newImage.save();

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