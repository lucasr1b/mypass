import PasswordsHeader from './PasswordsHeader';
import PasswordList, { Password } from './PasswordList';
import './Passwords.scss';
import { useState } from 'react';

export type PasswordsProps = {
	passwords: Password[];
	setPasswordList: any;
}

const Passwords = (props: PasswordsProps) => {

	const [isSearching, setIsSearching] = useState(false);
	const [filteredSearch, setFilteredSearch] = useState<Password[]>([]);

	return (
		<div className='Passwords'>
			<PasswordsHeader passwords={props.passwords} setFilteredSearch={setFilteredSearch} setIsSearching={setIsSearching} filteredSearch={filteredSearch} />
			<PasswordList passwords={props.passwords} setPasswordList={props.setPasswordList} isSearching={isSearching} filteredSearch={filteredSearch} />
		</div>
	);
};

export default Passwords;
