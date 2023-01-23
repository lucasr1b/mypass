import { NextApiRequest, NextApiResponse } from 'next';
import { createNewPassword, deletePassword, getPasswordsFromUser, updatePassword } from '../services/passwordService';
import Password from '../models/Password';
import { ObjectId } from 'mongodb';
import dbConnect from '../lib/mongodb';

dbConnect();

// @Desc Get all passwords
// @Route /api/passwords
// @Method GET

export const getPasswordsController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  if (user) {
    const passwords = await getPasswordsFromUser(user.id);

    res.status(200).json(passwords);
  } else {
    res.status(401).json({ loggedIn: false });
  }
}

// @Desc Add a new password
// @Route /api/passwords/new
// @Method POST

export const newPasswordController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { identifier, url, details, password, logo } = req.body;

  const user = req.session.user;

  if (user) {
    if (identifier && details && password && logo) {
      const newPassword = await createNewPassword(req, identifier, url, details, password, logo)
      res.status(201).json(newPassword);
    } else {
      res.status(400).json({ created: false, error: 'You cannot leave required fields empty.' });
    }
  } else {
    res.status(401).json({ error: 'Not logged in.' });
  }

}

// @Desc Delete a new password
// @Route /api/passwords/delete
// @Method POST

export const deletePasswordController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  const { id } = req.body;

  if (user) {
    const deletedPassword = await deletePassword(id);
    res.status(200).json(deletedPassword);
  } else {
    res.status(401).json({ error: 'Not logged in.' });
  }
}

// @Desc Update a new password
// @Route /api/passwords/update
// @Method POST

export const updatePasswordController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  const { id, identifier, url, details, password, logo } = req.body;

  if (user) {
    if (identifier && details && password && logo) {
      const updatedPassword = await updatePassword(req, id, identifier, url, details, password, logo);
      res.status(200).json(updatedPassword);
    } else {
      res.status(400).json({ error: 'You cannot leave required fields empty.' })
    }
  } else {
    res.status(401).json({ loggedIn: false });
  }
}