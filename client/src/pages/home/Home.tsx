import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  })

  return (
    <div className='Home'>
      <Navbar isHome={true} />
      <div className='Home__Container'>
        <div className='Home__Container__Content'>
          <h1>A <span>secure vault</span> for saving your passwords on the go.</h1>
          <h3>You can store your passwords safely inside of your vault and access them from any device with an internet connection.</h3>
          <Link to='/signup'>Create an account</Link>
        </div>
        <div className={`${'Home__Container__Image'} ${'bounce'}`}>
          <img src='/home.svg' />
        </div>
      </div>
    </div>
  )
}

export default Home;