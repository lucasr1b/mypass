import { NextApiRequest, NextApiResponse } from 'next';
import { getPasswordsFromUser } from '../services/passwordService';
import Password from '../models/Password';

let validationError: string;

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
      let websiteUrl;
      !url ? websiteUrl = '' : websiteUrl = url;

      const newPassword = await Password.create({
        user: user.id,
        identifier,
        websiteUrl,
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
      validationError = 'You cannot leave required fields empty.';
      res.status(400).json({ created: false, error: validationError })
    }
  } else {
    res.status(401).json({ loggedIn: false });
  }
}
