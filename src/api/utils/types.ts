import { Mongoose, ObjectId } from 'mongoose';

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

export type User = {
  id: ObjectId;
  name: string;
  email: string;
}