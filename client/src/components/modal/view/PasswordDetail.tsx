import './PasswordDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type PasswordDetailProps = {
  value: string;
  type: string;
}

const PasswordDetail = (props: PasswordDetailProps) => {

  const [isHidden, setIsHidden] = useState(true);
  const [type, setType] = useState('password');
  const [isCopied, setIsCopied] = useState(false);

  const toggleHide = () => {
    isHidden ? setType('text') : setType('password');
    setIsHidden(!isHidden);
  }

  const copy = (detail: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(detail);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500)
  }

  return (
    <div className='PasswordDetail'>
      <div className='PasswordDetail__Input'>
        <input disabled type={props.type === 'password' ? type : props.type} value={props.value} />
        <div className='PasswordDetail__Actions'>
          <div className={props.type === 'password' ? '' : 'PasswordDetail__Action__Disabled'} onClick={toggleHide}><FontAwesomeIcon icon={isHidden ? faEye : faEyeSlash} /></div>
          <div onClick={() => copy(props.value)}><FontAwesomeIcon icon={faCopy} /></div>
        </div>
      </div>
      {isCopied && <span>Copied to clipboard</span>}
    </div>
  )

}

export default PasswordDetail;