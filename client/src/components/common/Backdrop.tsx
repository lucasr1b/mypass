import styles from './Backdrop.module.scss';

type BackdropProps = {
  action: any;
  transparent: boolean;
}

const Backdrop = (props: BackdropProps) => {
  return <div className={`${styles.overlay}${props.transparent ? styles.transparentOverlay : ''}`} onClick={props.action}></div>
}

Backdrop.defaultProps = {
  transparent: false,
}


export default Backdrop;