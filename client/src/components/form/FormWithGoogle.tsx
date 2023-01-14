import './FormWithGoogle.scss';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { API_URL, axiosConfig } from '../../utils/constants';
import { setSessionDetails } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type FormWithGoogleProps = {
  text: string;
  setError: any;
}

const FormWithGoogle = (props: FormWithGoogleProps) => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
      await axios.post(`${API_URL}/auth/google`, userInfo, axiosConfig)
        .then((res) => {
          setSessionDetails(res.data);
          navigate('/app');
        })
        .catch((res) => {
          props.setError(res.response.data.error);
        });
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