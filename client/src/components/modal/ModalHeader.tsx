import './ModalHeader.scss';
import { X } from 'react-bootstrap-icons';

const ModalHeader = ({ closeModal }: any) => {
  return (
    <div className='Modal__Header'>
      <div className='Modal__Header__Text'>
        <h3>Add new password</h3>
        <span>Add a new password to be safely stored in your vault.</span>
      </div>
      <div className='Modal__Header__Close' onClick={closeModal}>
        <X />
      </div>
    </div>
  )
}

export default ModalHeader;