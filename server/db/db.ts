import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log('Connected to database');
  } catch (err: any) {
    console.log(err);
  }
}

export default connectToDB;
