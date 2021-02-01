import React from 'react'
import { Container, Button, Row, Col, InputGroup, Form, FormControl } from 'react-bootstrap';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

import FooterStyles from '../components/footer.module.css';
const Footer = () => {
    return (
        <footer className={FooterStyles.footer}>
        <Container>
            <Row>
            <Col>
            <h4><span style={{fontStyle:'italic',marginRight:3}}>The</span>Tally</h4>
            <span>Voluptate ea ea magna fugiat qui pariatur enim.</span>
            </Col>
            <Col>
            <h4>Extras</h4>
            <ul className="list-unstyled">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            </ul>
            </Col>
            <Col>
            <h4>Pages</h4>
            <ul className="list-unstyled">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>Register</li>
            </ul>
            </Col>
            <Col>
            <h4>Join our newsletter to stay up to date</h4>
            <span>Id aliquip Lorem ut culpa cillum fugiat cillum aute.</span>
            <Form>
                <InputGroup>
                    <FormControl
                    type="email"
                    placeholder="Email address"/>
                    <InputGroup.Append>
                        <Button><FaArrowRight/></Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            </Col>

            </Row>
            
        </Container>
        </footer>
    )
}
export default Footer
