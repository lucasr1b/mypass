import { NextApiRequest } from 'next';
import Password from '../models/Password';

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