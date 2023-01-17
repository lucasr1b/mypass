import connectToDatabase from '../lib/mongodb';
import User from '../models/User';

export const fetchUsers = async () => {

  await connectToDatabase();
  const users = await User.find({})

  return users;
}
