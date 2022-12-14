import './FormWithGoogle.scss';

export type FormWithGoogleProps = {
  text: string;
}

const FormWithGoogle = (props: FormWithGoogleProps) => {
  return (
    <div className='Form__With__Google'>
      <img src='icons/Google.png' />
      <span>{props.text}</span>
    </div>
  )
}

export default FormWithGoogle;