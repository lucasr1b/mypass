import { NextApiRequest, NextApiResponse } from 'next';
import User from '../models/User';
import dbConnect from '../lib/mongodb';

dbConnect();

export const authLoginUserController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email });

      if (user && user.type === 'email') {
        if (await user.comparePassword(password)) {
          req.session.user = {
            id: user._id,
            name: user.name,
            email: user.email,
          };
          await req.session.save();
          console.log(req.session.user);
          res.status(200).json({ user: req.session.user });
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

export async function logoutUserController(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user) {
    return res.status(401).json({ status: 401, message: 'Not logged in' });
  }

  req.session.destroy();

  return res.status(200).json({ status: 200, message: 'Logged out' });

}