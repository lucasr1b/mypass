import { ObjectId } from 'mongodb';
import User from '../models/User';

export const getUserProfile = async (id: string) => {
  const userData = await User.find({ '_id': new ObjectId(id) });
  return userData;
}