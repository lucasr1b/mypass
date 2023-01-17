import { Search } from 'react-bootstrap-icons';
import styles from './PasswordSearch.module.scss';

type PasswordSearchProps = {
  search: any;
}

const PasswordSearch = (props: PasswordSearchProps) => {
  return (
    <div className={styles.search}>
      <input
        placeholder='Search passwords'
        className={styles.input}
        onChange={props.search}
      />
      <div className={styles.icon}>
        <Search />
      </div>
    </div>
  )
}

export default PasswordSearch;