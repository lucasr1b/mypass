import { Search } from 'react-bootstrap-icons';
import './PasswordsHeader.scss';
import { Password } from './PasswordList';
import { useEffect, useState } from 'react';

export type PasswordsHeaderProps = {
	passwords: Password[];
	setIsSearching: any;
	setFilteredSearch: any;
	filteredSearch: Password[];
}

const PasswordsHeader = (props: PasswordsHeaderProps) => {

	const search = (searchQuery: string) => {
		return props.passwords.filter(password => {
			return (
				password.identifier.toLowerCase().includes(searchQuery.toLowerCase()) ||
				password.details.toLowerCase().includes(searchQuery.toLowerCase())
			)
		})
	}

	const handleSearch = (e: any) => {
		const searchQuery = e.target.value;

		if (searchQuery == '') {
			props.setIsSearching(false);
			props.setFilteredSearch([]);
		} else {
			props.setFilteredSearch(search(searchQuery));
			props.setIsSearching(true);
		}
	}

	return (
		<div className='Passwords__Header'>
			<span>22 passwords</span>
			<div className='Passwords__Search'>
				<input
					placeholder='Search passwords'
					className='Passwords__Search__Input'
					onChange={handleSearch}
				/>
				<div className='Passwords__Search__Icon'>
					<Search />
				</div>
			</div>
		</div>
	);
};

export default PasswordsHeader;
