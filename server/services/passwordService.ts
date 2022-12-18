import Password from '../models/Password';

export const getPasswordsFromUser = async (id: string) => {
  const passwords = await Password.find({}).select('-__v');
  return passwords;
}