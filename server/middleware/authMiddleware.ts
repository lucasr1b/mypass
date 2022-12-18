import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { getSessionUser } from '../utils/session';

export const authenticatedUserController = async (req: Request, res: Response, next: NextFunction) => {

  let user;

  if (req.cookies.TOKEN) {
    try {
      const user = await getSessionUser(req);
      if (user) res.status(200).json({ loggedIn: true, user: { id: user._id, name: user.name, email: user.email } });
      console.log(user);
      next();
    } catch (err: any) {
      console.log(err);
      res.status(401).json({ loggedIn: false, error: err.message });
    }
  }

  if (!user) {
    res.status(401).json({ loggedIn: false });
  }
}
