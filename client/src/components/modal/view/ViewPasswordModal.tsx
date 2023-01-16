import styles from './ViewPasswordModal.module.scss';
import Backdrop from '../../common/Backdrop';
import ModalHeader from '../ModalHeader';
import PasswordDetail from './PasswordDetail';
import ModalButton from '../ModalButton';
import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { API_URL, axiosConfig } from '../../../utils/constants';

type ViewPasswordModalProps = {
  closeModal: any;
  password: any;
}

const ViewPasswordModal = (props: ViewPasswordModalProps) => {

  const [date, setDate] = useState('');


  useEffect(() => {
    if (props.password.createdAt === props.password.updatedAt)
      setDate(`Created on ${moment(props.password.createdAt).format('Do of MMM YYYY')}`);
    else setDate(`Last updated on ${moment(props.password.updatedAt).format('Do of MMM YYYY')}`);
  }, [date, props.password])

  return (
    <>
      <Backdrop action={props.closeModal} />
      <div className={styles.modal}>
        <ModalHeader title={props.password.identifier} description={date} closeModal={props.closeModal} />
        <div className={styles.details}>
          <PasswordDetail type='text' value={props.password.details} />
          <PasswordDetail type='password' value={props.password.password} />
        </div>
        <div className={styles.actions}>
          <ModalButton text='Close' onClick={props.closeModal} />
        </div>
      </div>
    </>
  )
}

export default ViewPasswordModal;