import { ObjectId } from 'mongoose';

export type User = {
  name: string;
  email: string;
}

export type Password = {
  _id: ObjectId;
  user: string;
  identifier: string;
  url: string;
  details: string;
  password: string;
  favicon: string;
  createdAt: Date;
  updatedAt: Date;
}