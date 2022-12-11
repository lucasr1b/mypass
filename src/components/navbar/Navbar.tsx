import './Navbar.scss';
import { MoonFill, CaretDownFill } from 'react-bootstrap-icons';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <img src='/logo.svg' className='Navbar__Logo' />
      <div className='Navbar__Buttons'>
        <button className='Navbar__Dark__Mode'><MoonFill /></button>
        <button className='Navbar__Profile'><img src='profile.jpg' /> <span>Lucas</span> <CaretDownFill /></button>
      </div>
    </nav>
  )
}

export default Navbar;