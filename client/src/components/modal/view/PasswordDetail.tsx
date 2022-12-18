import './PasswordDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export type PasswordDetailProps = {
  value: string;
  type: string;
}

const PasswordDetail = (props: PasswordDetailProps) => {

  const [isHidden, setIsHidden] = useState(true);
  const [type, setType] = useState('password');

  const toggleHide = (e: any) => {
    isHidden ? setType('text') : setType('password');
    setIsHidden(!isHidden);
  }

  return (
    <div className='Password__Detail'>
      <input disabled type={props.type === 'password' ? type : props.type} value={props.value} />
      <div className='Password__Detail__Actions'>
        <div className={props.type === 'password' ? '' : 'Password__Detail__Action__Disabled'} onClick={toggleHide}><FontAwesomeIcon icon={isHidden ? faEyeSlash : faEye} /></div>
        <div><FontAwesomeIcon icon={faCopy} /></div>
      </div>
    </div>
  )

}

export default PasswordDetail;