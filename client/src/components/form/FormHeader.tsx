import { Link } from 'react-router-dom';
import './FormHeader.scss';

type FormHeaderProps = {
  title: string;
  description: string;
  action: string;
  link: string;
}

const FormHeader = (props: FormHeaderProps) => {
  return (
    <div className='FormHeader'>
      <h3>{props.title}</h3>
      <span>{props.description} {props.action && <Link to={props.link}>{props.action}</Link>}</span>
    </div>
  )
}

FormHeader.defaultProps = {
  action: '',
  link: ''
}

export default FormHeader;