// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-section">
          <ul className="nav-links">
            <li><Link to="/">مصادر الإعلام</Link></li>
          </ul>
        </div>
        <div className="navbar-center">
          <h1>نظام رصد وتحليل إعلامي</h1>
        </div>
        <div className="navbar-section">
          <ul className="nav-links">
            <li><Link to="/contents">محتوى الإعلام</Link></li>
            <li><Link to="/reports">التقارير</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
