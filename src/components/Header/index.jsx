import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
          <LinkContainer to="/jobs">
            <NavItem eventKey={1}>Jobs</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
