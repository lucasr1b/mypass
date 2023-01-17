import styles from './FormSubmitButton.module.scss';

type FormSubmitButtonProps = {
  text: string;
}

const FormSubmitButton = (props: FormSubmitButtonProps) => {
  return (
    <button type='submit' className={styles.submitButton}>{props.text}</button>
  )
}

export default FormSubmitButton;