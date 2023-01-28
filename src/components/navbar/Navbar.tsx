import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import { MoonFill, CaretDownFill, CaretUpFill, SunFill, GearFill } from 'react-bootstrap-icons';
import Backdrop from '../common/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import * as jdenticon from 'jdenticon';

type NavbarProps = {
  isHome?: boolean;
  isLoggedIn?: boolean;
  buttonsEnabled?: boolean;
  switchTheme?: any;
  theme?: string
}

const Navbar = (props: NavbarProps) => {

  const [dropdownToggled, setDropdownToggled] = useState(false);

  const jdenticon_config = {
    hues: [260],
    lightness: {
      color: [0.35, 0.44],
      grayscale: [0.35, 0.45]
    },
    saturation: {
      color: 1.00,
      grayscale: 1.00
    },
    backColor: "#0000"
  };

  jdenticon.configure(jdenticon_config);

  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {

    setName(localStorage.getItem('name')?.split(' ')[0] as string);

    const svgString = jdenticon.toSvg(localStorage.getItem('email'), 64);
    const svg = new Blob([svgString], { type: "image/svg+xml" });
    setUrl(URL.createObjectURL(svg));
  }, [])

  return (
    <nav className={styles.navbar}>
      <a href='/'><img src='/logo.svg' className={styles.logo} alt={'mypass'} /></a>
      {props.buttonsEnabled &&
        <>
          <div className={styles.buttons}>
            <button className={styles.theme} onClick={props.switchTheme} aria-label='theme'>{props.theme === 'light' ? <MoonFill /> : <SunFill />}</button>
            <div className={styles.profile}>
              <button onClick={() => setDropdownToggled(!dropdownToggled)}>
                <div className={styles.profilePicture}>
                  <img src={url} alt='profile' />
                </div>
                <span>{name}</span> {dropdownToggled ? <CaretUpFill /> : <CaretDownFill />}
              </button>
              {dropdownToggled &&
                <>
                  <Backdrop action={() => setDropdownToggled(false)} transparent={true} />
                  <div className={styles.dropdown}>
                    <a><GearFill /> Settings</a>
                    <a href='/logout'><FontAwesomeIcon icon={faSignOut} />Logout</a>
                  </div>
                </>
              }
            </div>
          </div>
        </>
      }
      {
        props.isHome &&
        <div className={styles.buttons}>
          {!props.isLoggedIn ?
            <>
              <a href='/login' className={styles.auth}>Login</a>
              <a href='/register' className={styles.auth}>Sign up</a>
            </>
            :
            <a href='/app' className={styles.auth}>Open vault</a>
          }

        </div>
      }
    </nav >
  )
}

Navbar.defaultProps = {
  isHome: false,
  isLoggedIn: false,
  buttonsEnabled: false,
  theme: 'light',
}

export default Navbar;