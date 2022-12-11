import Navbar from "./components/navbar/Navbar";
import Banner from "./components/welcome/Banner";
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='App__Container'>
        <Banner />
      </div>
    </div>
  );
}

export default App;
