import Transaction from "../models/Transaction.model.js";

const insert = async (req, res) => {
  const { buyer, type, transactionProof, amount, coin, image } = req.body;

  try {
    const transaction = await Transaction.create({
      buyer,
      type,
      transactionProof,
      amount,
      coin,
      image,
    });

    return res.status(201).send({
      status: true,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

const getAllData = async (req, res) => {
  try {
    const response = await Transaction.find().populate("buyer");

    if (response && response.length > 0) {
      return res.status(200).send({
        status: true,
        data: response,
      });
    } else {
      return res.status(404).send({
        status: false,
        message: "No transactions found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.body;

  try {
    const response = await Transaction.findByIdAndUpdate(
      id,
      { status: true },
      { new: true }
    );

    if (response) {
      return res.status(200).send({
        status: true,
        data: response,
      });
    } else {
      return res.status(404).send({
        status: false,
        message: "Transaction not found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

const getTransactionById = async (req, res) => {
  const { id } = req.params;

  try {
    let response = await Transaction.find();

    if (response.length > 0) {
      response = response.filter((item) => item.buyer._id == id);

      return res.status(200).send({
        status: true,
        data: response,
      });
    } else {
      return res.status(404).send({
        status: false,
        message: "No transactions found for this buyer",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};


export { insert, getAllData, updateStatus, getTransactionById };
