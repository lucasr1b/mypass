import { useState } from 'react';
import Backdrop from '../../common/Backdrop';
import FormError from '../../form/FormError';
import FormInput from '../../form/FormInput';
import ModalButton from '../ModalButton';
import ModalHeader from '../ModalHeader';
import ModalUpload from '../ModalLogo';
import './UpdatePasswordModal.module.scss';
import '../../../styles/modalform.module.scss';
import axios from 'axios';
import { API_URL, axiosConfig } from '../../../utils/constants';

type UpdatePasswordModalProps = {
  closeModal: any,
  password: any,
  passwords: any,
  setPasswordList: any,
}

const UpdatePasswordModal = (props: UpdatePasswordModalProps) => {

  const [websiteURL, setWebsiteURL] = useState(props.password.url);
  const [logo, setLogo] = useState(props.password.logo);
  const [error, setError] = useState('');

  const handleWebsiteURL = (e: any) => {
    setWebsiteURL(e.target.value);
  }

  const updatePassword = async (e: any) => {
    e.preventDefault();

    const { identifier, url, details, password } = document.forms[0];

    const data = {
      id: props.password._id,
      identifier: identifier.value,
      url: websiteURL,
      details: details.value,
      password: password.value,
      logo,
    };

    await axios.post(`${API_URL}/passwords/update`, data, axiosConfig)
      .then((res) => {
        props.setPasswordList(props.passwords.map((password: any) => {
          return password._id === props.password._id ? res.data.updatedPassword : password
        }));
        props.closeModal();
      })
      .catch((res) => {
        setError(res.response.data.error);
      })
  }


  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className='UpdatePasswordModal'>
        <ModalHeader title={props.password.identifier} description={`Update the information to be safely stored in your vault.`} closeModal={props.closeModal} />
        <form className='ModalForm' onSubmit={updatePassword}>
          <div className='ModalForm__Inputs'>
            {error && <FormError error={error} width={300} margin={false} />}
            <FormInput label='Identifier' value={props.password.identifier} small={true} name='identifier' />
            <FormInput label='Website URL' value={props.password.url} small={true} name='url' onChange={handleWebsiteURL} />
            <FormInput label='Username or email' value={props.password.details} small={true} name='details' />
            <FormInput label='Password' type='password' value={props.password.password} small={true} name='password' />
          </div>
          <div className='ModalForm__Buttons'>
            <ModalUpload websiteURL={websiteURL} logo={logo} setLogo={setLogo} />
            <div className='ModalForm__Actions'>
              <ModalButton text='Cancel' onClick={props.closeModal} />
              <ModalButton text='Update' submit={true} filled={true} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdatePasswordModal;