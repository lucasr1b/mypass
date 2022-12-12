import './Password.scss';
import { ChevronRight } from 'react-bootstrap-icons';

export type PasswordProps = {
	password: {
		icon: string;
		site: string;
		email: string;
	}
}

const Password = (props: PasswordProps) => {
	return (
		<div className='Password'>
			<img src='icons/Google.png' />
			<div className='Password__Details'>
				<span className='Password__Details__Site'>{props.password.site}</span>
				<span className='Password__Details__Email'>{props.password.email}</span>
			</div>
			<div className='Password__View'>
				<ChevronRight />
			</div>
		</div>
	);
};

export default Password;
