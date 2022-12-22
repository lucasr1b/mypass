import { useState } from 'react';
import './Navbar.scss';
import { MoonFill, CaretDownFill, CaretUpFill, SunFill, GearFill, MoonStarsFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Backdrop from '../common/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {
  isHome?: boolean;
  buttonsEnabled?: boolean;
  switchTheme?: any;
  theme?: string;
  smallPadding?: boolean;
}

const Navbar = (props: NavbarProps) => {

  const [dropdownToggled, setDropdownToggled] = useState(false);

  return (
    <nav className={`${'Navbar'}${props.smallPadding ? ' Navbar__Padding__Small' : ''}`}>
      <Link to='/'><img src='/logo.svg' className='Navbar__Logo' alt={'mypass'} /></Link>
      {props.buttonsEnabled &&
        <>
          <div className='Navbar__Buttons'>
            <button className='Navbar__Theme' onClick={props.switchTheme}>{props.theme === 'light' ? <MoonFill /> : <SunFill />}</button>
            <div className='Navbar__Profile'>
              <button onClick={() => setDropdownToggled(!dropdownToggled)}>
                <img src='profile.jpg' alt={'profile'} /> <span>{localStorage.getItem('name')?.split(' ')[0]}</span> {dropdownToggled ? <CaretUpFill /> : <CaretDownFill />}
              </button>
              {dropdownToggled &&
                <>
                  <Backdrop action={() => setDropdownToggled(false)} transparent={true} />
                  <div className='Navbar__Dropdown'>
                    <a><GearFill /> Settings</a>
                    <a> <MoonStarsFill />Theme</a>
                    <Link to='/logout'><FontAwesomeIcon icon={faSignOut} />Logout</Link>
                  </div>
                </>
              }
            </div>
          </div>
        </>
      }
      {props.isHome &&
        <div className='Navbar__Buttons'>
          <Link to='/login' className='Navbar__Auth'>Login</Link>
          <Link to='/signup' className='Navbar__Auth'>Sign up</Link>
        </div>
      }
    </nav>
  )
}

Navbar.defaultProps = {
  isHome: false,
  buttonsEnabled: false,
  theme: 'light',
  smallPadding: false,
}

export default Navbar;