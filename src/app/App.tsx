import { FC } from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import Layout from '../layouts/Layout';
import Form from '../components/Form/Form';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Form />} />
      <Route path="cards" element={<Cards />} />
    </Route>
  </Routes>
);

export default App;
