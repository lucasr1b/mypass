import { useState } from 'react';
import { Password } from '../../utils/types';
import './PasswordItem.module.scss';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import Backdrop from '../common/Backdrop';
import { API_URL, axiosConfig } from '../../utils/constants';
import axios from 'axios';

type PasswordProps = {
	password: Password,
	onClick: any;
	passwords: any;
	setPasswordList: any;
	UpdatePassword: any;
}

const PasswordItem = (props: PasswordProps) => {

	const [dropdownToggled, setDropdownToggled] = useState(false);

	const handleOptions = () => {
		setDropdownToggled(!dropdownToggled)
	}

	const deletePassword = async (id: string) => {
		await axios.post(`${API_URL}/passwords/delete`, { id }, axiosConfig);
		props.setPasswordList(props.passwords.filter((password: any) => password._id !== id))
		handleOptions();
	}

	const UpdatePassword = () => {
		setDropdownToggled(false);
		props.UpdatePassword();
	}

	return (
		<div className='PasswordItem'>
			<div className='PasswordItem__Info' onClick={props.onClick}>
				<img src={props.password.logo} alt={props.password.logo} />
				<div className='PasswordItem__Details'>
					<span className='PasswordItem__Details__Identifier'>{props.password.identifier}</span>
					<span className='PasswordItem__Details__Email'>{props.password.details}</span>
				</div>
			</div>
			<div className='PasswordItem__Actions'>
				<div className='PasswordItem__Actions__More' onClick={handleOptions}>
					<ThreeDotsVertical />
				</div>
				{dropdownToggled &&
					<>
						<Backdrop action={() => setDropdownToggled(false)} transparent={true} />
						<div className='PasswordItem__Actions__Dropdown'>
							<button onClick={UpdatePassword}>Edit</button>
							<button onClick={() => deletePassword(props.password._id)}>Delete</button>
						</div></>
				}
			</div>
		</div>
	);
};

export default PasswordItem;
