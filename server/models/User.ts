import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
  name: string,
  email: string,
  password: string,
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

}, {
  timestamps: true
});

UserSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(user.password, salt);

  user.password = hashedPassword;

  next();
})

const User = mongoose.model<IUser>('User', UserSchema);

export default User;