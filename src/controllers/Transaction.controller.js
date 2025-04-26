import Transaction from "../models/Transaction.model.js";

const insert = async (req, res) => {
  const { buyer, type, amount, coin, image } = req.body;

  try {
    const transaction = await Transaction.create({
      buyer,
      type,
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
    if (!response) {
      return res.status(200).send({
        status: false,
        message: "No transaction found",
      });
    }

    return res.status(200).send({
      status: true,
      data: response,
      message: "Transaction found successfully",
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({
      status: false,
      message: "Id is required",
    });
  }
  try {
    const response = await Transaction.findOne({ _id: id });

    if (!response) {
      return res.status(404).send({
        status: false,
        message: "No transaction found",
      });
    }

    const updateTransaction = await Transaction.updateOne(
      { _id: id },
      { $set: { status: true } }
    );

    return res.status(200).send({
      status: true,
      message: "Transaction updated successfully",
      data: updateTransaction,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

const getTransactionById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      status: false,
      message: "Id is required",
    });
  }
  try {
    // let response = await Transaction.find();

    // if (response.length > 0) {
    //   response = response.filter((item) => item.buyer._id == id);

    //   return res.status(200).send({
    //     status: true,
    //     data: response,
    //   });
    // } else {
    //   return res.status(404).send({
    //     status: false,
    //     message: "No transactions found for this buyer",
    //   });
    // }

    const response = await Transaction.find({ buyer: id });

    if (!response) {
      return res.status(404).send({
        status: false,
        message: "No transactions found for this buyer",
      });
    }

    return res.status(200).send({
      status: true,
      data: response,
      message: "Transactions found successfully",
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};
const uploadImage = async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;

  if (!id || !image) {
    return res.status(400).send({
      status: false,
      message: "Id and image is required",
    });
  }

  try {
    const findTransaction = await Transaction.findOne({ _id: id });
    if (!findTransaction) {
      return res.status(200).send({
        status: false,
        message: "Transaction not found",
      });
    }

    const updateTransaction = await Transaction.updateOne(
      { _id: id },
      { $set: { image: image } }
    );
    if (!updateTransaction) {
      return res.status(500).send({
        status: false,
        message: "Transaction not updated",
      });
    }

    return res.status(200).send({
      status: true,
      data: updateTransaction,
      message: "Image updated successfully",
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

export { insert, getAllData, updateStatus, getTransactionById, uploadImage };

