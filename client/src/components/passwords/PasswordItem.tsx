import { Password } from '../../utils/types';
import './PasswordItem.scss';
import { ChevronRight } from 'react-bootstrap-icons';

type PasswordProps = {
	password: Password,
	onClick: any;
}

const PasswordItem = (props: PasswordProps) => {
	return (
		<div className='PasswordItem' onClick={props.onClick}>
			<img src={props.password.logo} alt={props.password.logo} />
			<div className='PasswordItem__Details'>
				<span className='PasswordItem__Details__Identifier'>{props.password.identifier}</span>
				<span className='PasswordItem__Details__Email'>{props.password.details}</span>
			</div>
			<div className='PasswordItem__View'>
				<ChevronRight />
			</div>
		</div>
	);
};

export default PasswordItem;
