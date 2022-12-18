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
import { axiosConfig } from '../../utils/constants';
import { Password } from '../../utils/types';

const App = () => {

  const navigate = useNavigate();

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [modalToggled, setModalToggled] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const verifyAuthentication = async () => {
      if (!cookies.get('TOKEN')) {
        navigate('/login')
      } else {
        await axios.post("http://localhost:5000/api/auth", {}, axiosConfig)
          .then(res => {
            if (res.status === 401) {
              cookies.remove('TOKEN');
              navigate('/login');
            }
          }).catch(err => {
            console.log(err);
          })
      };
    }

    verifyAuthentication();
    document.documentElement.setAttribute('data-theme', theme);
  }, [navigate, theme])

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  }

  const toggleModal = () => {
    setModalToggled(!modalToggled);
  }

  const [passwords, setPasswords] = useState<Password[]>([]);

  const addPasssword = (password: Password) => {
    setPasswords([...passwords, password]);
  }

  const setPasswordList = (passwords: Password[]) => {
    setPasswords(passwords);
  }

  return (
    <div className='App'>
      <Navbar switchTheme={() => switchTheme()} theme={theme} buttonsEnabled={true} />
      <div className='App__Container'>
        <WelcomeBanner openModal={() => toggleModal()} />
        <PasswordsTable passwords={passwords} setPasswordList={setPasswordList} />
        {modalToggled && <NewPasswordModal closeModal={() => toggleModal()} addPassword={addPasssword} />}
      </div>
      {!modalToggled && <AddPasswordButton openModal={() => toggleModal()} />}
    </div>
  );
}

export default App;
