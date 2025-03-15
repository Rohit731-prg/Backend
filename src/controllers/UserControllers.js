import User from '../models/User.model.js'

const insertUser = async (req, res) => {
    const { name, email, password, phone, address, coin } = req.body;
    const user = {
        name,
        email,
        password,
        phone,
        address,
        coin
    }

    try {
        const response = await User.insertOne(user);
        res.send({
            success: true,
            data: response
        })
    } catch (error) {
        res.send({
            success: false,
            data: error
        })
    }
}

const updateCoin = async (req, res) => {
    const {id, coin} = req.body;

    try {
        const response = await User.updateOne({ _id: id }, { $inc: { coin: coin } });
        res.send({
            success: true,
            data: response
        })
    } catch (error) {
        res.send({
            success: false,
            data: error
        })
    }
}

const getUser = async (req, res) => {
    try {
        const response = await User.find();
        res.send({
            success: true,
            data: response
        })
    } catch (error) {
        res.send({
            success: false,
            data: error
        })
    }
}

const getUserByName = async (req, res) => {
    const {name} = req.body;

    try {
        const response = await User.find({ name });
        res.send({
            success: true,
            data: response
        })
    } catch (error) {
        res.send({
            success: false,
            data: error
        })
    }
}

export {
    insertUser,
    updateCoin,
    getUser,
    getUserByName
};