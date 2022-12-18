import express from 'express';
import { deletePasswordController, getPasswordsController, newPassword } from '../controllers/passwordController';

const router = express.Router();

router.get('/', getPasswordsController);
router.post('/new', newPassword)
router.post('/delete', deletePasswordController)

export default router;