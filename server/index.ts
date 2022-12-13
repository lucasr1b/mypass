import express, { Express, Request, Response } from 'express';
require('dotenv').config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Started server on port ${port}`));