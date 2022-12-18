import PasswordsHeader from './PasswordsHeader';
import PasswordList, { Password } from './PasswordList';
import './Passwords.scss';

export type PasswordsProps = {
	passwords: Password[];
	setPasswordList: any;
}

const Passwords = (props: PasswordsProps) => {
	return (
		<div className='Passwords'>
			<PasswordsHeader />
			<PasswordList passwords={props.passwords} setPasswordList={props.setPasswordList} />
		</div>
	);
};

export default Passwords;
