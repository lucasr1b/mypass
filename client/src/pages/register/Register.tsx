import FormFooter from '../../components/form/FormFooter';
import FormHeader from '../../components/form/FormHeader';
import FormInput from '../../components/form/FormInput';
import FormSubmitButton from '../../components/form/FormSubmitButton';
import FormWithGoogle from '../../components/form/FormWithGoogle';
import Navbar from '../../components/navbar/Navbar';
import '../../styles/authentication.scss';
import './Register.scss'

const Register = () => {
  return (
    <div className='Register'>
      <Navbar buttonsEnabled={false} />
      <div className='Authentication__Container'>
        <div className='Authentication__Form'>
          <FormHeader title='Create an account' description='Create an account and start saving your passwords.' />
          <FormInput label={'Full name'} name='fname' />
          <FormInput label={'Email address'} name='email' />
          <FormInput label={'Password'} type='password' name='password' />
          <FormInput label={'Confirm password'} type='password' name='cpassword' />
          <FormSubmitButton text='Create account' />
          <FormWithGoogle text='Sign up with Google' />
          <FormFooter text='Already have an account?' action='Login' link='/login' />
        </div>
        <div className='Register__Image'>
          <img src='register.svg' />
        </div>
      </div>
    </div>
  )
}

export default Register;