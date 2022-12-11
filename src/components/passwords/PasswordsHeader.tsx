import { Search } from "react-bootstrap-icons";
import "./PasswordsHeader.scss";

const PasswordsHeader = () => {
	return (
		<div className='Passwords__Header'>
			<span>22 passwords</span>
			<div className='Password__Search'>
				<input
					placeholder='Search passwords'
					className='Password__Search__Input'
				/>
				<div className='Password__Search__Icon'>
					<Search />
				</div>
			</div>
		</div>
	);
};

export default PasswordsHeader;
