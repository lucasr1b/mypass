import { Request, Response } from 'express';
import Password from '../models/Password';

// @Desc Add a new password
// @Route /api/passwords/new
// @Method POST

export const newPassword = async (req: Request, res: Response) => {

  const { identifier, url, user, password } = req.body;

  const newPassword = Password.create({
    identifier,
    url,
    user,
    password,
    logo: 'abc.png',
    createdAt: Date.now(),
  });

  res.status(200).json(newPassword);

}