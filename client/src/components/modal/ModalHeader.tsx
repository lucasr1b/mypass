import './ModalHeader.scss';
import { X } from 'react-bootstrap-icons';

export type ModalHeaderProps = {
  title: string;
  description: string;
  closeModal: any;
}

const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div className='Modal__Header'>
      <div className='Modal__Header__Text'>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </div>
      <div className='Modal__Header__Close' onClick={props.closeModal}>
        <X />
      </div>
    </div>
  )
}

export default ModalHeader;