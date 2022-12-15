import './FormInput.scss';

export type FormInputTypes = {
  label: string;
  name: string;
  small: boolean;
  type: string;
}

const FormInput = (props: FormInputTypes) => {
  return (
    <div className={`${'Form__Text__Input'}${props.small ? ' Input__Size__Small' : ''}`}>
      <input type={props.type} placeholder={props.label} name={props.name} />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  )
}

FormInput.defaultProps = {
  small: false,
  type: 'text',
}

export default FormInput;