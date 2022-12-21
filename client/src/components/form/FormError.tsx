import './FormError.scss';

type FormErrorProps = {
  error: string;
  width?: number;
}

const FormError = (props: FormErrorProps) => {
  return (
    <div className='FormError' style={{ width: props.width }}>
      {props.error}
    </div>
  )
}

FormError.defaultProps = {
  width: '100%',
}

export default FormError;