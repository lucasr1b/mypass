import { Request, Response } from 'express';
import Password from '../models/Password';
import { getSessionUser } from '../utils/session';
import { getPasswordsFromUser } from '../services/passwordService';
import { ObjectId } from 'mongodb';

// @Desc Add a new password
// @Route /api/passwords/new
// @Method POST

export const newPassword = async (req: Request, res: Response) => {
  const user = await getSessionUser(req, res);

  const { identifier, url, details, password } = req.body;

  if (user) {
    const newPassword = await Password.create({
      user: user.id,
      identifier,
      url,
      details,
      password,
      logo: 'http://localhost:3000/icons/Google.png',
    });
    res.status(200).json({
      identifier: newPassword.identifier,
      url: newPassword.url,
      details: newPassword.details,
      password: newPassword.password,
      logo: newPassword.logo,
    });
  } else {
    res.status(400).send('User not found.')
  }
}

// @Desc Delete a new password
// @Route /api/passwords/delete
// @Method POST

export const deletePasswordController = async (req: Request, res: Response) => {
  const user = await getSessionUser(req, res);

  const { id } = req.body;

  if (user) {
    const deletedPassword = await Password.findOneAndDelete({ '_id': new ObjectId(id) }).select('-password');
    res.status(200).json({
      deleted: true,
      deletedPassword,
    });
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