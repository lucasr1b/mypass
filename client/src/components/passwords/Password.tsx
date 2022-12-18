import './Password.scss';
import { ChevronRight } from 'react-bootstrap-icons';

export type PasswordProps = {
	password: {
		identifier: string;
		url: string;
		details: string;
		password: string;
		logo: string;
	}
}

const Password = (props: PasswordProps) => {
	return (
		<div className='Password'>
			<img src='icons/Google.png' alt={props.password.logo} />
			<div className='Password__Details'>
				<span className='Password__Details__Site'>{props.password.identifier}</span>
				<span className='Password__Details__Email'>{props.password.details}</span>
			</div>
			<div className='Password__View'>
				<ChevronRight />
			</div>
		</div>
	);
};

export default Password;
