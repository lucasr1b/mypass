import Navbar from './components/navbar/Navbar';
import WelcomeBanner from './components/welcome/WelcomeBanner';
import Passwords from './components/passwords/Passwords';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import AddPasswordButton from './components/passwords/AddPasswordButton';

const App = () => {

  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className='App' data-theme={theme}>
      <Navbar switchTheme={() => switchTheme()} theme={theme} />
      <div className='App__Container'>
        <WelcomeBanner />
        <Passwords />
      </div>
      <AddPasswordButton />
    </div>
  );
}

export default App;
