import Password from '../models/Password';

export const getPasswordsFromUser = async (id: string) => {
  const passwords = await Password.find({}).select('-_id').select('-user').select('-createdAt').select('-updatedAt').select('-__v');
  return passwords;
}