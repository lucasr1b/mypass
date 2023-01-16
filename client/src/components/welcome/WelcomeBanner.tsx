import './WelcomeBanner.module.scss';

const WelcomeBanner = ({ openModal }: any) => {
  return (
    <div className='WelcomeBanner'>
      <img src='welcome.svg' alt={'Welcome'} />
      <div className='WelcomeBanner__Content'>
        <h1>Welcome to your vault!</h1>
        <span>You can safely store passwords in your vault and keep them synchronized across all of your devices.</span>
        <button onClick={openModal}>Add a new password</button>
      </div>
    </div>
  )
}

export default WelcomeBanner;