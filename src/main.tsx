import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';

// CSS Styling
// import AppCssModules from './AppCssModules';
// import AppStyled from './AppStyled';
// import AppTailwindCss from './AppTailwindCss';
// import AppMaterialUi from './AppMaterialUi';

// Router
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CanvasDetail from './pages/CanvasDetail';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'canvases/:id',
        element: <CanvasDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AppCssModules /> */}
    {/* <AppStyled /> */}
    {/* <AppTailwindCss /> */}
    {/* <AppMaterialUi /> */}

    <RouterProvider router={router} />
  </StrictMode>,
);
