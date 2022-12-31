import { Password } from '../../utils/types';
import './PasswordItem.scss';
import { ThreeDotsVertical } from 'react-bootstrap-icons';

type PasswordProps = {
	password: Password,
	onClick: any;
}

const PasswordItem = (props: PasswordProps) => {

	const handleOptions = (e: any) => {
		e.preventDefault();

		console.log('Hello World');
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
			<div className='PasswordItem__Actions' onClick={handleOptions}>
				<ThreeDotsVertical />
			</div>
		</div>
	);
};

export default PasswordItem;
