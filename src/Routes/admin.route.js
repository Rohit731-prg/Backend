import express from "express";
import { insert, getAdmin, updateAdmin } from "../controllers/admin.controller.js";
import multer from "multer";

const route = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

route.post("/insert", upload.single("photo"), insert); // Accept photo
route.get("/get", getAdmin);
route.put("/update", updateAdmin);

export default route;