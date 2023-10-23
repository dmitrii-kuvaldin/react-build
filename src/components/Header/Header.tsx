import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header: FC = () => (
  <div className={styles.header}>
    <div className={styles.headerWrapper}>
      <h1>Header</h1>
      <ul className={styles.nav}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cards">Cards</Link></li>
        <li>Info</li>
        <li>Contacts</li>
      </ul>

    </div>
  </div>
);

export default Header;
