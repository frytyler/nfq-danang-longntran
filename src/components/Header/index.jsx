import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-fixed-top" id="nav">
      <Link to="/" className="navbar-brand">NFQ Da Nang</Link>
      <div className="menu">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/nasa-items" className="nav-link">Items</Link>
          </li>
          <li className="nav-item">
            <Link to="/nasa-search" className="nav-link">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
