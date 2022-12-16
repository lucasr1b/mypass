import express from 'express';
import { authLoginController, registerUserController } from '../controllers/authController';

const router = express.Router();

router.route('/register').post(registerUserController);
router.route('/login').post(authLoginController);

export default router;