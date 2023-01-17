import styles from './ModalHeader.module.scss';
import { X } from 'react-bootstrap-icons';

type ModalHeaderProps = {
  title: string;
  description: string;
  closeModal: any;
}

const ModalHeader = (props: ModalHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </div>
      <div className={styles.close} onClick={props.closeModal}>
        <X />
      </div>
    </div>
  )
}

export default ModalHeader;