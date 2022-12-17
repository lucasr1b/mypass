import { useState } from 'react';
import './Navbar.scss';
import { MoonFill, CaretDownFill, CaretUpFill, SunFill, GearFill, DoorOpenFill, MoonStarsFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Backdrop from '../common/Backdrop';

const Navbar = (props: any) => {

  const [dropdownToggled, setDropdownToggled] = useState(false);

  return (
    <nav className='Navbar'>
      <img src='/logo.svg' className='Navbar__Logo' alt={'mypass'} />
      {props.buttonsEnabled &&
        <>
          <div className='Navbar__Buttons'>
            <button className='Navbar__Theme' onClick={props.switchTheme}>{props.theme === 'light' ? <MoonFill /> : <SunFill />}</button>
            <div className='Navbar__Profile'>
              <button onClick={() => setDropdownToggled(!dropdownToggled)}>
                <img src='profile.jpg' alt={'profile'} /> <span>Lucas</span> {dropdownToggled ? <CaretUpFill /> : <CaretDownFill />}
              </button>
              {dropdownToggled &&
                <>
                  <Backdrop action={() => setDropdownToggled(false)} transparent={true} />
                  <div className='Navbar__Dropdown'>
                    <a><GearFill /> Settings</a>
                    <a><MoonStarsFill />Theme</a>
                    <Link to='/logout'><DoorOpenFill />Logout</Link>
                  </div>
                </>
              }
            </div>
          </div>
        </>
      }
    </nav>
  )
}

export default Navbar;