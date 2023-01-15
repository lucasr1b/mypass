import { useState } from 'react';
import './Navbar.scss';
import { MoonFill, CaretDownFill, CaretUpFill, SunFill, GearFill, MoonStarsFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Backdrop from '../common/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {
  isHome?: boolean;
  isLoggedIn?: boolean;
  buttonsEnabled?: boolean;
  switchTheme?: any;
  theme?: string
}

const Navbar = (props: NavbarProps) => {

  const [dropdownToggled, setDropdownToggled] = useState(false);

  return (
    <nav className={'Navbar'}>
      <Link to='/'><img src='/logo.svg' className='Navbar__Logo' alt={'mypass'} /></Link>
      {props.buttonsEnabled &&
        <>
          <div className='Navbar__Buttons'>
            <button className='Navbar__Theme' onClick={props.switchTheme} aria-label='theme'>{props.theme === 'light' ? <MoonFill /> : <SunFill />}</button>
            <div className='Navbar__Profile'>
              <button onClick={() => setDropdownToggled(!dropdownToggled)}>
                <img src='profile.jpg' alt={'profile'} /> <span>{localStorage.getItem('name')?.split(' ')[0]}</span> {dropdownToggled ? <CaretUpFill /> : <CaretDownFill />}
              </button>
              {dropdownToggled &&
                <>
                  <Backdrop action={() => setDropdownToggled(false)} transparent={true} />
                  <div className='Navbar__Dropdown'>
                    <a><GearFill /> Settings</a>
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
          {!props.isLoggedIn ?
            <>
              <Link to='/login' className='Navbar__Auth'>Login</Link>
              <Link to='/register' className='Navbar__Auth'>Sign up</Link>
            </>
            :
            <Link to='/app' className='Navbar__Auth'>Open vault</Link>
          }

        </div>
      }
    </nav>
  )
}

Navbar.defaultProps = {
  isHome: false,
  isLoggedIn: false,
  buttonsEnabled: false,
  theme: 'light',
}

export default Navbar;