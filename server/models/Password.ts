import mongoose from 'mongoose';

export interface IPassword extends mongoose.Document {
  user: string,
  identifier: string,
  url: string,
  details: string,
  password: string,
  logo: string,
  createdAt: Date,
  updatedAt: Date,
}

const PasswordSchema = new mongoose.Schema({

  user: {
    type: String,
    required: true,
  },

  identifier: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  details: {
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
}, {
  timestamps: true,
})

const Password = mongoose.model<IPassword>('Password', PasswordSchema);

export default Password;