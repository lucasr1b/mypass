import Navbar from './components/navbar/Navbar';
import WelcomeBanner from './components/welcome/WelcomeBanner';
import Passwords from './components/passwords/Passwords';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import AddPasswordButton from './components/passwords/AddPasswordButton';
import NewPasswordModal from './components/modal/NewPasswordModal';
import { useEffect, useState } from 'react';

const App = () => {

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [modalToggled, setModalToggled] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  }

  const toggleModal = () => {
    setModalToggled(!modalToggled);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  })

  return (
    <div className='App'>
      <Navbar switchTheme={() => switchTheme()} theme={theme} />
      <div className='App__Container'>
        <WelcomeBanner openModal={() => toggleModal()} />
        <Passwords />
        {modalToggled && <NewPasswordModal closeModal={() => toggleModal()} />}
      </div>
      {!modalToggled && <AddPasswordButton openModal={() => toggleModal()} />}
    </div>
  );
}

export default App;
