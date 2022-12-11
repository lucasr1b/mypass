import Navbar from './components/navbar/Navbar';
import WelcomeBanner from './components/welcome/WelcomeBanner';
import Passwords from './components/passwords/Passwords';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='App__Container'>
        <WelcomeBanner />
        <Passwords />
      </div>
    </div>
  );
}

export default App;
