import { ObjectId } from 'mongoose';

export type Password = {
  _id: ObjectId;
  user: string;
  identifier: string;
  url: string;
  details: string;
  password: string;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
}