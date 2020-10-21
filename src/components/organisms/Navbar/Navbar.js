import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar__link mb-0 py-3 h2" aria-label="Return to home page">
      Streaming Service
    </Link>
  </nav>
);

export default Navbar;
