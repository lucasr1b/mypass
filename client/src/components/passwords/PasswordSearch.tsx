import { Search } from 'react-bootstrap-icons';

type PasswordSearchProps = {
  search: any;
}

const PasswordSearch = (props: PasswordSearchProps) => {
  return (
    <div className='Passwords__Search'>
      <input
        placeholder='Search passwords'
        className='Passwords__Search__Input'
        onChange={props.search}
      />
      <div className='Passwords__Search__Icon'>
        <Search />
      </div>
    </div>
  )
}

export default PasswordSearch;