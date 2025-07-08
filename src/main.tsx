import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App.tsx'
//import AppCssModules from './AppCssModules';
//import AppStyled from './AppStyled';
//import AppTailwindCss from './AppTailwindCss';
import AppMaterialUi from './AppMaterialUi';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AppCssModules /> */}
    {/* <AppStyled /> */}
    {/* <AppTailwindCss /> */}
    <AppMaterialUi />
  </StrictMode>,
);
