import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

export const getSessionUser = async (req: Request, res: Response) => {
  const token = req.cookies.TOKEN;

  if (token) {
    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET as string);

    const user = await User.findById(decodedToken.id);

    return user as IUser;
  }
}