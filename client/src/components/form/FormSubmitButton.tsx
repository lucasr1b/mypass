import './FormSubmitButton.scss';

type FormSubmitButtonProps = {
  text: string;
}

const FormSubmitButton = (props: FormSubmitButtonProps) => {
  return (
    <button type='submit' className='FormSubmitButton'>{props.text}</button>
  )
}

export default FormSubmitButton;