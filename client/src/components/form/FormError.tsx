import './FormError.scss';

type FormErrorProps = {
  error: string;
}

const FormError = (props: FormErrorProps) => {
  return (
    <div className='FormError'>
      {props.error}
    </div>
  )
}

export default FormError;