import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const authenticatedUserController = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.TOKEN;

  if (token) {
    try {
      const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET as string);

      const user = await User.findById(decodedToken.id);

      if (user) res.status(200).json({ loggedIn: true, user: user.name });
      next();
    } catch (err: any) {
      console.log(err);
      res.status(400).json({ loggedIn: false, error: err.message });
    }
  }
}