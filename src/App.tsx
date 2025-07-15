import './App.css';

// import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

function App() {
  // const [count, setCount] = useState(0);
  //const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE;

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
