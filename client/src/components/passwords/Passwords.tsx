import PasswordsHeader from './PasswordsHeader';
import PasswordList from './PasswordList';
import './Passwords.scss';
import { useState } from 'react';
import { Password } from '../../utils/types';

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
