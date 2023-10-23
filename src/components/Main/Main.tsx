import { FC } from 'react';
import styles from './Main.module.css';
import Form from '../Form/Form';

const Main: FC = () => (
  <div className={styles.main}>
    <h1>Hello, world!</h1>
    <Form />
  </div>
);

export default Main;
