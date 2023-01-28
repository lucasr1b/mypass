import { ObjectId } from 'mongoose';

export type User = {
  _id: ObjectId
  name: string;
  email: string;
  avatar: string;
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