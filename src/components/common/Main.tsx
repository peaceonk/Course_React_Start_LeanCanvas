import { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

export const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="container mx-auto px-4 py-16">{children}</main>;
};

export default Main;
