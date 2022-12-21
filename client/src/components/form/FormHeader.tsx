import './FormHeader.scss';

type FormHeaderProps = {
  title: string;
  description: string;
}

const FormHeader = (props: FormHeaderProps) => {
  return (
    <div className='FormHeader'>
      <h3>{props.title}</h3>
      <span>{props.description}</span>
    </div>
  )
}

export default FormHeader;