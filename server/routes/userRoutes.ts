import express from 'express';
import { getAllUsers } from '../controllers/userController';
import { authenticatedUserController } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', authenticatedUserController, getAllUsers);

export default router;