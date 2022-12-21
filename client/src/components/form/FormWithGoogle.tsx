import './FormWithGoogle.scss';

type FormWithGoogleProps = {
  text: string;
}

const FormWithGoogle = (props: FormWithGoogleProps) => {
  return (
    <div className='FormWithGoogle'>
      <img src='icons/Google.png' alt='Google' />
      <span>{props.text}</span>
    </div>
  )
}

export default FormWithGoogle;