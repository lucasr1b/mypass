import { Request, Response } from 'express';
import Password from '../models/Password';

// @Desc Add a new password
// @Route /api/passwords/new
// @Method POST

export const newPassword = async (req: Request, res: Response) => {

  const { identifier, url, details, password } = req.body;

  const newPassword = Password.create({
    identifier,
    url,
    details,
    password,
    logo: 'http://localhost:3000/icons/Google.png',
  });

  res.status(200).json(newPassword);

}