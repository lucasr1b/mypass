import { NextApiRequest } from 'next';
import Password from '../models/Password';
import { ObjectId } from 'mongodb';

export const getPasswordsFromUser = async (id: string) => {
  const passwords = await Password.find({ 'user': id }).select('-__v');
  return passwords;
}

export const createNewPassword = async (req: NextApiRequest, identifier: string, url: string, details: string, password: string, logo: string) => {
  const user = req.session.user;
  const newPassword = await Password.create({
    user: user.id,
    identifier,
    url,
    details,
    password,
    logo,
  });
  return newPassword;
}

export const deletePassword = async (id: string) => {
  const deletedPassword = await Password.findOneAndDelete({ '_id': new ObjectId(id) }).select('-password');
  return { deleted: true, deletedPassword };
}