import express from 'express';
import { registerUserController } from '../controllers/authController';

const router = express.Router();

router.route('/register').post(registerUserController);

export default router;