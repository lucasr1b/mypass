import { Link } from 'react-router-dom';
import FormInput from './components/form/FormInput';
import Navbar from './components/navbar/Navbar';
import './Register.scss';

const Register = () => {
  return (
    <div className='Register'>
      <Navbar buttonsEnabled={false} />
      <div className='Register__Container'>
        <div className='Register__Form'>
          <FormInput label={'Full name'} />
          <FormInput label={'Email address'} />
          <FormInput label={'Password'} />
          <FormInput label={'Confirm password'} />
        </div>
        <div className='Register__Image'>
          <img src='register.svg' />
        </div>
      </div>
    </div>
  )
}

export default Register;