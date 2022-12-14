import { Link } from 'react-router-dom';
import FormFooter from './components/form/FormFooter';
import FormHeader from './components/form/FormHeader';
import FormInput from './components/form/FormInput';
import FormSubmitButton from './components/form/FormSubmitButton';
import FormWithGoogle from './components/form/FormWithGoogle';
import Navbar from './components/navbar/Navbar';
import './styles/authentication.scss';

const Register = () => {
  return (
    <div className='Authentication'>
      <Navbar buttonsEnabled={false} />
      <div className='Authentication__Container'>
        <div className='Authentication__Form'>
          <FormHeader title='Create an account' description='Create an account and start saving your passwords.' />
          <FormInput label={'Full name'} />
          <FormInput label={'Email address'} />
          <FormInput label={'Password'} type='password' />
          <FormInput label={'Confirm password'} type='password' />
          <FormSubmitButton text='Create account' />
          <FormWithGoogle text='Sign up with Google' />
          <FormFooter text='Already have an account?' action='Login' link='/login' />
        </div>
        <div className='Authentication__Image'>
          <img src='register.svg' />
        </div>
      </div>
    </div>
  )
}

export default Register;