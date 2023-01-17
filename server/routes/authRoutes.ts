import express from 'express';
import { authenticatedUserController, authGoogleLoginController, authGoogleRegisterUserController, authLoginUserController, authRegisterUserController } from '../controllers/authController';
const router = express.Router();

router.get('/', authenticatedUserController)
router.post('/register', authRegisterUserController);
router.post('/login', authLoginUserController);
router.post('/register/google', authGoogleRegisterUserController);
router.post('/login/google', authGoogleLoginController);

export default router;