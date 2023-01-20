import { NextApiRequest } from 'next';

export const createSession = async (req: NextApiRequest, id: string, name: string, email: string) => {
  req.session.user = {
    id,
    name,
    email
  }
  await req.session.save();
}

export const validateEmail = (email: string) => {
  const regexPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regexPattern.test(email);
}