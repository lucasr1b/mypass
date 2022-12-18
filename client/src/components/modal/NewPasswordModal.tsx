import { CloudUpload, X } from 'react-bootstrap-icons';
import FormInput from '../form/FormInput';
import './NewPasswordModal.scss';
import Backdrop from '../common/Backdrop';
import { axiosConfig } from '../../utils/constants';
import axios from 'axios';
import ModalHeader from './ModalHeader';
import ModalUpload from './ModalUpload';
import ModalButton from './ModalButton';

export type NewPasswordModalProps = {
  closeModal: any,
  addPassword: any,
}

const NewPasswordModal = (props: NewPasswordModalProps) => {

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
      .then((res) => {
        props.addPassword(res.data);
        props.closeModal();
      })
      .catch((res) => {
        console.log(res.response.data.error);
      })
  }

  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className='New__Password__Modal'>
        <ModalHeader closeModal={props.closeModal} />
        <form className='Modal__Form' onSubmit={addNewPassword}>
          <div className='Modal__Form__Inputs'>
            <FormInput label='Identifier' small={true} name='identifier' />
            <FormInput label='Website URL' small={true} name='url' />
            <FormInput label='Username or email' small={true} name='details' />
            <FormInput label='Password' type='password' small={true} name='password' />
          </div>
          <div className='Modal__Form__Buttons'>
            <ModalUpload />
            <div className='Modal__Form__Actions'>
              <ModalButton text='Cancel' onClick={props.closeModal} />
              <ModalButton text='Save' filled={true} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPasswordModal;