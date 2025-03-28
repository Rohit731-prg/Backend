import Transaction from "../models/Transaction.model.js";

const insert = async (req, res) => {
  const { buyer, transactionID, transactionProof, amout, coin } = req.body;

  const transaction = {
    buyer,
    transactionID,
    transactionProof,
    amout,
    coin,
  };

  try {
    const response = await Transaction.insertOne(transaction);

    if (response) {
      return res.send({
        status: true,
        data: response,
      });
    } else {
      return res.send({
        status: false,
        data: response,
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      error: error,
    });
  }
};

const getAllData = async (req, res) => {
  try {
    const response = await Transaction.find({ status: false });

    if (response) {
      return res.send({
        status: true,
        data: response,
      });
    } else {
      return res.send({
        status: false,
        data: "response not found",
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      error: error,
    });
  }
};

export { insert, getAllData };
