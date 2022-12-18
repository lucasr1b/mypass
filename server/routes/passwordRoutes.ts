import express from 'express';
import { deletePasswordController, getPasswordsController, newPassword } from '../controllers/passwordController';
import { authenticatedUserController } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', authenticatedUserController, getPasswordsController);
router.post('/new', authenticatedUserController, newPassword)
router.post('/delete', authenticatedUserController, deletePasswordController)

export default router;