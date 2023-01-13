import { useEffect, useState } from 'react';
import { Password } from '../../utils/types';
import PasswordItem from './PasswordItem';
import { API_URL, axiosConfig } from '../../utils/constants';
import axios from 'axios';
import ViewPasswordModal from '../modal/view/ViewPasswordModal';
import './PasswordList.scss';
import EditPasswordModal from '../modal/edit/EditPasswordModal';

type PasswordListProps = {
  passwords: Password[];
  setPasswordList: any;
  isSearching: boolean;
  filteredSearch: Password[];
}

const PasswordList = (props: PasswordListProps) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isViewPasswordModalOpened, setIsViewPasswordModalOpened] = useState(false);
  const [isEditPasswordModalOpened, setIsEditPasswordModalOpened] = useState(false);
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

  const closeEditPasswordModal = () => {
    setIsEditPasswordModalOpened(false);
    setPassword({});
  }

  const openEditPasswordModal = (password: Password) => {
    setIsEditPasswordModalOpened(true);
    setPassword(password);
  }

  if (isLoading) return (
    <div className='PasswordList__Loading'>
      <img src='/loading.svg' className='PasswordList__Loading' />
    </div>
  )

  if (!props.passwords) return <p>Unable to fetch passwords.</p>

  return (
    <div className='PasswordList'>
      <div className='PasswordList__Wrapper'>
        {props.passwords && (props.isSearching ? props.filteredSearch : props.passwords).map((password, index) =>
          <PasswordItem key={index} password={password} onClick={() => openViewPasswordModal(password)} editPassword={() => openEditPasswordModal(password)} passwords={props.passwords} setPasswordList={props.setPasswordList} />
        )}
      </div>
      {isViewPasswordModalOpened && <ViewPasswordModal closeModal={closeViewPasswordModal} password={password} />}
      {isEditPasswordModalOpened && <EditPasswordModal closeModal={closeEditPasswordModal} password={password} />}
    </div>
  )
}

export default PasswordList;