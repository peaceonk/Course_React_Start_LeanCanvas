import { FC } from 'react';
import {
  // useNavigate,
  //  Link,
  NavLink,
} from 'react-router-dom';

export const Header: FC = () => {
  // const navigate = useNavigate();

  return (
    <header>
      <ul>
        {/* <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li> */}

        {/* <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}

        <NavLink
          to=""
          className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
        >
          Contact
        </NavLink>
      </ul>
    </header>
  );
};
