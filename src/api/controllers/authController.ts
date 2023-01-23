import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { validateUserCreationFields, createUserAndSession, validateUserCrendetialFieldsAndCreateSession, validateLoginWithGoogleAndCreateSession, validateRegisterWithGoogleAndCreateSession } from '../services/authService';

connectToDB();

// @Desc Register user
// @Route /api/auth/register
// @Method POST

export const authRegisterUserController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password, cpassword } = req.body;

    const userCreationFieldsValidation = await validateUserCreationFields(name, email, password, cpassword);

    if (userCreationFieldsValidation === true) {
      const user = await createUserAndSession(req, name, email, password);

      res.status(201).json({
        created: true,
        user
      });
    } else {
      res.status(400).json({ created: false, error: userCreationFieldsValidation });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ created: false, error: err.message });
  }
}

// @Desc Login user
// @Route /api/auth/login
// @Method POST

export const authLoginUserController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    const userCrendetialFieldsValidation = await validateUserCrendetialFieldsAndCreateSession(req, email, password);

    if (userCrendetialFieldsValidation === true) {
      res.status(200).json({ user: req.session.user });
    } else {
      res.status(400).json({ error: userCrendetialFieldsValidation });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

// @Desc Register user with Google
// @Route /api/auth/register/google
// @Method POST

export const authRegisterWithGoogleController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email } = req.body;

    const userRegisterWithGoogleValidation = await validateRegisterWithGoogleAndCreateSession(req, name, email);

    if (userRegisterWithGoogleValidation === true) {
      res.status(201).json({
        created: true,
        user: req.session.user
      });
    } else {
      res.status(400).json({ error: userRegisterWithGoogleValidation });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ created: false, error: err.message });
  }
}

// @Desc Login user with Google
// @Route /api/auth/login/google
// @Method POST

export const authLoginWithGoogleController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.body;

    const userLoginWithGoogleValidation = await validateLoginWithGoogleAndCreateSession(req, email);

    if (userLoginWithGoogleValidation === true) {
      res.status(200).json({ user: req.session.user });
    } else {
      res.status(400).json({ error: userLoginWithGoogleValidation })
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

// @Desc Logout
// @Route /api/auth/logout
// @Method POST

export async function logoutUserController(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user) {
    return res.status(401).json({ status: 401, message: 'Not logged in' });
  }

  req.session.destroy();

  return res.status(200).json({ status: 200, message: 'Logged out' });

}