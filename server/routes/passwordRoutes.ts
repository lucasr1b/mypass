import express from 'express';
import { newPassword } from '../controllers/passwordController';

const router = express.Router();

router.route('/new').post(newPassword);

export default router;