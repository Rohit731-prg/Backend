import express from "express";
import { getQrCode, insertQrCode, updateQrCode } from "../controllers/qrCode.controller.js";

const router = express.Router();

router.get('/get', getQrCode)
router.put('/update', updateQrCode);
router.post('/insertQrCode', insertQrCode);

export default router;