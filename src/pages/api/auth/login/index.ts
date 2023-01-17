import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { authLoginUserController } from '../../../../api/controllers/authController';
import { sessionOptions } from '../../../../lib/session';

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {

  return await authLoginUserController(req, res);

}