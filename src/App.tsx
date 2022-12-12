import Navbar from './components/navbar/Navbar';
import WelcomeBanner from './components/welcome/WelcomeBanner';
import Passwords from './components/passwords/Passwords';
import useLocalStorage from 'use-local-storage';
import './App.scss';

const App = () => {

  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className='App' data-theme={theme}>
      <Navbar switchTheme={() => switchTheme()} />
      <div className='App__Container'>
        <WelcomeBanner />
        <Passwords />
      </div>
    </div>
  );
}

export default App;
