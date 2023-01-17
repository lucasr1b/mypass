import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { updatePasswordController } from '../../../api/controllers/passwordController';

export default withIronSessionApiRoute(updatePasswordRoute, sessionOptions);

async function updatePasswordRoute(req: NextApiRequest, res: NextApiResponse) {

  return await updatePasswordController(req, res);

}