import styles from './FormInput.module.scss';

type FormInputTypes = {
  label: string;
  name: string;
  required?: boolean;
  value?: string;
  small?: boolean;
  type?: string;
  onChange?: any;
}

const FormInput = (props: FormInputTypes) => {
  return (
    <div className={`${styles.input} ${props.small ? styles.smallInput : ''}`}>
      {props.onChange ?
        <input type={props.type} placeholder={`${props.label} ${props.required ? '*' : ''}`} defaultValue={props.value} name={props.name} autoComplete='off' onChange={props.onChange} />
        :
        <input type={props.type} placeholder={`${props.label} ${props.required ? '*' : ''}`} defaultValue={props.value} name={props.name} autoComplete='off' />
      }

      <label htmlFor={props.name}>{`${props.label} ${props.required ? '*' : ''}`} </label>
    </div>
  )
}

FormInput.defaultProps = {
  small: false,
  required: false,
  type: 'text',
  value: '',
}

export default FormInput;