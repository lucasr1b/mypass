import { Password } from '../../utils/types';
import './PasswordItem.scss';
import { ChevronRight } from 'react-bootstrap-icons';

type PasswordProps = {
	password: Password,
	onClick: any;
}

const PasswordItem = (props: PasswordProps) => {
	return (
		<div className='Password__Item' onClick={props.onClick}>
			<img src='icons/Google.png' alt={props.password.logo} />
			<div className='Password__Item__Details'>
				<span className='Password__Item__Details__Identifier'>{props.password.identifier}</span>
				<span className='Password__Item__Details__Email'>{props.password.details}</span>
			</div>
			<div className='Password__Item__View'>
				<ChevronRight />
			</div>
		</div>
	);
};

export default PasswordItem;
