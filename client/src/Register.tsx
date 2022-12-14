import { Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const Register = () => {
  return (
    <div>
      <Navbar buttonsEnabled={false} />
      Register, you can login <Link to='/login'>here</Link>
    </div>
  )
}

export default Register;