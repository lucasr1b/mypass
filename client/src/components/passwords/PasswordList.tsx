import { useEffect, useState } from 'react';
import Password from "./Password";
import { axiosConfig } from '../../utils/constants';
import axios from 'axios';

export type Password = {
  identifier: string;
  url: string;
  details: string;
  password: string;
  logo: string;
}

const PasswordList = () => {

  const [passwords, setPasswords] = useState<Password[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPasswords = async () => {
      await axios.get('http://localhost:5000/api/passwords', axiosConfig)
        .then((res) => {
          setPasswords(res.data)
          setIsLoading(false);
        })
        .catch((res) => {
          console.log(res.response.data.error);
        })
    }
    fetchPasswords();
  }, [])

  // const passwords = [
  //   {
  //     icon: 'Google.png',
  //     site: 'Google',
  //     email: 'lucas@lucasribeiro.co',
  //   },
  //   {
  //     icon: 'Google.png',
  //     site: 'Chess',
  //     email: 'lucas@lucasribeiro.co',
  //   },
  //   {
  //     icon: 'Google.png',
  //     site: 'Netflix',
  //     email: 'lucas@lucasribeiro.co',
  //   },
  //   {
  //     icon: 'Google.png',
  //     site: 'Spotify',
  //     email: 'lucas@lucasribeiro.co',
  //   },
  //   {
  //     icon: 'Google.png',
  //     site: 'YouTube',
  //     email: 'lucas@lucasribeiro.co',
  //   },
  //   {
  //     icon: 'Google.png',
  //     site: 'Instagram',
  //     email: 'lucas@lucasribeiro.co',
  //   },
  //   {
  //     icon: 'Google.png',
  //     site: 'GitHub',
  //     email: 'lucas@lucasribeiro.co',
  //   },
  // ]

  if (isLoading) return (
    <p>Loading...</p>
  )

  if (!passwords) return <p>Unable to fetch passwords.</p>

  return (
    <div className='Password__List'>
      {passwords && passwords.map((password, index) =>
        <Password key={index} password={password} />
      )}
    </div>
  )
}

export default PasswordList;