import { Request } from 'express';
import User, { IUser } from '../models/User';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const getSessionUser = async (req: Request) => {
  const token = req.cookies.TOKEN;

  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    const user = await User.findById(decodedToken.id);

    return user as IUser;
  }
}