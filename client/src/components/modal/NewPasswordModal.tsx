import { CloudUpload, X } from 'react-bootstrap-icons';
import FormInput from '../form/FormInput';
import './NewPasswordModal.scss';
import Backdrop from '../common/Backdrop';
import { axiosConfig } from '../../utils/constants';
import axios from 'axios';

const NewPasswordModal = ({ closeModal }: any) => {

  const addNewPassword = async (e: any) => {
    e.preventDefault();

    const { identifier, url, details, password } = document.forms[0];

    const data = {
      identifier: identifier.value,
      url: url.value,
      details: details.value,
      password: password.value,
    };

    await axios.post('http://localhost:5000/api/passwords/new', data, axiosConfig)
      .then(() => {
        closeModal();
      })
      .catch((res) => {
        console.log(res.response.data.error);
      })
  }

  return (
    <>
      <Backdrop action={closeModal} />
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
        <form className='Modal__Form' onSubmit={addNewPassword}>
          <div className='Modal__Form__Inputs'>
            <FormInput label='Identifier' small={true} name='identifier' />
            <FormInput label='Website URL' small={true} name='url' />
            <FormInput label='Username or email' small={true} name='details' />
            <FormInput label='Password' type='password' small={true} name='password' />
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