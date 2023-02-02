import FormInput from '../../../form/FormInput';
import styles from './NewPasswordModal.module.scss';
import Backdrop from '../../../common/Backdrop';
import { axiosConfig } from '../../../../utils/constants';
import axios from 'axios';
import ModalHeader from '../../ModalHeader';
import ModalUpload from '../PasswordModalLogo';
import ModalButton from '../../ModalButton';
import { useState } from 'react';
import FormError from '../../../form/FormError';
import modalStyles from '../../../../styles/common/modal.module.scss';

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

    await axios.post(`api/passwords/new`, data, axiosConfig)
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
      <div className={styles.modal}>
        <ModalHeader title='Add new password' description='Add a new password to be safely stored in your vault.' closeModal={props.closeModal} />
        <form className={modalStyles.form} onSubmit={addNewPassword}>
          <div className={modalStyles.inputs}>
            {error && <FormError error={error} width={300} margin={false} />}
            <FormInput label='Identifier' small={true} required={true} name='identifier' />
            <FormInput label='Website URL' small={true} name='url' onChange={handleWebsiteURL} />
            <FormInput label='Username or email' small={true} required={true} name='details' />
            <FormInput label='Password' type='password' small={true} required={true} name='password' />
          </div>
          <div className={modalStyles.buttons}>
            <ModalUpload websiteURL={websiteURL} logo={logo} setLogo={setLogo} />
            <div className={modalStyles.actions}>
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