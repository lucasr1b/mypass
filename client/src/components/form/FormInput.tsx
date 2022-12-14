import './FormInput.scss';

export type FormInputTypes = {
  label: string;
  small?: boolean;
}

const FormInput = (props: FormInputTypes) => {
  return (
    <div className={`${'Form__Text__Input'}${props.small ? ' Input__Size__Small' : ''}`}>
      <input type='text' placeholder={props.label} />
      <label htmlFor=''>{props.label}</label>
    </div>
  )
}

export default FormInput;