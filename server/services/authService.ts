import jwt from 'jsonwebtoken';

export const createToken = (id: string, maxAge: number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: maxAge,
  })
}