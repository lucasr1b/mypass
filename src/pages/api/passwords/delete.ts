import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { deletePasswordController } from '../../../api/controllers/passwordController';

export default withIronSessionApiRoute(deletePasswordRoute, sessionOptions);

async function deletePasswordRoute(req: NextApiRequest, res: NextApiResponse) {

  return await deletePasswordController(req, res);

}