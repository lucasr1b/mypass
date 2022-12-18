import './ViewPasswordModal.scss';
import Backdrop from '../../common/Backdrop';
import ModalHeader from '../ModalHeader';
import PasswordDetails from './PasswordDetail';
import PasswordDetail from './PasswordDetail';
import ModalButton from '../ModalButton';
import { Password } from '../../passwords/PasswordList';
import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { axiosConfig } from '../../../utils/constants';

export type ViewPasswordModalProps = {
  closeModal: any;
  password: any;
}

const ViewPasswordModal = (props: ViewPasswordModalProps) => {

  const [date, setDate] = useState('');


  useEffect(() => {
    if (props.password.createdAt === props.password.updatedAt)
      setDate(`Created on ${moment(props.password.createdAt).format('Do of MMM YYYY')}`);
    else setDate(`Last updated on ${moment(props.password.updatedAt).format('Do of MMM YYYY')}`);
  }, [date])

  const deletePassword = async (id: string) => {
    await axios.post('http://localhost:5000/api/passwords/delete', { id }, axiosConfig);
    props.closeModal();
  }

  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className='View__Password__Modal'>
        <ModalHeader title={props.password.identifier} description={date} closeModal={props.closeModal} />
        <div className='View__Password__Modal__Details'>
          <PasswordDetail type='text' value={props.password.details} />
          <PasswordDetail type='password' value={props.password.password} />
        </div>
        <div className='View__Password__Modal__Actions'>
          <ModalButton text='Edit' />
          <ModalButton text='Delete' onClick={() => deletePassword(props.password._id)} />
        </div>
      </div>
    </>
  )
}

export default ViewPasswordModal;