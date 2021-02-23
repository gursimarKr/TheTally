import React from 'react'
import { Container, Button, Row, Col, InputGroup, Form, FormControl } from 'react-bootstrap';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

import FooterStyles from '../components/footer.module.css';
const Footer = () => {
    return (
        <footer className={FooterStyles.footer}>
        <Container className="pt-5">
            <Row>
            <Col >
            <h3><span style={{fontStyle:'italic',marginRight:3}}>The</span>Tally</h3>
            <span className={FooterStyles.headingText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span>
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
            <Col className="mb-2">
            <h4>Join our newsletter to stay up to date</h4>
            <span className="mb-4">Id aliquip Lorem ut culpa cillum fugiat cillum aute.</span>
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
            <Row>
                <Col><hr/></Col>
            </Row>
            <Row className="text-center">
                <Col className="mt-3 mb-5"><p>Copyright © 2020 THE TALLY. All rights reserved.</p></Col>
            </Row>
        </Container>
        </footer>
    )
}
export default Footer
