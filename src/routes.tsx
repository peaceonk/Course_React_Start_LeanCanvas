import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';

// Router
// import Home from './pages/Home';
// import About from './pages/About';
import Contact from './pages/Contact';
import CanvasDetail from './pages/CanvasDetail';
import ErrorPage from './pages/ErrorPage';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// createBrowserRouter의 두 번째 인자로 fallbackElement 추가
export const customRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'canvases/:id', element: <CanvasDetail /> },
    ],
    hydrateFallbackElement: <div>Loading...</div>,
  },
]);
