import { useState } from 'react';
import Backdrop from '../../common/Backdrop';
import FormError from '../../form/FormError';
import FormInput from '../../form/FormInput';
import ModalButton from '../ModalButton';
import ModalHeader from '../ModalHeader';
import ModalUpload from '../ModalUpload';
import './EditPasswordModal.scss';

type EditPasswordModalProps = {
  closeModal: any,
  password: any,
}

const EditPasswordModal = (props: EditPasswordModalProps) => {

  const [websiteURL, setWebsiteURL] = useState('');
  const [logo, setLogo] = useState('http://localhost:3000/icons/default.png');
  const [error, setError] = useState('');

  const editPassword = () => {
    console.log('Edited password');
  }

  const handleWebsiteURL = (e: any) => {
    setWebsiteURL(e.target.value);
  }


  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className='EditPasswordModal'>
        <ModalHeader title={`Editing ${props.password.identifier}`} description='Add a new password to be safely stored in your vault.' closeModal={props.closeModal} />
        <form className='ModalForm' onSubmit={editPassword}>
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
              <ModalButton text='Save' submit={true} filled={true} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditPasswordModal;