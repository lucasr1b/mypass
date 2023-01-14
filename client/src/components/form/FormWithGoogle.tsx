import './FormWithGoogle.scss';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

type FormWithGoogleProps = {
  text: string;
}

const FormWithGoogle = (props: FormWithGoogleProps) => {

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);

      console.log(userInfo);
    },
  });

  return (
    <div className='FormWithGoogle' onClick={() => login()}>
      <img src='icons/Google.png' alt='Google' />
      <span>{props.text}</span>
    </div>
  )
}

export default FormWithGoogle;