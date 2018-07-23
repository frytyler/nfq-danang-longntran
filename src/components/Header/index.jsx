import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => (
  <header>
    <Navbar staticTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">NFQ Danang</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="/jobs">
            <span>Jobs</span>
          </NavItem>
          <NavItem eventKey={2} href="/about">
            <span>About</span>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
