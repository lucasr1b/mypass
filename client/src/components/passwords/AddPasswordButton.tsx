import { Plus } from "react-bootstrap-icons";
import styles from './AddPasswordButton.module.scss';

const AddPassword = ({ openModal }: any) => {
  return (
    <div className={styles.add} onClick={openModal}>
      <Plus />
    </div>
  )
}

export default AddPassword;