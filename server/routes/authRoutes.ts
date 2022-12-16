import express from 'express';
import { authLoginController, registerUserController } from '../controllers/authController';
import { authenticatedUserController } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', authenticatedUserController)
router.post('/register', registerUserController);
router.post('/login', authLoginController);

export default router;