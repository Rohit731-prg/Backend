import express from "express";
import mongoose from "mongoose";
import CoinRouter from './src/Routes/CoinRoute.js'
import UserRouter from './src/Routes/UserRoute.js'
import TransactionRouter from './src/Routes/Transaction.route.js'
import AdminRouter from './src/Routes/admin.route.js'
import qrCodeRouter from './src/Routes/qrCode.route.js'
import MessageRouter from './src/Routes/message.route.js'
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/coins', CoinRouter);
app.use('/user', UserRouter);
app.use('/transactions', TransactionRouter);
app.use('/admin', AdminRouter);
app.use('/qrCode', qrCodeRouter);
app.use('/message', MessageRouter);

mongoose.connect(process.env.saikat).then(() => {
    console.log('DB Connected')
    app.listen(process.env.port, () => {
        console.log(`Server running on port ${process.env.port}`)
    })
}).catch((err) => {
    console.log(err)
})