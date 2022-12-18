import './ViewPasswordModal.scss';
import Backdrop from '../../common/Backdrop';
import ModalHeader from '../ModalHeader';

export type ViewPasswordModalProps = {
  closeModal: any;
}

const ViewPasswordModal = (props: ViewPasswordModalProps) => {
  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className='View__Password__Modal'>
        <ModalHeader title='Google' description='Last updated at...' closeModal={props.closeModal} />
      </div>
    </>
  )
}

export default ViewPasswordModal;