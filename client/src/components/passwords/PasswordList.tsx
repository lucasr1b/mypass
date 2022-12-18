import { useEffect, useState } from 'react';
import Password from "./Password";
import { axiosConfig } from '../../utils/constants';
import axios from 'axios';
import ViewPasswordModal from '../modal/view/ViewPasswordModal';

export type Password = {
  identifier: string;
  url: string;
  details: string;
  password: string;
  logo: string;
}

export type PasswordListProps = {
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
      await axios.get('http://localhost:5000/api/passwords', axiosConfig)
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
          <Password key={index} password={password} onClick={() => openModal(password)} />
        )}
      </div>
      {isModalOpened && <ViewPasswordModal closeModal={closeModal} password={password} />}
    </div>
  )
}

export default PasswordList;