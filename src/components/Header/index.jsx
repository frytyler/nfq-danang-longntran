import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: true,
    };
  }

  toggleNav = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  }

  render() {
    return (
      <header>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NFQ DaNang</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/jobs">Items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/nasa-search">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
