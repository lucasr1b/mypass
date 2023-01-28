import { useEffect } from 'react';
import { resetSessionDetails } from '../../utils/helpers';
import Router from 'next/router';
import axios from 'axios';
import { axiosConfig } from '../../utils/constants';

const Logout = () => {
  useEffect(() => {

    const logout = async () => {
      await axios.post(`api/auth/logout`, {}, axiosConfig)
        .then(() => {
          resetSessionDetails();
          Router.push('/login');
        })
    }

    logout();

  }, []);

  return (
    <div>Logging out...</div>
  )
}

export default Logout;