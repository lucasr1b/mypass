import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { getUserProfile } from '../services/userService';

connectToDB();

// @Desc User profile
// @Route /api/user/profile
// @Method GET

export const getUserProfileController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  if (user) {
    const userProfile = await getUserProfile(user.id);
    res.status(200).json(userProfile);
  } else {
    res.status(401).json({ message: 'Failed to fetch user profile', error: 'User not logged in.' });
  }
}
