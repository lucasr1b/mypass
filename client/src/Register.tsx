import { Link } from 'react-router-dom';
import FormHeader from './components/form/FormHeader';
import FormInput from './components/form/FormInput';
import FormSubmitButton from './components/form/FormSubmitButton';
import FormWithGoogle from './components/form/FormWithGoogle';
import Navbar from './components/navbar/Navbar';
import './Register.scss';

const Register = () => {
  return (
    <div className='Register'>
      <Navbar buttonsEnabled={false} />
      <div className='Register__Container'>
        <div className='Register__Form'>
          <FormHeader title='Create an account' description='Create an account and start ssaving your passwords.' />
          <FormInput label={'Full name'} />
          <FormInput label={'Email address'} />
          <FormInput label={'Password'} />
          <FormInput label={'Confirm password'} />
          <FormSubmitButton text='Create account' />
          <FormWithGoogle text='Sign up with Google' />
        </div>
        <div className='Register__Image'>
          <img src='register.svg' />
        </div>
      </div>
    </div>
  )
}

export default Register;