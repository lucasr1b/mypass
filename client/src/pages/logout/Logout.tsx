import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    cookies.remove('TOKEN')
    navigate('/login');
  })

  return (
    <div>Logging out...</div>
  )
}

export default Logout;