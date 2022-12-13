import { Plus } from "react-bootstrap-icons";
import './AddPasswordButton.scss';

const AddPassword = ({ openModal }: any) => {
  return (
    <div className='Add__Password__Button' onClick={openModal}>
      <Plus />
    </div>
  )
}

export default AddPassword;