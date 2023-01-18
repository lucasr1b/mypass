import { NextApiRequest } from 'next';
import User from '../models/User';
import { createSession } from '../utils/helpers';

export const validateUserCreationFields = (name: string, email: string, password: string, cpassword: string) => {
  if (name && email && password && cpassword) {
    // if (validator.validate(email)) { // Validate email and check if it exists
    if (password.length >= 8) {
      if (password === cpassword) {
        return true;
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
}

export const createUserAndSession = async (req: NextApiRequest, name: string, email: string, password: string) => {
  const user = await User.create({
    type: 'email',
    name,
    email,
    password
  });
  await createSession(req, user._id, user.name, user.email);
  return user;
}

export const createUserWithGoogleAndSession = async (req: NextApiRequest, name: string, email: string) => {
  const user = await User.create({
    type: 'google',
    name,
    email,
  });
  await createSession(req, user._id, user.name, user.email);
  return user;
}

export const validateUserCrendetialFieldsAndCreateSession = async (req: NextApiRequest, email: string, password: string) => {
  if (email && password) {
    const user = await User.findOne({ email });

    if (user) {
      if (user.type === 'email') {
        if (await user.comparePassword(password)) {
          await createSession(req, user._id, user.name, user.email);
          return true;
        } else {
          return 'Email or password is incorrect.';
        }
      } else {
        return 'The account associated with that email was made with Google, login with Google.';
      }
    } else {
      return 'Email or password is incorrect.';
    }
  } else {
    return 'All fields are required.';
  }
}
