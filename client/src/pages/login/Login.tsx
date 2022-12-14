import FormFooter from '../../components/form/FormFooter';
import FormHeader from '../../components/form/FormHeader';
import FormInput from '../../components/form/FormInput';
import FormOrOAuth from '../../components/form/FormOrOAuth';
import FormSubmitButton from '../../components/form/FormSubmitButton';
import FormWithGoogle from '../../components/form/FormWithGoogle';
import Navbar from '../../components/navbar/Navbar';
import '../../styles/authentication.scss';
import './Login.scss';

const Login = () => {
  return (
    <div className='Login'>
      <Navbar buttonsEnabled={false} />
      <div className='Authentication__Container'>
        <div className='Authentication__Form'>
          <FormHeader title='Welcome back!' description='Login to your account to continue.' />
          <FormWithGoogle text='Login with Google' />
          <FormOrOAuth />
          <FormInput label={'Email address'} />
          <FormInput label={'Password'} type='password' />
          <FormSubmitButton text='Login' />
          <FormFooter text="Don't have an account?" action='Sign up for free' link='/register' />
        </div>
        <div className='Login__Image'>
          <img src='login.svg' />
        </div>
      </div>
    </div>
  )
}

export default Login;