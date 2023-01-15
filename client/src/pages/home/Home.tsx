import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { API_URL, axiosConfig } from '../../utils/constants';

const Home = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();

    document.documentElement.setAttribute('data-theme', 'light');

    const verifyAuthentication = async () => {
      if (!cookies.get('TOKEN')) {
        setLoggedIn(false);
      } else {
        await axios.get(`${API_URL}/auth`, axiosConfig)
          .then(res => {
            if (res.status === 401) {
              cookies.remove('TOKEN');
              setLoggedIn(false);
            } else {
              setLoggedIn(true);
            }
          }).catch(err => {
            console.log(err);
          });
      }
    }

    verifyAuthentication();
  }, []);

  return (
    <div className='Home'>
      <Navbar isHome={true} isLoggedIn={loggedIn} />
      <div className='Home__Container'>
        <div className='Home__Container__Content'>
          <h1>A <span>secure vault</span> for saving your passwords on the go.</h1>
          <h3>You can store your passwords safely inside of your vault and access them from any device with an internet connection.</h3>
          <Link to='/register'>{loggedIn ? 'Open vault' : 'Create an account'}</Link>
        </div>
        <div className={`${'Home__Container__Image'} ${'bounce'}`}>
          <img src='/home.svg' />
        </div>
      </div>
    </div>
  )
}

export default Home;