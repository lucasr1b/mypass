import './FormSubmitButton.scss';

type FormSubmitButtonProps = {
  text: string;
}

const FormSubmitButton = (props: FormSubmitButtonProps) => {
  return (
    <button type='submit' className='Form__Submit__Button'>{props.text}</button>
  )
}

export default FormSubmitButton;