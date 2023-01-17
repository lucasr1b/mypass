import styles from './ModalButton.module.scss';

type ModalButtonProps = {
  text: string;
  onClick: any;
  filled: boolean;
  submit: boolean,
}

const ModalButton = (props: ModalButtonProps) => {
  return props.onClick ?
    <button type={props.submit ? 'submit' : 'button'} className={`${styles.button} ${props.filled ? styles.buttonFilled : ''}`} onClick={props.onClick}>{props.text}</button>
    :
    <button type={props.submit ? 'submit' : 'button'} className={`${styles.button} ${props.filled ? styles.buttonFilled : ''}`}>{props.text}</button>
}

ModalButton.defaultProps = {
  onClick: false,
  filled: false,
  submit: false,
}

export default ModalButton;