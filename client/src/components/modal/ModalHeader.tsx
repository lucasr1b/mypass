import './ModalHeader.scss';
import { X } from 'react-bootstrap-icons';

type ModalHeaderProps = {
  title: string;
  description: string;
  closeModal: any;
}

const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div className='ModalHeader'>
      <div className='ModalHeader__Text'>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </div>
      <div className='ModalHeader__Close' onClick={props.closeModal}>
        <X />
      </div>
    </div>
  )
}

export default ModalHeader;