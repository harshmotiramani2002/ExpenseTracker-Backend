import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dotenv from "dotenv";
import { urlencoded } from 'body-parser';
import { connectDB } from './config/db.js';
import userRoute from './routes/userRoute.js';
import incomeRouter from './routes/incomeRoute.js';
import expenseRouter from './routes/expenseRoute.js';
import dashboardRouter from './routes/dashboardRoute.js';

dotenv.config();

const app=express();
const port=process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// DB
connectDB();

// Routes
app.use("/api/user",userRoute);
app.use("/api/income",incomeRouter);
app.use("/api/expense",expenseRouter);
app.use("/api/dashboard",dashboardRouter);



app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})