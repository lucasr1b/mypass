import { CloudUpload, X } from 'react-bootstrap-icons';
import FormInput from '../form/FormInput';
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
          <div className='Modal__Close' onClick={closeModal}>
            <X />
          </div>
        </div>
        <form className='Modal__Form'>
          <div className='Modal__Form__Inputs'>
            <FormInput label={'Identifier'} small={true} />
            <FormInput label={'Website URL'} small={true} />
            <FormInput label={'Username or email'} small={true} />
            <FormInput label={'Password'} small={true} />
          </div>
          <div className='Modal__Form__Buttons'>
            <div className='Modal__Form__Images'>
              <button className='Modal__Form__Upload'>
                <CloudUpload />
                Upload Logo
              </button>
              <span>OR</span>
              <div>
                <button className='Modal__Form__Fetch'>Fetch favicon from website</button>
                <span className='Modal__Form__Fetch__Requirement'>Website URL is required to fetch</span>
              </div>
            </div>
            <div className='Modal__Form__Actions'>
              <button className='Modal__Form__Cancel' onClick={closeModal}>Cancel</button>
              <button className='Modal__Form__Save' type='submit'>Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPasswordModal;