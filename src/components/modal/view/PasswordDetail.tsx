import styles from './PasswordDetail.module.scss';
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
    <div className={styles.details}>
      <div className={styles.input}>
        <input disabled type={props.type === 'password' ? type : props.type} value={props.value} />
        <div className={styles.actions}>
          <div className={props.type === 'password' ? '' : styles.actionDisabled} onClick={toggleHide}><FontAwesomeIcon icon={isHidden ? faEye : faEyeSlash} /></div>
          <div className={styles.tooltip}>
            <div onClick={() => copy(props.value)} onMouseOut={resetTooltipText}>
              <span className={styles.tooltipText} id='tooltip'>{tooltipText}</span>
              <FontAwesomeIcon icon={faCopy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default PasswordDetail;