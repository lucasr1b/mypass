import './FormHeader.scss';

export type FormHeaderProps = {
  title: string;
  description: string;
}

const FormHeader = (props: FormHeaderProps) => {
  return (
    <div className='Form__Header'>
      <h3>{props.title}</h3>
      <span>{props.description}</span>
    </div>
  )
}

export default FormHeader;