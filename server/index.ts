require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import connectToDB from './db/db';
import passwordRoutes from './routes/passwordRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser';

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:3000', 'https://mypass-beige.vercel.app'],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use(express.static('public'));

app.use('/api/passwords', passwordRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/ping', (req: Request, res: Response) => {
  res.send('Pong!');
})

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
  connectToDB();
}) 