import { CloudUpload, X } from 'react-bootstrap-icons';
import ModalTextInput from './ModalTextInput';
import './NewPasswordModal.scss';

const NewPasswordModal = ({ closeModal }: any) => {
  return (
    <>
      <div className='Modal__Backdrop' onClick={closeModal}></div>
      <div className='New__Password__Modal'>
        <div className='Modal__Header'>
          <div className='Modal__Header__Info'>
            <h3>Add new password</h3>
            <span>Add a new password to be safely stored in your vault.</span>
          </div>
          <div className='Modal__Close'>
            <X />
          </div>
        </div>
        <form className='Modal__Form'>
          <div className='Modal__Form__Inputs'>
            <ModalTextInput label={'Identifier'} />
            <ModalTextInput label={'Website URL'} />
            <ModalTextInput label={'Username or email'} />
            <ModalTextInput label={'Password'} />
          </div>
          <div className='Modal__Form__Buttons'>
            <div className='Modal__Form__Images'>
              <button className='Modal__Form__Upload'>
                <CloudUpload />
                Upload Logo
              </button>
              <span>OR</span>
              <button className='Modal__Form__Fetch'>Fetch favicon from website</button>
            </div>
            <div className='Modal__Form__Actions'>
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPasswordModal;