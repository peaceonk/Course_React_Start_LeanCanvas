import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { customRouter } from '../../routes';

const CustomRouterProvider: React.FC = () => {
  // 예시: 로딩 스피너, 글로벌 에러 핸들링 등 추가 가능
  return <RouterProvider router={customRouter} />;
};

export default CustomRouterProvider;
