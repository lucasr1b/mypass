import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { resetSessionDetails } from '../../utils/helpers';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();

    resetSessionDetails(cookies);
    navigate('/login');
  }, [navigate]);

  return (
    <div>Logging out...</div>
  )
}

export default Logout;