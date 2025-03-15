import express from "express";

import {
    insertUser,
    updateCoin,
    getUser,
    getUserByName
    } from '../controllers/UserControllers.js';

const route = express.Router();

route.post('/insert', insertUser);
route.put('/updateCoin', updateCoin);
route.get('/get', getUser);
route.post('/getByName', getUserByName);

export default route;