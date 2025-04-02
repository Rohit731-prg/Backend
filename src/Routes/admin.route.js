import express from "express";
import {
    insert,
    getAdmin,
    updateAdmin
} from '../controllers/admin.controller.js';

const route = express.Router();

route.post('/insert', insert);
route.get('/get', getAdmin);
route.put('/update', updateAdmin);

export default route