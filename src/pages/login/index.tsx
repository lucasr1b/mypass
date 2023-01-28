import axios from 'axios';
import { useEffect, useState } from 'react';
import FormHeader from '../../components/form/FormHeader';
import FormInput from '../../components/form/FormInput';
import FormOrOAuth from '../../components/form/FormOrOAuth';
import FormSubmitButton from '../../components/form/FormSubmitButton';
import FormWithGoogle from '../../components/form/FormWithGoogle';
import Navbar from '../../components/navbar/Navbar';
import authenticationStyles from '../../styles/common/authentication.module.scss';
import { axiosConfig } from '../../utils/constants';
import styles from '../../styles/pages/Login.module.scss';
import FormError from '../../components/form/FormError';
import { setSessionDetails } from '../../utils/helpers';
import useRouter from 'next/router';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';

const Login = () => {
  const router = useRouter();

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const loginUser = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    const { email, password } = document.forms[0];

    const data = {
      email: email.value,
      password: password.value,
    };

    await axios.post(`api/auth/login`, data, axiosConfig)
      .then((res) => {
        setSessionDetails(res.data.user);
        router.push('/app');
      })
      .catch((res) => {
        setError(res.data.error);
        password.value = '';
        setSubmitted(false);
      });
  }

  return (
    <div className={authenticationStyles.wrapper}>
      <Navbar />
      <div className={`${styles.container} ${authenticationStyles.container}`}>
        <form className={authenticationStyles.form} onSubmit={loginUser}>
          <FormHeader title='Welcome back!' description="Don't have an account?" action='Sign up for free' link='/register' />
          <FormWithGoogle text='Login with Google' setError={setError} type='login' />
          <FormOrOAuth />
          {error && <FormError error={error} />}
          <FormInput label={'Email address'} name='email' />
          <FormInput label={'Password'} type='password' name='password' />
          <FormSubmitButton text='Login' submitted={submitted} />
        </form>
        <div className={styles.loginImage}>
          <img src='login.svg' alt='Vault' />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    const user = req.session.user;

    if (user) {
      return {
        redirect: {
          destination: '/app',
          permanent: false,
        },
      }
    }

    return {
      props: {},
    }
  }, sessionOptions
);

export default Login;