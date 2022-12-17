import './Backdrop.scss';

export type BackdropProps = {
  action: any;
  transparent: boolean;
}

const Backdrop = (props: BackdropProps) => {
  return <div className={`Backdrop${props.transparent ? ' Backdrop__Transparent' : ''}`} onClick={props.action}></div>
}

Backdrop.defaultProps = {
  transparent: false,
}


export default Backdrop;