import Backdrop from '../../common/Backdrop';
import ModalButton from '../ModalButton';
import ModalHeader from '../ModalHeader';
import modalStyles from '../../styles/common/modal.module.scss';
import styles from './SettingsModal.module.scss';

type SettingsModalProps = {
  closeModal: any,
}

const SettingsModal = (props: SettingsModalProps) => {
  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className={styles.modal}>
        <ModalHeader title='Add new password' description='Add a new password to be safely stored in your vault.' closeModal={props.closeModal} />
        <div>
          <span>Settings</span>
        </div>
        <div className={modalStyles.actions}>
          <ModalButton text='Cancel' onClick={props.closeModal} />
          <ModalButton text='Save' submit={true} filled={true} />
        </div>
      </div>
    </>
  )
}

export default SettingsModal;