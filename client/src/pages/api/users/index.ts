import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllUsersController } from '../../../api/controllers/authController'

export default async function usersRoute(req: NextApiRequest, res: NextApiResponse) {
  await getAllUsersController(req, res);
}
