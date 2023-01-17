import { NextApiRequest, NextApiResponse } from 'next';
import { getPasswordsFromUser } from '../services/passwordService';

// @Desc Get all passwords
// @Route /api/passwords
// @Method GET

export const getPasswordsController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await req.session.user;

  if (user) {
    const passwords = await getPasswordsFromUser(user.id);

    res.status(200).json(passwords);
  } else {
    res.status(401).json({ loggedIn: false });
  }
}
