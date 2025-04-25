import express from "express";
import { getMessagesByUser, insert, uploadMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post('/insert', insert);
router.post('/getMessagesByUser', getMessagesByUser);
router.put('/update', uploadMessage);

export default router