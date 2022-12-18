import { Request, Response } from 'express';
import Password from '../models/Password';
import { getSessionUser } from '../utils/session';
import { getPasswordsFromUser } from '../services/passwordService';

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
  } else {
    res.status(400).send('User not found.')
  }
}

// @Desc Get all passwords
// @Route /api/passwords
// @Method GET

export const getPasswordsController = async (req: Request, res: Response) => {
  const user = await getSessionUser(req, res);

  if (user) {
    const passwords = await getPasswordsFromUser(user.id);

    res.status(200).send(passwords);
  } else {
    res.status(400).send('User not found.')
  }
}