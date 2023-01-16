import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { resetSessionDetails } from '../../utils/helpers';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const cookies = new Cookies();

    resetSessionDetails(cookies);
    router.push('/login');
  }, [router]);

  return (
    <div>Logging out...</div>
  )
}

export default Logout;