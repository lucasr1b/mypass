import { NextApiRequest, NextApiResponse } from 'next';
import User from '../models/User';
import { ObjectId } from 'mongodb';
import dbConnect from '../lib/mongodb';

dbConnect();

export const getUserProfileController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  if (user) {
    const userData = await User.find({ '_id': new ObjectId(user.id) });
    res.status(200).json(userData);
  } else {
    res.status(401).json({ loggedIn: false });
  }
}
