import axios from 'axios';
import { useEffect, useState } from 'react';
import FormHeader from '../../components/form/FormHeader';
import FormInput from '../../components/form/FormInput';
import FormSubmitButton from '../../components/form/FormSubmitButton';
import FormWithGoogle from '../../components/form/FormWithGoogle';
import Navbar from '../../components/navbar/Navbar';
import authenticationStyles from '../../styles/common/authentication.module.scss';
import { axiosConfig } from '../../utils/constants';
import styles from '../../styles/pages/Register.module.scss';
import FormError from '../../components/form/FormError';
import { setSessionDetails } from '../../utils/helpers';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();

  const [error, setError] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const registerUser = async (e: any) => {
    e.preventDefault();

    const { uname, email, password, cpassword } = document.forms[0];

    const data = {
      name: uname.value,
      email: email.value,
      password: password.value,
      cpassword: cpassword.value,
    };

    await axios.post(`api/auth/register`, data, axiosConfig)
      .then((res) => {
        setSessionDetails(res.data);
        router.push('/app');
      })
      .catch((res) => {
        setError(res.response.data.error);
        password.value = '';
        cpassword.value = '';
      });
  }

  return (
    <div className={`${styles.register} ${authenticationStyles.wrapper}`}>
      <Navbar />
      <div className={`${styles.container} ${authenticationStyles.container}`}>
        <form className={authenticationStyles.form} onSubmit={registerUser}>
          <FormHeader title='Create an account' description='Already have an account?' action='Login' link='/login' />
          {error && <FormError error={error} />}
          <FormInput label={'Name'} name='uname' />
          <FormInput label={'Email address'} name='email' />
          <FormInput label={'Password'} type='password' name='password' />
          <FormInput label={'Confirm password'} type='password' name='cpassword' />
          <FormSubmitButton text='Create account' />
          <FormWithGoogle text='Sign up with Google' setError={setError} type='register' />
        </form>
        <div className={styles.registerImage}>
          <img src='register.svg' alt='Astronaut' />
        </div>
      </div>
    </div>
  )
}

export default Register;