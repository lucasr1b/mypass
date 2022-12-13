import './ModalTextInput.scss';

const ModalTextInput = ({ label }: any) => {
  return (
    <div className='Modal__Text__Input'>
      <input type='text' placeholder={label} />
      <label htmlFor=''>{label}</label>
    </div>
  )
}

export default ModalTextInput;