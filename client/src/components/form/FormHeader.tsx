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
      <span>{props.description} {props.action && <a href={props.link}>{props.action}</a>}</span>
    </div>
  )
}

FormHeader.defaultProps = {
  action: '',
  link: ''
}

export default FormHeader;