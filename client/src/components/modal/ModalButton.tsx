import './ModalButton.scss';

type ModalButtonProps = {
  text: string;
  onClick: any;
  filled: boolean;
  submit: boolean,
}

const ModalButton = (props: ModalButtonProps) => {
  return props.onClick ?
    <button type={props.submit ? 'submit' : 'button'} className={`Modal__Button${props.filled ? ' Modal__Button__Filled' : ''}`} onClick={props.onClick}>{props.text}</button>
    :
    <button type={props.submit ? 'submit' : 'button'} className={`Modal__Button${props.filled ? ' Modal__Button__Filled' : ''}`}>{props.text}</button>
}

ModalButton.defaultProps = {
  onClick: false,
  filled: false,
  submit: false,
}

export default ModalButton;