import { withIronSessionSsr } from 'iron-session/next';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/pages/Home.module.scss';
import { useEffect, useState } from 'react';
import { sessionOptions } from '../lib/session';

type HomeProps = {
  isLoggedIn: boolean;
}

const Home = (props: HomeProps) => {

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <div className={styles.home}>
      <Navbar isHome={true} isLoggedIn={props.isLoggedIn} />
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <h1>A <span>secure vault</span> for saving your passwords on the go.</h1>
          <h3>You can store your passwords safely inside of your vault and access them from any device with an internet connection.</h3>
          <a href='/register'>{props.isLoggedIn ? 'Go to your vault' : 'Create an account'}</a>
        </div>
        <div className={`${styles.containerImage} ${styles.bounce}`}>
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