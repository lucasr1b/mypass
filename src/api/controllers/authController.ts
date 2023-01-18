import { NextApiRequest, NextApiResponse } from 'next';
import User from '../models/User';
import dbConnect from '../lib/mongodb';
import { createUserAndSession, validateUserCreationFields } from '../services/authService';

dbConnect();

// @Desc Register user
// @Route /api/auth/register
// @Method POST

export const authRegisterUserController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password, cpassword } = req.body;

    const userCreationFieldsValidation = validateUserCreationFields(name, email, password, cpassword);

    if (userCreationFieldsValidation === true) {
      const user = await createUserAndSession(req, name, email, password);

      res.status(201).json({
        created: true,
        user
      });
    } else {
      res.status(400).json({ created: false, error: userCreationFieldsValidation });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ created: false, error: (err.message.includes('duplicate key error') ? 'All fields are required' : err.message) });
  }
}

// @Desc Login user
// @Route /api/auth/login
// @Method POST

export const authLoginUserController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email });

      if (user) {
        if (user.type === 'email') {
          if (await user.comparePassword(password)) {
            req.session.user = {
              id: user._id,
              name: user.name,
              email: user.email,
            };
            await req.session.save();
            res.status(200).json({ user: req.session.user });
          } else {
            res.status(401).json({ error: 'Email or password is incorrect.' });
          }
        } else {
          res.status(401).json({ error: 'The account associated with that email was made with Google, login with Google.' });
        }
      } else {
        res.status(401).json({ error: 'That account doesn\'t exist.' });
      }
    } else {
      res.status(401).json({ error: 'All fields are required.' });
    }

  } catch (err: any) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

// @Desc Register user with Google
// @Route /api/auth/register/google
// @Method POST

export const authRegisterWithGoogleController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email } = req.body;

    if (name && email) {
      const user = await User.create({
        type: 'google',
        name,
        email,
      });

      req.session.user = {
        id: user._id,
        name: user.name,
        email: user.email,
      };

      await req.session.save();

      res.status(201).json({
        created: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ created: false, error: (err.message.includes('duplicate key error') ? 'An account with this email already exists.' : err.message) });
  }
}

// @Desc Login user with Google
// @Route /api/auth/login/google
// @Method POST

export const authLoginWithGoogleController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      req.session.user = {
        id: user._id,
        name: user.name,
        email: user.email,
      };

      await req.session.save();
      res.status(200).json({ user: { id: user._id, name: user.name, email: user.email } });
    } else {
      res.status(401).json({ error: 'No matching accounts were found with that email.' });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

// @Desc Logout
// @Route /api/auth/logout
// @Method POST

export async function logoutUserController(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user) {
    return res.status(401).json({ status: 401, message: 'Not logged in' });
  }

  req.session.destroy();

  return res.status(200).json({ status: 200, message: 'Logged out' });

}