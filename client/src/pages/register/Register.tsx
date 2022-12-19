import axios from 'axios';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import FormFooter from '../../components/form/FormFooter';
import FormHeader from '../../components/form/FormHeader';
import FormInput from '../../components/form/FormInput';
import FormSubmitButton from '../../components/form/FormSubmitButton';
import FormWithGoogle from '../../components/form/FormWithGoogle';
import Navbar from '../../components/navbar/Navbar';
import '../../styles/authentication.scss';
import { API_URL, axiosConfig } from '../../utils/constants';
import './Register.scss'
import FormError from '../../components/form/FormError';
import { setSessionDetails } from '../../utils/helpers';

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  useEffect(() => {
    const cookies = new Cookies();

    document.documentElement.setAttribute('data-theme', 'light');

    if (cookies.get('TOKEN')) {
      navigate('/app');
    }
  }, [navigate]);

  const registerUser = async (e: any) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = document.forms[0];

    const data = {
      name: fname.value,
      email: email.value,
      password: password.value,
      cpassword: cpassword.value,
    };

    await axios.post(`${API_URL}/auth/register`, data, axiosConfig)
      .then((res) => {
        setSessionDetails(res.data);
        navigate('/app');
      })
      .catch((res) => {
        setError(res.response.data.error);
        password.value = '';
        cpassword.value = '';
      });
  }

  return (
    <div className='Register'>
      <Navbar buttonsEnabled={false} />
      <div className='Authentication__Container'>
        <form className='Authentication__Form' onSubmit={registerUser}>
          <FormHeader title='Create an account' description='Create an account and start saving your passwords.' />
          {error && <FormError error={error} />}
          <FormInput label={'Full name'} name='fname' />
          <FormInput label={'Email address'} name='email' />
          <FormInput label={'Password'} type='password' name='password' />
          <FormInput label={'Confirm password'} type='password' name='cpassword' />
          <FormSubmitButton text='Create account' />
          <FormWithGoogle text='Sign up with Google' />
          <FormFooter text='Already have an account?' action='Login' link='/login' />
        </form>
        <div className='Register__Image'>
          <img src='register.svg' alt='Astronaut' />
        </div>
      </div>
    </div>
  )
}

export default Register;