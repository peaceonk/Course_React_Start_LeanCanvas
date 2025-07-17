import './App.css';

// import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Main } from 'components/common/';

function App() {
  // const [count, setCount] = useState(0);
  //const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE;

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
