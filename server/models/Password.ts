import mongoose from 'mongoose';

export interface IPassword {
  identifier: string,
  url: string,
  user: string,
  password: string,
  logo: string,
  createdAt: Date,
}

const PasswordSchema = new mongoose.Schema({

  identifier: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  user: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  logo: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    required: true
  },

})

const Password = mongoose.model<IPassword>('Password', PasswordSchema);

export default Password;