import { NextApiRequest, NextApiResponse } from 'next';
import User from '../models/User';
import { ObjectId } from 'mongodb';
import dbConnect from '../lib/mongodb';

dbConnect();

export const getUserProfileController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await req.session.user;
  // const userData = await User.find({ '_id': new ObjectId(user.id) });
  const userData = await User.findOne({ '_id': new ObjectId('639d81217c8b8b5334c57cad') }); // Hard coded for debugging production

  res.status(200).json(userData);
}
