import express from 'express';
import { authLoginController, registerUserController } from '../controllers/authController';

const router = express.Router();

router.post('/register', registerUserController);
router.post('/login', authLoginController);

export default router;