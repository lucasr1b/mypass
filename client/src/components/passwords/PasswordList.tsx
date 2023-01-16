import { useEffect, useState } from 'react';
import { Password } from '../../utils/types';
import PasswordItem from './PasswordItem';
import { API_URL, axiosConfig } from '../../utils/constants';
import axios from 'axios';
import ViewPasswordModal from '../modal/view/ViewPasswordModal';
import styles from './PasswordList.module.scss';
import UpdatePasswordModal from '../modal/update/UpdatePasswordModal';

type PasswordListProps = {
  passwords: Password[];
  setPasswordList: any;
  isSearching: boolean;
  filteredSearch: Password[];
}

const PasswordList = (props: PasswordListProps) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isViewPasswordModalOpened, setIsViewPasswordModalOpened] = useState(false);
  const [isUpdatePasswordModalOpened, setIsUpdatePasswordModalOpened] = useState(false);
  const [password, setPassword] = useState({});

  useEffect(() => {
    const fetchPasswords = async () => {
      await axios.get(`${API_URL}/passwords`, axiosConfig)
        .then((res) => {
          props.setPasswordList(res.data)
          props.setPasswordList(res.data);
          setIsLoading(false);
        })
        .catch((res) => {
          console.log(res.response.data.error);
        })
    }
    fetchPasswords();
  }, [])

  const closeViewPasswordModal = () => {
    setIsViewPasswordModalOpened(false);
    setPassword({});
  }

  const openViewPasswordModal = (password: Password) => {
    setIsViewPasswordModalOpened(true);
    setPassword(password);
  }

  const closeUpdatePasswordModal = () => {
    setIsUpdatePasswordModalOpened(false);
    setPassword({});
  }

  const openUpdatePasswordModal = (password: Password) => {
    setIsUpdatePasswordModalOpened(true);
    setPassword(password);
  }

  if (isLoading) return (
    <div className={styles.loading}>
      <img src='/loading.svg' />
    </div>
  )

  if (!props.passwords) return <p>Unable to fetch passwords.</p>

  return (
    <div className='PasswordList'>
      <div className='PasswordList__Wrapper'>
        {props.passwords && (props.isSearching ? props.filteredSearch : props.passwords).map((password, index) =>
          <PasswordItem key={index} password={password} onClick={() => openViewPasswordModal(password)} UpdatePassword={() => openUpdatePasswordModal(password)} passwords={props.passwords} setPasswordList={props.setPasswordList} />
        )}
      </div>
      {isViewPasswordModalOpened && <ViewPasswordModal closeModal={closeViewPasswordModal} password={password} />}
      {isUpdatePasswordModalOpened && <UpdatePasswordModal closeModal={closeUpdatePasswordModal} password={password} passwords={props.passwords} setPasswordList={props.setPasswordList} />}
    </div>
  )
}

export default PasswordList;