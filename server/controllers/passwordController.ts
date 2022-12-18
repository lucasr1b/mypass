import { Request, Response } from 'express';
import Password from '../models/Password';
import { getSessionUser } from '../utils/session';

// @Desc Add a new password
// @Route /api/passwords/new
// @Method POST

export const newPassword = async (req: Request, res: Response) => {

  const user = await getSessionUser(req, res);

  const { identifier, url, details, password } = req.body;

  if (user) {
    const newPassword = Password.create({
      user: user.id,
      identifier,
      url,
      details,
      password,
      logo: 'http://localhost:3000/icons/Google.png',
    });
    res.status(200).json(newPassword);
  }

  res.status(400);



}