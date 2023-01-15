import FormInput from '../../form/FormInput';
import './NewPasswordModal.scss';
import Backdrop from '../../common/Backdrop';
import { API_URL, axiosConfig } from '../../../utils/constants';
import axios from 'axios';
import ModalHeader from './../ModalHeader';
import ModalUpload from '../ModalLogo';
import ModalButton from './../ModalButton';
import { useState } from 'react';
import FormError from '../../form/FormError';
import '../ModalForm.scss';

type NewPasswordModalProps = {
  closeModal: any,
  addPassword: any,
}

const NewPasswordModal = (props: NewPasswordModalProps) => {

  const [websiteURL, setWebsiteURL] = useState('');
  const [logo, setLogo] = useState('http://localhost:3000/icons/default.png');
  const [error, setError] = useState('');

  const addNewPassword = async (e: any) => {
    e.preventDefault();

    const { identifier, url, details, password } = document.forms[0];

    const data = {
      identifier: identifier.value,
      url: url.value,
      details: details.value,
      password: password.value,
      logo,
    };

    await axios.post(`${API_URL}/passwords/new`, data, axiosConfig)
      .then((res) => {
        props.addPassword(res.data);
        props.closeModal();
      })
      .catch((res) => {
        setError(res.response.data.error);
      })
  }

  const handleWebsiteURL = (e: any) => {
    setWebsiteURL(e.target.value);
  }

  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className='NewPasswordModal'>
        <ModalHeader title='Add new password' description='Add a new password to be safely stored in your vault.' closeModal={props.closeModal} />
        <form className='ModalForm' onSubmit={addNewPassword}>
          <div className='ModalForm__Inputs'>
            {error && <FormError error={error} width={300} margin={false} />}
            <FormInput label='Identifier' small={true} name='identifier' />
            <FormInput label='Website URL' small={true} name='url' onChange={handleWebsiteURL} />
            <FormInput label='Username or email' small={true} name='details' />
            <FormInput label='Password' type='password' small={true} name='password' />
          </div>
          <div className='ModalForm__Buttons'>
            <ModalUpload websiteURL={websiteURL} logo={logo} setLogo={setLogo} />
            <div className='ModalForm__Actions'>
              <ModalButton text='Cancel' onClick={props.closeModal} />
              <ModalButton text='Save' submit={true} filled={true} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPasswordModal;