import Navbar from '../components/navbar/Navbar';
import styles from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { API_URL, axiosConfig } from '../utils/constants';

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
    <div className={styles.home}>
      <Navbar isHome={true} isLoggedIn={loggedIn} />
      <div className={styles.homeContainer}>
        <div className={styles.homeContainerContent}>
          <h1>A <span>secure vault</span> for saving your passwords on the go.</h1>
          <h3>You can store your passwords safely inside of your vault and access them from any device with an internet connection.</h3>
          <a href='/register'>{loggedIn ? 'Open vault' : 'Create an account'}</a>
        </div>
        <div className={`${styles.homeContainerImage} ${styles.bounce}`}>
          <img src='/home.svg' />
        </div>
      </div>
    </div>
  )
}

export default Home;