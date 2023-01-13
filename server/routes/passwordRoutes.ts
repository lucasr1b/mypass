import express from 'express';
import { deletePasswordController, getPasswordsController, newPassword, updatePasswordController } from '../controllers/passwordController';

const router = express.Router();

router.get('/', getPasswordsController);
router.post('/new', newPassword)
router.post('/delete', deletePasswordController)
router.post('/update', updatePasswordController);

export default router;