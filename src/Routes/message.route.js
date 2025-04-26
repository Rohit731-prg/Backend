import express from "express";
import { getMessagesByUser, insert, uploadMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post('/insert/:id', insert);
router.post('/getMessagesByUser/:id', getMessagesByUser);
router.put('/update/:id', uploadMessage);

export default router