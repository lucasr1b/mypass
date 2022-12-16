import { Request, Response } from 'express';
import User from '../models/User';
import { createToken } from '../services/authService';

// @Desc register user
// @Route /api/users/register
// @Method POST

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password
    });

    const maxAge = 7 * 24 * 60 * 60 * 1000 // 7d
    const token = createToken(user._id.toString(), maxAge);

    res.cookie('TOKEN', token, {
      maxAge: maxAge,
    });

    res.status(201).json({
      created: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ created: false, error: err.message });
  }

}