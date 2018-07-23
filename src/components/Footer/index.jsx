import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => (
  <header>
    <Navbar fixedBottom collapseOnSelect>
      <Navbar.Header className="text-center" style={{ width: '100%' }}>
        <Navbar.Brand>
          <span style={{ width: '100%' }}>&#169; by <a target="_blank" href="https://github.com/nhulongctk35">longntran</a></span>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  </header>
);

export default Footer;
