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
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');

  const toggleHide = () => {
    isHidden ? setType('text') : setType('password');
    setIsHidden(!isHidden);
  }

  const copy = (detail: string) => {
    navigator.clipboard.writeText(detail);
    setTooltipText('Copied!');

  }

  const resetTooltipText = () => {
    setTooltipText('Copy to clipboard');
  }

  return (
    <div className='PasswordDetail'>
      <div className='PasswordDetail__Input'>
        <input disabled type={props.type === 'password' ? type : props.type} value={props.value} />
        <div className='PasswordDetail__Actions'>
          <div className={props.type === 'password' ? '' : 'PasswordDetail__Action__Disabled'} onClick={toggleHide}><FontAwesomeIcon icon={isHidden ? faEye : faEyeSlash} /></div>
          <div className="Tooltip">
            <div onClick={() => copy(props.value)} onMouseOut={resetTooltipText}>
              <span className='Tooltip__Text' id='tooltip'>{tooltipText}</span>
              <FontAwesomeIcon icon={faCopy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default PasswordDetail;