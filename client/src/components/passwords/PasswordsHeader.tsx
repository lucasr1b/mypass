import styles from './PasswordsHeader.module.scss';
import { Password } from '../../utils/types';
import PasswordSearch from './PasswordSearch';

type PasswordsHeaderProps = {
	passwords: Password[];
	isSearching: boolean;
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

		if (searchQuery === '') {
			props.setIsSearching(false);
			props.setFilteredSearch([]);
		} else {
			props.setFilteredSearch(search(searchQuery));
			props.setIsSearching(true);
		}
	}

	return (
		<div className={styles.header}>
			<span>{
				props.isSearching ?
					props.filteredSearch.length + (props.filteredSearch.length > 1 || props.filteredSearch.length === 0 ? ' passwords' : ' password') :
					props.passwords.length + (props.passwords.length > 1 || props.passwords.length === 0 ? ' passwords' : ' password')
			}</span>
			<PasswordSearch search={handleSearch} />
		</div>
	);
};

export default PasswordsHeader;
