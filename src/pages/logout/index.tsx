import { useEffect } from 'react';
import { resetSessionDetails } from '../../utils/helpers';
import { useRouter } from 'next/router';
import axios from 'axios';
import { axiosConfig } from '../../utils/constants';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {

    const logout = async () => {
      await axios.post(`api/auth/logout`, {}, axiosConfig)
        .then(() => {
          resetSessionDetails();
          router.push('/login');
        })
    }

    logout();

  }, [router]);

  return (
    <div>Logging out...</div>
  )
}

export default Logout;