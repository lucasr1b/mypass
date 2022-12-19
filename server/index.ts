require('dotenv').config();
import express, { Express, } from 'express';
import cors from 'cors';
import connectToDB from './db/db';
import passwordRoutes from './routes/passwordRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser';

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use(express.static('public'));

app.use('/api/passwords', passwordRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
  connectToDB();
}) 