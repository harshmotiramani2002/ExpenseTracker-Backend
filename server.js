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

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Expense Tracker Backend is running",
  });
});

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

app.listen(port,"0.0.0.0",()=>{
    console.log(`Server Started on http://localhost:${port}`);
})