import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../lib/mongodb';

export const fetchUsers = async () => {

  let { db } = await connectToDatabase();
  const users = db.collection('users').findOne({ '_id': new ObjectId('63a4c8cc35ffb6c342f3aaa5') });

  return users;
}
