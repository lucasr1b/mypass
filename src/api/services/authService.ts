import { NextApiRequest } from 'next';
import User from '../models/User';
import { createSession, validateEmail } from '../utils/helpers';

export const validateUserCreationFields = async (name: string, email: string, password: string, cpassword: string) => {
  if (name && email && password && cpassword) {
    const doesAccountExist = await User.findOne({ email });
    if (validateEmail(email)) {
      if (!doesAccountExist) {
        if (password.length >= 8) {
          if (password === cpassword) {
            return true;
          } else {
            return 'Passwords do not match.';
          }
        } else {
          return 'Passwords must be at least 8 characters long.';
        }
      } else {
        return 'An account with that email already exists.';
      }
    } else {
      return 'That email address is not valid.';
    }
  } else {
    return 'All fields are required.';
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

export const validateRegisterWithGoogleAndCreateSession = async (req: NextApiRequest, name: string, email: string) => {
  if (name && email) {
    const doesAccountExist = await User.findOne({ email });
    if (!doesAccountExist) {
      const user = await User.create({
        type: 'google',
        name,
        email,
      });
      await createSession(req, user._id, user.name, user.email);
      return user;
    } else {
      return 'An account with that email already exists.';
    }
  } else {
    return 'Something went wrong, try again.'
  }
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

export const validateLoginWithGoogleAndCreateSession = async (req: NextApiRequest, email: string) => {
  const user = await User.findOne({ email });

  if (user) {
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    req.session.save();

    return user;
  } else {
    return 'That account doesn\'t exist.';
  }
}