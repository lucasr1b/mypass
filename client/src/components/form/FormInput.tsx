import './FormInput.scss';

type FormInputTypes = {
  label: string;
  name: string;
  value?: string;
  small?: boolean;
  type?: string;
  onChange?: any;
}

const FormInput = (props: FormInputTypes) => {
  return (
    <div className={`${'FormInput'}${props.small ? ' FormInput__Small' : ''}`}>
      {props.onChange ?
        <input type={props.type} placeholder={props.label} value={props.value} name={props.name} autoComplete='off' onChange={props.onChange} />
        :
        <input type={props.type} placeholder={props.label} value={props.value} name={props.name} autoComplete='off' />
      }

      <label htmlFor={props.name}>{props.label}</label>
    </div>
  )
}

FormInput.defaultProps = {
  small: false,
  type: 'text',
  value: '',
}

export default FormInput;