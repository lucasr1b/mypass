import axios from 'axios';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import FormFooter from '../../components/form/FormFooter';
import FormHeader from '../../components/form/FormHeader';
import FormInput from '../../components/form/FormInput';
import FormOrOAuth from '../../components/form/FormOrOAuth';
import FormSubmitButton from '../../components/form/FormSubmitButton';
import FormWithGoogle from '../../components/form/FormWithGoogle';
import Navbar from '../../components/navbar/Navbar';
import '../../styles/authentication.scss';
import { axiosConfig } from '../../utils/constants';
import './Login.scss';
import FormError from '../../components/form/FormError';

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  useEffect(() => {
    const cookies = new Cookies();

    document.documentElement.setAttribute('data-theme', 'light');
    if (cookies.get('TOKEN')) {
      navigate('/app');
    }
  }, [navigate])

  const loginUser = async (e: any) => {
    e.preventDefault();

    const { email, password } = document.forms[0];

    const data = {
      email: email.value,
      password: password.value,
    };

    await axios.post('http://localhost:5000/api/auth/login', data, axiosConfig)
      .then((res) => {
        navigate('/app');
        localStorage.setItem('name', res.data.user.name);
        localStorage.setItem('email', res.data.user.email);
      })
      .catch((res) => {
        setError(res.response.data.error);
      })
  }

  return (
    <div className='Login'>
      <Navbar buttonsEnabled={false} />
      <div className='Authentication__Container'>
        <form className='Authentication__Form' onSubmit={loginUser}>
          <FormHeader title='Welcome back!' description='Login to your account to continue.' />
          <FormWithGoogle text='Login with Google' />
          <FormOrOAuth />
          {error && <FormError error={error} />}
          <FormInput label={'Email address'} name='email' />
          <FormInput label={'Password'} type='password' name='password' />
          <FormSubmitButton text='Login' />
          < FormFooter text="Don't have an account?" action='Sign up for free' link='/signup' />
        </form>
        <div className='Login__Image'>
          <img src='login.svg' alt='Vault' />
        </div>
      </div>
    </div>
  )
}

export default Login;