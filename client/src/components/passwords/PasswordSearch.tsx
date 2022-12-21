import { Search } from 'react-bootstrap-icons';
import './PasswordSearch.scss';

type PasswordSearchProps = {
  search: any;
}

const PasswordSearch = (props: PasswordSearchProps) => {
  return (
    <div className='PasswordSearch'>
      <input
        placeholder='Search passwords'
        className='PasswordSearch__Input'
        onChange={props.search}
      />
      <div className='PasswordSearch__Icon'>
        <Search />
      </div>
    </div>
  )
}

export default PasswordSearch;