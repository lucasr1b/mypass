import { NextApiRequest } from 'next';
import Password from '../models/Password';
import { ObjectId } from 'mongodb';

export const getPasswordsFromUser = async (id: string) => {
  const passwords = await Password.find({ 'user': id }).select('-__v');
  return passwords;
}

export const createNewPassword = async (req: NextApiRequest, identifier: string, url: string, details: string, password: string, favicon: string) => {
  const user = req.session.user;
  const newPassword = await Password.create({
    user: user.id,
    identifier,
    url,
    details,
    password,
    favicon,
  });
  return newPassword;
}

export const deletePassword = async (id: string) => {
  const deletedPassword = await Password.findOneAndDelete({ '_id': new ObjectId(id) }).select('-password');
  return { deleted: true, deletedPassword };
}

export const updatePassword = async (id: string, identifier: string, url: string, details: string, password: string, favicon: string) => {
  const updatedPassword = await Password.findOneAndUpdate({ '_id': new ObjectId(id) },
    {
      identifier,
      url,
      details,
      password,
      favicon,
    },
    {
      returnOriginal: false,
    },
  ).select('-__v');
  return { updated: true, updatedPassword };
}