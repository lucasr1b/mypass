import { withIronSessionSsr } from 'iron-session/next';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/pages/Home.module.scss';
import { useEffect, useState } from 'react';
import { sessionOptions } from '../lib/session';

const Home = (props: any) => {

  const [loggedIn, setLoggedIn] = useState(props.isLoggedIn);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
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

export const getServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    const user = req.session.user;

    if (user) {
      return {
        props: { isLoggedIn: true }
      }
    }

    return {
      props: { isLoggedIn: false },
    }
  }, sessionOptions
);

export default Home;