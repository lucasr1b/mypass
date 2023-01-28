import WelcomeBanner from '../../components/welcome/WelcomeBanner';
import PasswordsTable from '../../components/passwords/PasswordsTable';
import useLocalStorage from 'use-local-storage';
import styles from '../../styles/pages/App.module.scss';
import AddPasswordButton from '../../components/passwords/AddPasswordButton';
import NewPasswordModal from '../../components/modal/new/NewPasswordModal';
import { useEffect, useState } from 'react';
import { Password, User } from '../../utils/types';
import Navbar from '../../components/navbar/Navbar';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';

type AppProps = {
  user: User;
}

const App = (props: AppProps) => {

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [modalToggled, setModalToggled] = useState(false);
  const [passwords, setPasswords] = useState<Password[]>([]);

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', theme);

  }, [theme]);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  }

  const addPasssword = (password: Password) => {
    setPasswords([...passwords, password]);
  }

  const setPasswordList = (passwords: Password[]) => {
    setPasswords(passwords);
  }

  const toggleAddPasswordModal = () => {
    setModalToggled(!modalToggled);
  }

  return (
    <div>
      <Navbar buttonsEnabled={true} switchTheme={switchTheme} theme={theme} user={props.user} />
      <div className={styles.container}>
        <WelcomeBanner openModal={toggleAddPasswordModal} />
        <PasswordsTable passwords={passwords} setPasswordList={setPasswordList} />
        {modalToggled && <NewPasswordModal closeModal={toggleAddPasswordModal} addPassword={addPasssword} />}
      </div>
      {!modalToggled && <AddPasswordButton openModal={toggleAddPasswordModal} />}
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    const user = req.session.user;

    return {
      props: { user },
    }
  }, sessionOptions
);


export default App;
