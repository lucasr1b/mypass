import express from 'express';
import { authLoginUserController, authRegisterUserController } from '../controllers/authController';
import { authenticatedUserController } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', authenticatedUserController)
router.post('/register', authRegisterUserController);
router.post('/login', authLoginUserController);

export default router;