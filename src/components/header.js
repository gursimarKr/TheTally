import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, NavDropdown,Form,Button,FormControl} from 'react-bootstrap'
const Header = ({ siteTitle }) => (
  <header
    style={{
     
      marginBottom: `1.45rem`,
    }}
  >
   <Navbar  expand="xl">
  <Navbar.Brand href="#home">The Tally</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#home">BROWSE BY AGE</Nav.Link>
    <Nav.Link href="#home">BROWSE BY CATEGORY</Nav.Link>
    <Nav.Link href="#home">BLOG</Nav.Link>
    <Nav.Link href="#home">LOGIN</Nav.Link>
      <Nav.Link href="#link">REGISTER</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
