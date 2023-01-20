import styles from './FormSubmitButton.module.scss';

type FormSubmitButtonProps = {
  text: string;
  submitted: boolean;
}

const FormSubmitButton = (props: FormSubmitButtonProps) => {
  return props.submitted ?
    <button type='submit' className={`${styles.submitButton} ${styles.submitted}`}>{props.text}</button>
    :
    <button type='submit' className={styles.submitButton}>{props.text}</button>

}

export default FormSubmitButton;