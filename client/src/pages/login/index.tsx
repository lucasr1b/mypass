import axios from 'axios';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import FormHeader from '../../components/form/FormHeader';
import FormInput from '../../components/form/FormInput';
import FormOrOAuth from '../../components/form/FormOrOAuth';
import FormSubmitButton from '../../components/form/FormSubmitButton';
import FormWithGoogle from '../../components/form/FormWithGoogle';
import Navbar from '../../components/navbar/Navbar';
import '../../styles/authentication.module.scss';
import { API_URL, axiosConfig } from '../../utils/constants';
import '../../styles/Login.module.scss';
import FormError from '../../components/form/FormError';
import { setSessionDetails } from '../../utils/helpers';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const [error, setError] = useState('');

  useEffect(() => {
    const cookies = new Cookies();

    document.documentElement.setAttribute('data-theme', 'light');

    if (cookies.get('TOKEN')) {
      router.push('/app');
    }
  }, [router]);

  const loginUser = async (e: any) => {
    e.preventDefault();

    const { email, password } = document.forms[0];

    const data = {
      email: email.value,
      password: password.value,
    };

    await axios.post(`${API_URL}/auth/login`, data, axiosConfig)
      .then((res) => {
        setSessionDetails(res.data);
        router.push('/app');
      })
      .catch((res) => {
        setError(res.response.data.error);
        password.value = '';
      });
  }

  return (
    <div className='Login'>
      <Navbar />
      <div className='Authentication__Container'>
        <form className='Authentication__Form' onSubmit={loginUser}>
          <FormHeader title='Welcome back!' description="Don't have an account?" action='Sign up for free' link='/register' />
          <FormWithGoogle text='Login with Google' setError={setError} type='login' />
          <FormOrOAuth />
          {error && <FormError error={error} />}
          <FormInput label={'Email address'} name='email' />
          <FormInput label={'Password'} type='password' name='password' />
          <FormSubmitButton text='Login' />
        </form>
        <div className='Login__Image'>
          <img src='login.svg' alt='Vault' />
        </div>
      </div>
    </div>
  )
}

export default Login;