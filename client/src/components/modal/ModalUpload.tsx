import './ModalUpload.scss';
import { CloudUpload } from 'react-bootstrap-icons';

const ModalUpload = () => {
  return (
    <div className='ModalUpload'>
      <button className='ModalUpload__Image'>
        <CloudUpload />
        Upload Logo
      </button>
      <span>OR</span>
      <div>
        <button className='ModalUpload__Fetch'>Fetch favicon from website</button>
        <span className='ModalUpload__Fetch__Requirement'>Website URL is required to fetch</span>
      </div>
    </div>
  )
}

export default ModalUpload;