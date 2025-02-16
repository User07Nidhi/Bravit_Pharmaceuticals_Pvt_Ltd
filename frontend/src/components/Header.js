import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="nav-container1">
        <div className="logo">
          <Link to="/">
            <img src="/BLogo.png" alt="Bravit Logo" className="logo-img" />
          </Link>
        </div>
        <div>
          <h1 className="Title">Bravit Pharmaceuticals Private Limited</h1>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="nav-container">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
