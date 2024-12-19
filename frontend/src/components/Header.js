import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img
              src="/logo.png" /* Adjust this path if needed */
              alt="Bravit Logo"
              id="logo"
            />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
