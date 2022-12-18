import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { getSessionUser } from '../utils/session';

export const authenticatedUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getSessionUser(req);
    if (user) res.status(200).json({ loggedIn: true, user: { id: user._id, name: user.name, email: user.email } });
    next();
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ loggedIn: false, error: err.message });
  }
}