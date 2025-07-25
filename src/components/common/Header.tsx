import { useState } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';

import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import './Header.css';

import Button from 'components/common/Button';

interface navItem {
  id: string;
  label: string;
  icon: React.ReactElement;
  to: string;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const navItems: navItem[] = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 bg-gray-800 text-white z-30">
      {/* PC Menu */}
      <div className="container px-4 mx-auto flex justify-between items-center h-14">
        <div>
          <Link to="/" className="text-xl font-bold">
            Lean Canvas
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navItems.map(item => (
            <NavLink key={item.id} to={item.to} className="hover:text-gray-300">
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars />
        </button>
        <Button
          className="hidden md:block"
          onClick={() => {
            navigate('/');
          }}
        >
          홈으로 돌아가기
        </Button>
      </div>

      {/* Mobile Menu */}
      <aside
        className={`
          fixed top-0 right-0 w-64 h-full bg-gray-800 z-50
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden transform transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {navItems.map(item => (
            <NavLink key={item.id} to={item.to} className="hover:text-gray-300">
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default Header;

/*
const Header: React.FC = () => {
  const navigate = useNavigate();

  const navItems: navitem[] = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 bg-gray-800 text-white z-30">
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li>
      </ul>

      <ul>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>

      <ul>
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
*/
