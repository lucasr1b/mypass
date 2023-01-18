import { NextApiRequest } from 'next';

export const createSession = async (req: NextApiRequest, id: string, name: string, email: string) => {
  req.session.user = {
    id,
    name,
    email
  }
  await req.session.save();
}