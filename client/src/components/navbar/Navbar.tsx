import './Navbar.scss';
import { MoonFill, CaretDownFill, SunFill } from 'react-bootstrap-icons';

const Navbar = (props: any) => {
  return (
    <nav className='Navbar'>
      <img src='/logo.svg' className='Navbar__Logo' alt={'mypass'} />
      <div className='Navbar__Buttons'>
        <button className='Navbar__Theme' onClick={props.switchTheme}>{props.theme === 'light' ? <MoonFill /> : <SunFill />}</button>
        <button className='Navbar__Profile'><img src='profile.jpg' alt={'profile'} /> <span>Lucas</span> <CaretDownFill /></button>
      </div>
    </nav>
  )
}

export default Navbar;