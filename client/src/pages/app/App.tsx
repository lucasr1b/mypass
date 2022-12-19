import Navbar from '../../components/navbar/Navbar';
import WelcomeBanner from '../../components/welcome/WelcomeBanner';
import PasswordsTable from '../../components/passwords/PasswordsTable';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import AddPasswordButton from '../../components/passwords/AddPasswordButton';
import NewPasswordModal from '../../components/modal/new/NewPasswordModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { API_URL, axiosConfig } from '../../utils/constants';
import { Password } from '../../utils/types';

const App = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [modalToggled, setModalToggled] = useState(false);
  const [passwords, setPasswords] = useState<Password[]>([]);

  useEffect(() => {
    const cookies = new Cookies();

    document.documentElement.setAttribute('data-theme', theme);

    const verifyAuthentication = async () => {
      if (!cookies.get('TOKEN')) {
        navigate('/login')
      } else {
        await axios.get(`${API_URL}/auth`, axiosConfig)
          .then(res => {
            if (res.status === 401) {
              cookies.remove('TOKEN');
              navigate('/login');
            }
          }).catch(err => {
            console.log(err);
          });
      }
    }

    verifyAuthentication();
  }, [navigate, theme]);

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
    <div className='App'>
      <Navbar switchTheme={switchTheme} theme={theme} buttonsEnabled={true} />
      <div className='App__Container'>
        <WelcomeBanner openModal={toggleAddPasswordModal} />
        <PasswordsTable passwords={passwords} setPasswordList={setPasswordList} />
        {modalToggled && <NewPasswordModal closeModal={toggleAddPasswordModal} addPassword={addPasssword} />}
      </div>
      {!modalToggled && <AddPasswordButton openModal={toggleAddPasswordModal} />}
    </div>
  );
}

export default App;
