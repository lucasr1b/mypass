import './FormInput.scss';

type FormInputTypes = {
  label: string;
  name: string;
  small: boolean;
  type: string;
}

const FormInput = (props: FormInputTypes) => {
  return (
    <div className={`${'FormInput'}${props.small ? ' FormInput__Small' : ''}`}>
      <input type={props.type} placeholder={props.label} name={props.name} autoComplete='off' />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  )
}

FormInput.defaultProps = {
  small: false,
  type: 'text',
}

export default FormInput;