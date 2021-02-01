import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, Dropdown,NavDropdown,Form,Button,FormControl,InputGroup,DropdownButton} from 'react-bootstrap'
import headerStyles from '../components/header.module.css';
const Header = ({ siteTitle }) => (
  <header
    style={{
     
      marginBottom: `1.45rem`,
    }}
  >
 <Navbar collapseOnSelect expand="lg" >
  <Navbar.Brand style={{fontSize: '40px',
    fontWeight: 700,
    marginRight: '62px'}} href="#home" className={headerStyles.text}><span className={headerStyles.italic}>The</span> Tally</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className={headerStyles.links} id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{marginRight:'40px',color:'black'}} href="#features">Browse by age</Nav.Link>
      <Nav.Link href="#pricing" style={{marginRight:'40px',color:'black'}}>Browse by category</Nav.Link>
      <Nav.Link href="#pricing" style={{marginRight:'40px',color:'black'}}>Blog</Nav.Link>
      
    </Nav>
    <Nav className="mr-auto">
      <Nav.Link href="#deets" style={{marginRight:'40px',color:'black'}}>Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes" style={{marginRight:'40px',color:'black'}}>
        Register
      </Nav.Link>
      <NavDropdown title="Sydney" id="dropdown-basic" style={{marginRight:'40px',color:'black'}}>
        <NavDropdown.Item href="#action/3.1">Melbourne</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Perth</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  <Form inline>
      <Button variant="outline-primary">Search</Button>
    </Form>
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
