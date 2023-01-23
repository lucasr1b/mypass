import styles from './FormWithGoogle.module.scss';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { axiosConfig } from '../../utils/constants';
import { setSessionDetails } from '../../utils/helpers';
import { useState } from 'react';
import { useRouter } from 'next/router';

type FormWithGoogleProps = {
  text: string;
  setError: any;
  type: string;
}

const FormWithGoogle = (props: FormWithGoogleProps) => {
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
      await axios.post(`api/auth/login/google`, userInfo, axiosConfig)
        .then((res) => {
          setSessionDetails(res.data.user);
          router.push('/app');
        })
        .catch((res) => {
          props.setError(res.response.data.error);
        });
    },
  });

  const register = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
      await axios.post(`api/auth/register/google`, userInfo, axiosConfig)
        .then((res) => {
          setSessionDetails(res.data.user);
          router.push('/app');
        })
        .catch((res) => {
          props.setError(res.response.data.error);
        });
    },
  });

  return (
    <div className={styles.withGoogle} onClick={() => (props.type === 'login' ? login() : register())}>
      <img src='icons/Google.png' alt='Google' />
      <span>{props.text}</span>
    </div>
  )
}

export default FormWithGoogle;