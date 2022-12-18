import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import connectToDB from './db/db';
import passwordRoutes from './routes/passwordRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser';
require('dotenv').config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World", }
  );
});

app.use('/api/passwords', passwordRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
  connectToDB();
}) 