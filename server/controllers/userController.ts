import { Request, Response } from 'express';
import User from '../models/User';
import { v4 as uuidv4 } from 'uuid';

// @Desc register user
// @Route /api/users/register
// @Method POST
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password
  })

  await user.save();

  res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
    token: uuidv4(),
  });
}

// @Desc get all users
// @Route /api/users
// @Method GET

export const getAllUsers = async (req: Request, res: Response) => {

  const pageSize = 4;
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.countDocuments();
  const users = await User.find({}).select("-password").limit(pageSize).skip(pageSize * (page - 1));
  res.status(201).json({
    users,
    page,
    pages: Math.ceil(count / pageSize),
    count
  });

}