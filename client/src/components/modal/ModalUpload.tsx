import './ModalUpload.scss';
import { CloudUpload } from 'react-bootstrap-icons';

const ModalUpload = () => {
  return (
    <div className='Modal__Upload'>
      <button className='Modal__Upload__Image'>
        <CloudUpload />
        Upload Logo
      </button>
      <span>OR</span>
      <div>
        <button className='Modal__Upload__Fetch'>Fetch favicon from website</button>
        <span className='Modal__Upload__Fetch__Requirement'>Website URL is required to fetch</span>
      </div>
    </div>
  )
}

export default ModalUpload;