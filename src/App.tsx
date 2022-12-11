import Navbar from "./components/navbar/Navbar";
import WelcomeBanner from "./components/welcome/WelcomeBanner";
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='App__Container'>
        <WelcomeBanner />
      </div>
    </div>
  );
}

export default App;
