import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import App from './App.tsx';

// CSS Styling
// import AppCssModules from './AppCssModules';
// import AppStyled from './AppStyled';
// import AppTailwindCss from './AppTailwindCss';
// import AppMaterialUi from './AppMaterialUi';

import CustomRouterProvider from './components/Provider/CustomRouterProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AppCssModules /> */}
    {/* <AppStyled /> */}
    {/* <AppTailwindCss /> */}
    {/* <AppMaterialUi /> */}
    <CustomRouterProvider />
  </StrictMode>,
);
