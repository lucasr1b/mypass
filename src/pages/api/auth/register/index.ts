import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { authRegisterUserController } from '../../../../api/controllers/authController';
import { sessionOptions } from '../../../../lib/session';

export default withIronSessionApiRoute(registerRoute, sessionOptions);

async function registerRoute(req: NextApiRequest, res: NextApiResponse) {

  return await authRegisterUserController(req, res);

}