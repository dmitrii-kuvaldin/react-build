import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './layout.module.css';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';

const Layout: FC = () => (
  <div className="App">
    <Header />
    <BurgerMenu />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
