import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <div className="nav-container1">
        <div className="logo">
          <Link to="/">
<<<<<<< HEAD
            <img src="/BLogo.png" alt="Bravit Logo" className="logo-img" />
=======
            <img src="/logo2.png" alt="Bravit Logo" className="logo-img" />
>>>>>>> 9c84ac3 (Done)
          </Link>
        </div>

        <h1 className="Title">Bravit Pharmaceuticals Private Limited</h1>
      </div>

      <div className="nav-container">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link to="/about">About</Link>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/directors">Our Directors</Link></li>
                  <li><Link to="/inspiration">Our Inspiration</Link></li>
                  <li><Link to="/vision">Our Vision</Link></li>
                </ul>
              )}
            </li>
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
