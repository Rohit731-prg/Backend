import express from "express";
import { insert, getAllData, updateStatus, getTransactionById } from "../controllers/Transaction.controller.js";

const route = express.Router();

route.post('/insert', insert);
route.get('/get', getAllData);
route.post('/getById/:id', getTransactionById);
route.put('/updateStatus', updateStatus);

export default route