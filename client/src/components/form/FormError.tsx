import './FormError.scss';

export type FormErrorProps = {
  error: string;
}

const FormError = (props: FormErrorProps) => {
  return (
    <div className='Form__Error'>
      {props.error}
    </div>
  )
}

export default FormError;