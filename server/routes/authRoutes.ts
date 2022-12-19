import express from 'express';
import { authenticatedUserController, authLoginUserController, authRegisterUserController } from '../controllers/authController';
const router = express.Router();

router.get('/', authenticatedUserController)
router.post('/register', authRegisterUserController);
router.post('/login', authLoginUserController);

export default router;