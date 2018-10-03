import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav nav--fix-top" id="nav">
      <Link to="/" className="nav__brand">
        NFQ Da Nang
      </Link>
      <ul className="list-items">
        <li>
          <Link to="/nasa-items" className="nav__link">
            Items
          </Link>
        </li>
        <li>
          <Link to="/nasa-search" className="nav__link">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
