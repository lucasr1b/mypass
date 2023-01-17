import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { getPasswordsController } from '../../../api/controllers/passwordController';

export default withIronSessionApiRoute(passwordsRoute, sessionOptions);

async function passwordsRoute(req: NextApiRequest, res: NextApiResponse) {

  return await getPasswordsController(req, res);

}