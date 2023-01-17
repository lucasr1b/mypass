import { ExclamationCircleFill, X } from 'react-bootstrap-icons';
import styles from './FormError.module.scss';

type FormErrorProps = {
  error: string;
  width?: number;
  margin?: boolean;
}

const FormError = (props: FormErrorProps) => {
  return (
    <div className={styles.error} style={{ width: props.width, marginBottom: (props.margin ? '10px' : '') }}>
      <div className={styles.errorIcon}>
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