import express from 'express';
import { getPasswordsController, newPassword } from '../controllers/passwordController';

const router = express.Router();

router.get('/', getPasswordsController);
router.post('/new', newPassword)

export default router;