import { Request, Response } from 'express';
import Password from '../models/Password';
import { getSessionUser } from '../utils/session';
import { getPasswordsFromUser } from '../services/passwordService';
import { ObjectId } from 'mongodb';

let validationError: string;

// @Desc Get all passwords
// @Route /api/passwords
// @Method GET

export const getPasswordsController = async (req: Request, res: Response) => {
  const user = await getSessionUser(req);

  if (user) {
    const passwords = await getPasswordsFromUser(user.id);

    res.status(200).send(passwords);
  } else {
    res.status(401).json({ loggedIn: false });
  }
}

// @Desc Add a new password
// @Route /api/passwords/new
// @Method POST

export const newPassword = async (req: Request, res: Response) => {
  const user = await getSessionUser(req);

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

// @Desc Delete a new password
// @Route /api/passwords/delete
// @Method POST

export const deletePasswordController = async (req: Request, res: Response) => {
  const user = await getSessionUser(req);

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

export const updatePasswordController = async (req: Request, res: Response) => {
  const user = await getSessionUser(req);

  const { id, identifier, url, details, password, logo } = req.body;

  console.log(id);

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
      validationError = 'You cannot leave required fields empty.';
      res.status(400).json({ updated: false, error: validationError })
    }
  } else {
    res.status(401).json({ loggedIn: false });
  }
}