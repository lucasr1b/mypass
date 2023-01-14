import express from 'express';
import { authenticatedUserController, authGoogleLoginController, authLoginUserController, authRegisterUserController } from '../controllers/authController';
const router = express.Router();

router.get('/', authenticatedUserController)
router.post('/register', authRegisterUserController);
router.post('/login', authLoginUserController);
router.post('/google', authGoogleLoginController);

export default router;