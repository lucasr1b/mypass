import { ExclamationCircleFill, X } from 'react-bootstrap-icons';
import './FormError.scss';

type FormErrorProps = {
  error: string;
  width?: number;
}

const FormError = (props: FormErrorProps) => {
  return (
    <div className='FormError' style={{ width: props.width }}>
      <ExclamationCircleFill /><span>{props.error}</span>
    </div>
  )
}

FormError.defaultProps = {
  width: '100%',
}

export default FormError;