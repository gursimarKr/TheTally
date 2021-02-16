import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import {InputGroup,FormControl,Button, Container, Form, Row, Col, Dropdown, Image, Card} from 'react-bootstrap';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import blogOne from '../images/blogOne.png';
import blogTwo from '../images/blogTwo.png';
import blogThree from '../images/blogThree.png';
import blogFour from '../images/blogFour.png';
import BlogStyles from './blogStyles.module.css'
const Blog = () => {
    return (
        <div>
            <Layout>
                <Container fluid>
                    <Row className="text-center">
                        <Col md={12} sm={12}>
                        <div className={BlogStyles.heading}>
                           <h2 className="text-center">Our Blog</h2>
                           <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                          <p> Filter by  <span><Dropdown id={BlogStyles.navdropdown} style={{display:'inline-block', color:'white'}} className="ml-4 mt-2">
                                    <Dropdown.Toggle>
                                       Age
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Melbourne</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Sydney</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Perth</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown></span>
                                    <span><Dropdown style={{display:'inline-block'}} id={BlogStyles.navdropdown} className="ml-4 mt-2">
                                    <Dropdown.Toggle>
                                       Category
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Melbourne</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Sydney</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Perth</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown></span></p>
                        </div> 
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="text-center">
                        <Col md={6} xs={12} className="p-5">
                        <p className=""><Image src={blogOne} alt="pan" fluid/></p>
                        </Col>
                        <Col md={6} xs={12} className="p-5 text-left">
                            <div className={BlogStyles.eczema}>
                            <h5>Eczema in Children: 5 Treatments for Babies with Eczema</h5>
                            <p>Are you worried your little one has eczema? While baby skin is known for being soft, silky, and smooth, infant eczema....</p>
                            <p className="pt-5">22 January, 2021</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="text-center">
                    <Col md={3} sm={6} className="m-4">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogThree} />
                    <Card.Body className="text-left">
                        <Card.Title>How To Use Essential Oils for Your Baby?</Card.Title>
                        <Card.Text>
                        An essential oil is a highly concentrated liquid that has volatile chemical compounds that are extracted from plants.
                        <p className="pt-5">22 January, 2021</p>

                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                        </Col> 
                    <Col md={3} sm={6}  className="m-4">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogFour} />
                    <Card.Body className="text-left">
                        <Card.Title>Is Iodine Essential for Health or Healthy Skin?</Card.Title>
                        <Card.Text>
                        <p>Lodine is an essential nutrient that helps our bodies to naturally detox in order to prevent harmful chemicals from affecting thyroid.. </p>
                        <p>22 January, 2021</p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                        </Col>
                    <Col md={3} sm={6}  className="m-4">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogTwo} />
                    <Card.Body className="text-left">
                        <Card.Title>Why should an asthmatic use an inhaler?</Card.Title>
                        <Card.Text>
                        Are you worried your little one has eczema? While baby skin is known for being soft, silky, and smooth, infant eczema....
                        <p className="pt-5">22 January, 2021</p>

                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default Blog
