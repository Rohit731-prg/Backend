import User from "../models/User.model.js";

const insertUser = async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    dateOfBirth,
    country,
    address,
    coin,
    photo,
    file
  } = req.body;
  const user = {
    name,
    email,
    password,
    phone,
    dateOfBirth,
    country,
    address,
    coin,
    photo,
    file
  };

  try {
    const response = await User.insertOne(user);
    
    res.send({
      success: true,
      data: response,
    });
  } catch (error) {
    res.send({
      success: false,
      data: error,
    });
  }
};

const updateCoin = async (req, res) => {
  const { id, coin } = req.body;

  try {
    const response = await User.updateOne(
      { _id: id },
      { $inc: { coin: coin } }
    );
    res.send({
      success: true,
      data: response,
    });
  } catch (error) {
    res.send({
      success: false,
      data: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const response = await User.find();
    res.send({
      success: true,
      data: response,
    });
  } catch (error) {
    res.send({
      success: false,
      data: error,
    });
  }
};

const getUserByID = async (req, res) => {
  const { id } = req.body;

  try {
    const response = await User.findOne({ _id: id });

    if (response) {
      res.send({
        success: true,
        data: response,
      });
    } else {
      res.send({
        success: false,
        error: error,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      error: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (user.password !== password) {
      return res.json({ success: false, message: "Invalid password" });
    }
    if (user.authorized == false) {
      return res.json({
        status: false,
        message: "Unautherised User",
      });
    }
    if (user.email == email && user.password == password) {
      return res.json({
        success: true,
        logIn: "Success",
        data: user,
      });
    }
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const updateAuthentication = async (req, res) => {
  const { id } = req.body;

  try {
    const response = await User.updateOne({ _id: id }, { authorized: true });
    res.send({
      status: true,
      data: response,
    });
  } catch (error) {
    res.send({
      status: false,
      error: error,
    });
  }
};

export {
  insertUser,
  updateCoin,
  getUser,
  getUserByID,
  login,
  updateAuthentication,
};
