import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import connectDB from './db/db';
import passwordRoutes from './routes/passwordRoutes';
import userRoutes from './routes/userRoutes';
require('dotenv').config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World", }
  );
});

app.use('/api/passwords', passwordRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
  connectDB();
}) 