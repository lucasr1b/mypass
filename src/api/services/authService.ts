import { NextApiRequest } from 'next';
import User from '../models/User';

export const validateUserCreationFields = (name: string, email: string, password: string, cpassword: string) => {
  if (name && email && password && cpassword) {
    // if (validator.validate(email)) { // Validate email and check if it exists
    if (password.length >= 8) {
      if (password === cpassword) {
      } else {
        return 'Passwords do not match';
      }
    } else {
      return 'Passwords must be at least 8 characters long';
    }
    // } else {
    //   res.status(400).json({ created: false, error: 'Email is already taken or invalid' });
    // }
  } else {
    return 'All fields are required';
  }
  return true;
}

export const createUserAndSession = async (req: NextApiRequest, name: string, email: string, password: string) => {
  const user = await User.create({
    type: 'email',
    name,
    email,
    password
  });
  req.session.user = {
    id: user._id,
    name: user.name,
    email: user.email,
  };
  await req.session.save();
  return user;
}
