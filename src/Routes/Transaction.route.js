import express from "express";
import { insert, getAllData } from "../controllers/Transaction.controller.js";

const route = express.Router();

route.post('/insert', insert);
route.get('/get', getAllData);

export default route