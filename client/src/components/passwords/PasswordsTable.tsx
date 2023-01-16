import PasswordsHeader from './PasswordsHeader';
import PasswordList from './PasswordList';
import './PasswordsTable.module.scss';
import { useState } from 'react';
import { Password } from '../../utils/types';

type PasswordsTableProps = {
	passwords: Password[];
	setPasswordList: any;
}

const PasswordsTable = (props: PasswordsTableProps) => {

	const [isSearching, setIsSearching] = useState(false);
	const [filteredSearch, setFilteredSearch] = useState<Password[]>([]);

	return (
		<div className='PasswordsTable'>
			<PasswordsHeader passwords={props.passwords} setFilteredSearch={setFilteredSearch} setIsSearching={setIsSearching} isSearching={isSearching} filteredSearch={filteredSearch} />
			<PasswordList passwords={props.passwords} setPasswordList={props.setPasswordList} isSearching={isSearching} filteredSearch={filteredSearch} />
		</div>
	);
};

export default PasswordsTable;
