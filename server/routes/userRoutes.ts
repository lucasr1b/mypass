import express from 'express';
import { getAllUsers, registerUser } from '../controllers/userController';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/register').post(registerUser);

export default router;