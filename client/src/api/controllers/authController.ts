import { NextApiRequest, NextApiResponse } from 'next';
import { fetchUsers } from '../services/userService';

export async function getAllUsersController(req: NextApiRequest, res: NextApiResponse) {
  const users = await fetchUsers();
  res.status(200).json(users);
}