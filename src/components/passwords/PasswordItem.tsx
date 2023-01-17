import { useState } from 'react';
import { Password } from '../../utils/types';
import styles from './PasswordItem.module.scss';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import Backdrop from '../common/Backdrop';
import { axiosConfig } from '../../utils/constants';
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
		await axios.post(`api/passwords/delete`, { id }, axiosConfig);
		props.setPasswordList(props.passwords.filter((password: any) => password._id !== id))
		handleOptions();
	}

	const UpdatePassword = () => {
		setDropdownToggled(false);
		props.UpdatePassword();
	}

	return (
		<div className={styles.password}>
			<div className={styles.info} onClick={props.onClick}>
				<img src={props.password.logo} alt={props.password.logo} />
				<div className={styles.details}>
					<span className={styles.identifier}>{props.password.identifier}</span>
					<span className={styles.email}>{props.password.details}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<div className={styles.moreActions} onClick={handleOptions}>
					<ThreeDotsVertical />
				</div>
				{dropdownToggled &&
					<>
						<Backdrop action={() => setDropdownToggled(false)} transparent={true} />
						<div className={styles.dropdown}>
							<button onClick={UpdatePassword}>Edit</button>
							<button onClick={() => deletePassword(props.password._id)}>Delete</button>
						</div></>
				}
			</div>
		</div>
	);
};

export default PasswordItem;
