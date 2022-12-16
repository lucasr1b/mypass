import { Request, Response } from 'express';
import User from '../models/User';
import { createToken } from '../services/authService';
import { maxAge } from '../utils/constants';
import validator from 'email-validator';

let validationError: string;

// @Desc Register user
// @Route /api/auth/login
// @Method POST

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, cpassword } = req.body;

    if (name && email && password && cpassword) {
      if (validator.validate(email)) {
        if (password.length > 8) {
          if (password === cpassword) {
            const user = await User.create({
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
    res.status(400).json({ created: false, error: err.message });
  }
}

// @Desc Login user
// @Route /api/auth/login
// @Method POST

export const authLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await user.comparePassword(password)) {
      const token = createToken(user._id.toString(), maxAge);

      res.cookie('TOKEN', token, {
        maxAge
      });
      res.status(200).json({ loggedIn: true });
    } else {
      res.status(401).json({ error: 'Email or password is incorrect.' });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}