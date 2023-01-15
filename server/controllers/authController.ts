import { Request, Response } from 'express';
import User from '../models/User';
import { createToken } from '../services/authService';
import { maxAge } from '../utils/constants';
import validator from 'email-validator';
import { getSessionUser } from '../utils/session';

let validationError: string;

// @Desc Check if user is authenticated
// @Route /api/auth
// @Method GET
export const authenticatedUserController = async (req: Request, res: Response) => {
  try {
    const user = await getSessionUser(req);
    if (user) res.status(200).json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

// @Desc Register user
// @Route /api/auth/register
// @Method POST

export const authRegisterUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, cpassword } = req.body;

    if (name && email && password && cpassword) {
      if (validator.validate(email)) {
        if (password.length >= 8) {
          if (password === cpassword) {
            const user = await User.create({
              type: 'email',
              name,
              email,
              password
            });

            const token = createToken(user._id.toString(), maxAge);

            res.cookie('TOKEN', token, {
              maxAge: maxAge,
            });

            res.status(201).json({
              created: true,
              user: {
                id: user._id,
                name: user.name,
                email: user.email,
              },
            });
          } else {
            validationError = 'Passwords do not match';
            res.status(400).json({ created: false, error: validationError });
          }
        } else {
          validationError = 'Passwords must be at least 8 characters long';
          res.status(400).json({ created: false, error: validationError });
        }
      } else {
        validationError = 'Email is already taken or invalid';
        res.status(400).json({ created: false, error: validationError });
      }
    } else {
      validationError = 'All fields are required';
      res.status(400).json({ created: false, error: validationError });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ created: false, error: (err.message.includes('duplicate key error') ? 'All fields are required' : err.message) });
  }
}

// @Desc Login user
// @Route /api/auth/login
// @Method POST

export const authLoginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email });

      if (user && user.type === 'email') {
        if (await user.comparePassword(password)) {
          const token = createToken(user._id.toString(), maxAge);

          res.cookie('TOKEN', token, {
            maxAge
          });
          res.status(200).json({ user: { id: user._id, name: user.name, email: user.email } });
        } else {
          res.status(401).json({ error: 'Email or password is incorrect.' });
        }
      } else {
        res.status(401).json({ error: 'The account associated with that email was made with Google, login with Google.' });
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

export const authGoogleRegisterUserController = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    if (name && email) {
      const user = await User.create({
        type: 'google',
        name,
        email,
      });

      const token = createToken(user._id.toString(), maxAge);

      res.cookie('TOKEN', token, {
        maxAge: maxAge,
      });

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
export const authGoogleLoginController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const token = createToken(user._id.toString(), maxAge);

      res.cookie('TOKEN', token, {
        maxAge
      });
      res.status(200).json({ user: { id: user._id, name: user.name, email: user.email } });
    } else {
      res.status(401).json({ error: 'No matching accounts were found with that email.' });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}