import { ExclamationCircleFill, X } from 'react-bootstrap-icons';
import './FormError.scss';

type FormErrorProps = {
  error: string;
  width?: number;
  margin?: boolean;
}

const FormError = (props: FormErrorProps) => {
  return (
    <div className='FormError' style={{ width: props.width, marginBottom: (props.margin ? '10px' : '') }}>
      <div className='FormError__Icon'>
        <ExclamationCircleFill />
      </div>
      <span>{props.error}</span>
    </div>
  )
}

FormError.defaultProps = {
  width: '100%',
  margin: true,
}

export default FormError;