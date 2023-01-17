import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { logoutUserController } from '../../../api/controllers/authController';
import { sessionOptions } from '../../../lib/session';

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {

  return await logoutUserController(req, res);

}