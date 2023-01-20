import { NextApiRequest, NextApiResponse } from 'next';
import { getPasswordsFromUser } from '../services/passwordService';
import Password from '../models/Password';
import { ObjectId } from 'mongodb';

// @Desc Get all passwords
// @Route /api/passwords
// @Method GET

export const getPasswordsController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await req.session.user;

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
  const user = await req.session.user;

  const { identifier, url, details, password, logo } = req.body;

  if (user) {
    if (identifier && details && password && logo) {

      const newPassword = await Password.create({
        user: user.id,
        identifier,
        url,
        details,
        password,
        logo,
      });
      res.status(200).json({
        _id: newPassword._id,
        user: user.id,
        identifier: newPassword.identifier,
        url: newPassword.url,
        details: newPassword.details,
        password: newPassword.password,
        logo: newPassword.logo,
      });
    } else {
      res.status(400).json({ created: false, error: 'You cannot leave required fields empty.' })
    }
  } else {
    res.status(401).json({ loggedIn: false });
  }
}

// @Desc Delete a new password
// @Route /api/passwords/delete
// @Method POST

export const deletePasswordController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await req.session.user;

  const { id } = req.body;

  if (user) {
    const deletedPassword = await Password.findOneAndDelete({ '_id': new ObjectId(id) }).select('-password');
    res.status(200).json({
      deleted: true,
      deletedPassword,
    });
  } else {
    res.status(401).json({ loggedIn: false });
  }
}

// @Desc Update a new password
// @Route /api/passwords/update
// @Method POST

export const updatePasswordController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await req.session.user;

  const { id, identifier, url, details, password, logo } = req.body;

  if (user) {
    if (identifier && details && password && logo) {
      let websiteUrl;
      !url ? websiteUrl = '' : websiteUrl = url;

      const updatedPassword = await Password.findOneAndUpdate({ '_id': new ObjectId(id) },
        {
          identifier,
          url,
          details,
          password,
          logo,
        },
        {
          returnOriginal: false,
        },
      ).select('-__v');
      res.status(200).json({
        updated: true,
        updatedPassword
      });
    } else {
      res.status(400).json({ updated: false, error: 'You cannot leave required fields empty.' })
    }
  } else {
    res.status(401).json({ loggedIn: false });
  }
}