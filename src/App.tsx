import Navbar from './components/navbar/Navbar';
import WelcomeBanner from './components/welcome/WelcomeBanner';
import Passwords from './components/passwords/Passwords';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import AddPasswordButton from './components/passwords/AddPasswordButton';
import NewPasswordModal from './components/modal/NewPasswordModal';
import { useState } from 'react';

const App = () => {

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [modalToggled, setModalToggled] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const toggleModal = () => {
    setModalToggled(!modalToggled);
    document.body.style.overflow = (modalToggled ? 'unset' : 'hidden')
  }

  return (
    <div className='App' data-theme={theme}>
      <Navbar switchTheme={() => switchTheme()} theme={theme} />
      <div className='App__Container'>
        <WelcomeBanner addPassword={() => toggleModal()} />
        <Passwords />
      </div>
      {modalToggled && <NewPasswordModal closeModal={() => toggleModal()} />}
      <AddPasswordButton />
    </div>
  );
}

export default App;
