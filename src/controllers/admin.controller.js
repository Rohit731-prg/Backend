import Admin from "../models/admin.model.js";

const insert = async (req, res) => {
    const { name, email, password } = req.body;
    const photo = req.file ? req.file.buffer : null; // Get image buffer
    const contentType = req.file ? req.file.mimetype : null; // Get image type

    try {
        const admin = new Admin({
            name,
            email,
            password,
            photo,
            contentType,
        });

        const response = await admin.save();
        return res.send({ success: true, data: response });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
};

const getAdmin = async (req, res) => {
    try {
        const admins = await Admin.find();

        const formattedAdmins = admins.map((admin) => ({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            password: admin.password,
            photo: admin.photo
                ? `data:${admin.contentType};base64,${admin.photo.toString("base64")}`
                : null,
        }));

        return res.send({ success: true, data: formattedAdmins });
    } catch (error) {
        return res.send({ success: false, message: error.message });
    }
};

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