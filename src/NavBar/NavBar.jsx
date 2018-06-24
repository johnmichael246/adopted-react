import React from 'react';
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap'

const NavBar = (props) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>PetFinder</a>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href='/home'>Home</NavItem>
        {props.isAuthenticated && <NavItem eventKey={1}  onClick={() => props.logout()} >Logout</NavItem>}
        {props.isAuthenticated && <NavItem eventKey={3} href='/profile'>Profile</NavItem>}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar