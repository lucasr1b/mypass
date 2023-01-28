import { NextApiRequest, NextApiResponse } from 'next';
import { createNewPassword, deletePassword, getPasswordsFromUser, updatePassword } from '../services/passwordService';
import connectToDB from '../lib/mongodb';

connectToDB();

// @Desc Get all passwords
// @Route /api/passwords
// @Method GET

export const getPasswordsController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  if (user) {
    const passwords = await getPasswordsFromUser(user.id);
    res.status(200).json({ message: 'Fetched passwords', passwords });
  } else {
    res.status(401).json({ message: 'Failed to fetch passwords', error: 'User not logged in.' });
  }
}

// @Desc Add a new password
// @Route /api/passwords/new
// @Method POST

export const newPasswordController = async (req: NextApiRequest, res: NextApiResponse) => {
  const { identifier, url, details, password, favicon } = req.body;

  const user = req.session.user;

  if (user) {
    if (identifier && details && password && favicon) {
      const newPassword = await createNewPassword(req, identifier, url, details, password, favicon)
      res.status(201).json({ message: 'Created new password', newPassword });
    } else {
      res.status(400).json({ message: 'Password not created', error: 'You cannot leave required fields empty.' });
    }
  } else {
    res.status(401).json({ message: 'Failed to create new password', error: 'User not logged in.' });
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
    res.status(200).json({ message: 'Deleted password', deletedPassword });
  } else {
    res.status(401).json({ message: 'Failed to delete password', error: 'User not logged in.' });
  }
}

// @Desc Update a new password
// @Route /api/passwords/update
// @Method POST

export const updatePasswordController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  const { id, identifier, url, details, password, favicon } = req.body;

  if (user) {
    if (identifier && details && password && favicon) {
      const updatedPassword = await updatePassword(id, identifier, url, details, password, favicon);
      res.status(200).json(updatedPassword);
    } else {
      res.status(400).json({ error: 'You cannot leave required fields empty.' })
    }
  } else {
    res.status(401).json({ message: 'Failed to update password', error: 'User not logged in.' });
  }
}