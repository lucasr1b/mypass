import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { authRegisterWithGoogleController } from '../../../../api/controllers/authController';
import { sessionOptions } from '../../../../lib/session';

export default withIronSessionApiRoute(registerWithGoogleRoute, sessionOptions);

async function registerWithGoogleRoute(req: NextApiRequest, res: NextApiResponse) {

  return await authRegisterWithGoogleController(req, res);

}