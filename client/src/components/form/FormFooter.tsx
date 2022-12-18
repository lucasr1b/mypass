import { Link } from 'react-router-dom';
import './FormFooter.scss';

type FormFooterProps = {
  text: string;
  action: string;
  link: string;
}

const FormFooter = (props: FormFooterProps) => {
  return (
    <div className='Form__Footer'>
      {props.text} <Link to={props.link}>{props.action}</Link>
    </div>
  )
}

export default FormFooter;
