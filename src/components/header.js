import React from 'react'
import PropTypes from "prop-types"
import {navigate} from 'gatsby'
import {Navbar, Nav, Dropdown,NavDropdown,Form,Button,FormControl,InputGroup,DropdownButton} from 'react-bootstrap'
import headerStyles from '../components/header.module.css';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const header = () => {
  return (
    <div>
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
      <Button onClick={()=>navigate("/")} variant="outline-primary"><FaSearch/></Button>
    </Form>
</Navbar>
    </div>
  )
}
export default header 