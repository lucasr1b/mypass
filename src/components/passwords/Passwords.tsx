import PasswordsHeader from './PasswordsHeader';
import Password from './Password';
import PasswordList from './PasswordList';
import './Passwords.scss';

const Passwords = () => {
	return (
		<div className='Passwords'>
			<PasswordsHeader />
			<PasswordList />
		</div>
	);
};

export default Passwords;
