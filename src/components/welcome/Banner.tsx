import './Banner.scss';

const Banner = () => {
  return (
    <div className='Banner'>
      <img src='welcome.svg' />
      <div className='Banner__Content'>
        <h1>Welcome to your vault!</h1>
        <span>You can safely store passwords in your vault and keep them synchronized across all of your devices.</span>
        <button>Add a new password</button>
      </div>
    </div>
  )
}

export default Banner;