import React, { useState } from 'react';
import styles from './burgerMenu.module.css';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}>
      <span className={styles.burger} onClick={toggleMenu}>
        ≡
      </span>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
