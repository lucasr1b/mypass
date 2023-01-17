import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { authLoginWithGoogleController } from '../../../../api/controllers/authController';
import { sessionOptions } from '../../../../lib/session';

export default withIronSessionApiRoute(loginWithGoogleRoute, sessionOptions);

async function loginWithGoogleRoute(req: NextApiRequest, res: NextApiResponse) {

  return await authLoginWithGoogleController(req, res);

}