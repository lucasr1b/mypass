import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { newPasswordController } from '../../../api/controllers/passwordController';

export default withIronSessionApiRoute(newPasswordRoute, sessionOptions);

async function newPasswordRoute(req: NextApiRequest, res: NextApiResponse) {

  return await newPasswordController(req, res);

}