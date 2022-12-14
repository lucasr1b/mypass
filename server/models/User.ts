import mongoose from 'mongoose';

export interface IUser {
  name: string,
  email: string,
  password: string,
  avatar?: string,
  createdAt: Date,
}

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },

}, {
  timestamps: true
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;