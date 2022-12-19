import { useEffect, useState } from 'react';
import { Password } from '../../utils/types';
import PasswordItem from './PasswordItem';
import { API_URL, axiosConfig } from '../../utils/constants';
import axios from 'axios';
import ViewPasswordModal from '../modal/view/ViewPasswordModal';

type PasswordListProps = {
  passwords: Password[];
  setPasswordList: any;
  isSearching: boolean;
  filteredSearch: Password[];
}

const PasswordList = (props: PasswordListProps) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);
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

  const closeModal = () => {
    setIsModalOpened(false);
    setPassword({});
  }

  const openModal = (password: Password) => {
    setIsModalOpened(true);
    setPassword(password);
  }

  if (isLoading) return (
    <p>Loading...</p>
  )

  if (!props.passwords) return <p>Unable to fetch passwords.</p>

  return (
    <div className='Password__List'>
      <div className='Password__List__Wrapper'>
        {props.passwords && (props.isSearching ? props.filteredSearch : props.passwords).map((password, index) =>
          <PasswordItem key={index} password={password} onClick={() => openModal(password)} />
        )}
      </div>
      {isModalOpened && <ViewPasswordModal closeModal={closeModal} password={password} passwords={props.passwords} setPasswordList={props.setPasswordList} />}
    </div>
  )
}

export default PasswordList;