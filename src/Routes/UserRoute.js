import express from "express";


import {
    insertUser,
    updateCoin,
    getUser,
    getUserByID,
    login,
    updateAuthentication
    } from '../controllers/UserControllers.js';

const route = express.Router();

route.post('/insert', insertUser);
route.put('/updateCoin', updateCoin);
route.get('/get', getUser);
route.post('/getUserByID', getUserByID);
route.post('/login', login);
route.put('/updateAuthentication', updateAuthentication);

export default route;
