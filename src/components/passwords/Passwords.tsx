import PasswordsHeader from './PasswordsHeader';
import './Passwords.scss';
import Password from './Password';

const Passwords = () => {
	return (
		<div className='Passwords'>
			<PasswordsHeader />
			<Password />
		</div>
	);
};

export default Passwords;
