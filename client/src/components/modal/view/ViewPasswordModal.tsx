import './ViewPasswordModal.scss';
import Backdrop from '../../common/Backdrop';
import ModalHeader from '../ModalHeader';
import PasswordDetails from './PasswordDetail';
import PasswordDetail from './PasswordDetail';
import ModalButton from '../ModalButton';
import { Password } from '../../passwords/PasswordList';

export type ViewPasswordModalProps = {
  closeModal: any;
  password: any;
}

const ViewPasswordModal = (props: ViewPasswordModalProps) => {
  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className='View__Password__Modal'>
        <ModalHeader title={props.password.identifier} description='Last updated at...' closeModal={props.closeModal} />
        <div className='View__Password__Modal__Details'>
          <PasswordDetail type='text' value={props.password.details} />
          <PasswordDetail type='password' value={props.password.password} />
        </div>
        <div className='View__Password__Modal__Actions'>
          <ModalButton text='Edit' />
          <ModalButton text='Delete' />
        </div>
      </div>
    </>
  )
}

export default ViewPasswordModal;