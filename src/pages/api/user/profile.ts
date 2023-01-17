
import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { getUserProfileController } from '../../../api/controllers/userController';

export default withIronSessionApiRoute(userProfileRoute, sessionOptions);

async function userProfileRoute(req: NextApiRequest, res: NextApiResponse) {

  return await getUserProfileController(req, res);

}