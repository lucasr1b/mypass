import './ModalButton.scss';

export type ModalButtonProps = {
  text: string;
  onClick: any;
  filled: boolean;
}

const ModalButton = (props: ModalButtonProps) => {
  return props.onClick ?
    <button className={`Modal__Button${props.filled ? ' Modal__Button__Filled' : ''}`} onClick={props.onClick}>{props.text}</button>
    :
    <button className={`Modal__Button${props.filled ? ' Modal__Button__Filled' : ''}`}>{props.text}</button>
}

ModalButton.defaultProps = {
  onClick: false,
  filled: false,
}

export default ModalButton;