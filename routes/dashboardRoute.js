import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { getDashboard } from '../controllers/dashboardController.js';

const dashboardRouter=express.Router();

dashboardRouter.get('/',authMiddleware,getDashboard);

export default dashboardRouter;