import express from 'express';
import { getCurrentUser, LoginUser, registerUser, updatePassword, updateProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';


const userRoute=express.Router();

userRoute.post("/register",registerUser);
userRoute.post("/login",LoginUser);

// Procted Routes
userRoute.get("/me",authMiddleware,getCurrentUser);
userRoute.put("/profile",authMiddleware,updateProfile);
userRoute.put("/password",authMiddleware,updatePassword);

export default userRoute;
