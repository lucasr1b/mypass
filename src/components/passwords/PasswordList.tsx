import Password from "./Password";

const PasswordList = () => {

  const passwords = [
    {
      icon: 'Google.png',
      site: 'Google',
      email: 'lucas@lucasribeiro.co',
    },
    {
      icon: 'Google.png',
      site: 'Chess',
      email: 'lucas@lucasribeiro.co',
    },
    {
      icon: 'Google.png',
      site: 'Netflix',
      email: 'lucas@lucasribeiro.co',
    },
    {
      icon: 'Google.png',
      site: 'Spotify',
      email: 'lucas@lucasribeiro.co',
    },
    {
      icon: 'Google.png',
      site: 'YouTube',
      email: 'lucas@lucasribeiro.co',
    },
    {
      icon: 'Google.png',
      site: 'Instagram',
      email: 'lucas@lucasribeiro.co',
    },
    {
      icon: 'Google.png',
      site: 'GitHub',
      email: 'lucas@lucasribeiro.co',
    },
  ]

  return (
    <div className='Password__List'>
      {passwords.map(password =>
        <Password password={password} />
      )}
    </div>
  )
}

export default PasswordList;