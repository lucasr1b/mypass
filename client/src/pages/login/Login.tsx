import axios from 'axios';
import { useEffect } from 'react';
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

const Login = () => {

  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    if (cookies.get('TOKEN')) {
      navigate('/app');
    }
  }, [cookies, navigate])

  const loginUser = (e: any) => {
    e.preventDefault();

    const { email, password } = document.forms[0];

    const data = {
      email: email.value,
      password: password.value,
    };

    axios.post('http://localhost:5000/api/auth/login', data, axiosConfig)
  }

  return (
    <div className='Login'>
      <Navbar buttonsEnabled={false} />
      <div className='Authentication__Container'>
        <form className='Authentication__Form' onSubmit={loginUser}>
          <FormHeader title='Welcome back!' description='Login to your account to continue.' />
          <FormWithGoogle text='Login with Google' />
          <FormOrOAuth />
          <FormInput label={'Email address'} name='email' />
          <FormInput label={'Password'} type='password' name='password' />
          <FormSubmitButton text='Login' />
          < FormFooter text="Don't have an account?" action='Sign up for free' link='/signup' />
        </form>
        <div className='Login__Image'>
          <img src='login.svg' />
        </div>
      </div>
    </div>
  )
}

export default Login;