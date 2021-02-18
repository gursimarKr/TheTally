import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import {InputGroup,FormControl,Button, Container, Form, Row, Col, DropdownButton,Dropdown, Image, Card} from 'react-bootstrap';
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import blogOne from '../images/blogOne.png';
import blogTwo from '../images/blogTwo.png';
import blogThree from '../images/blogThree.png';
import blogFour from '../images/blogFour.png';
import blogFive from '../images/blogFive.png';
import blogSix from '../images/blogSix.png';
import blogSeven from '../images/blogSeven.png';
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
                          <p> Filter by  <span className="ml-4 mt-2">
                            <DropdownButton 
                             style={{
                                         display:'inline-block', backgroundColor:'white',color:'black',listStyle:'none'
                                     }} 
                                    class={BlogStyles.navDropdown} title="Age">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                                    </span>
                                    <span className="ml-4 mt-2">
                                    <DropdownButton style={{
                                        display:'inline-block',
                                    }} class={BlogStyles.navDropdown} title="Category">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                                    </span>
                                    </p>
                        </div> 
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="text-center">
                        <Col md={6} xs={12} className="p-5">
                        <p className=""><Image src={blogOne} alt="pan" fluid/></p>
                        </Col>
                        <Col md={6} xs={12} className="p-5 text-left">
                            <div className={BlogStyles.eczema}>
                            <Link to="/BlogDetails"><h5>Eczema in Children: 5 Treatments for Babies with Eczema</h5></Link>
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
                        <Card.Title>How To Use Essential Oils for Your Baby?</Card.Title>
                        <Card.Text>
                        Are you worried your little one has eczema? While baby skin is known for being soft, silky, and smooth, infant eczema....
                        <p className="pt-5">22 January, 2021</p>

                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                    <Row className="text-center">
                    <Col md={3} sm={6} className="m-4">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogFive} />
                    <Card.Body className="text-left">
                        <Card.Title>How to Treat the Eczema in Newborns</Card.Title>
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
                    <Card.Img variant="top" src={blogSix} />
                    <Card.Body className="text-left">
                        <Card.Title>Eczema in Children: 5 Treatments for Babies with Eczema</Card.Title>
                        <Card.Text>
                        <p>Lodine is an essential nutrient that helps our bodies to naturally detox in order to prevent harmful chemicals from affecting thyroid.. </p>
                        <p>22 January, 2021</p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                        </Col>
                    <Col md={3} sm={6}  className="m-4 ml-sm-5">
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogSeven} />
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
                    <Row className="text-center">
                        <Col md={12} sm={6} className="py-5">
                            <Button className={BlogStyles.loadMore}>Load More <span className={BlogStyles.arrow}><FaAngleRight/></span></Button>
                        </Col>
                    </Row>
                </Container>
        <div className={BlogStyles.searchQuestion}>
                <Container>
        <Row className="text-left">
        <Col>
            <h1 className={BlogStyles.uppercaseText}>search</h1>
            <p className={BlogStyles.largeText}>Your questions answered. By your 40k closest friends.</p>
       
            <span className={BlogStyles.largeText}>WHAT</span>
            <Form>
            <InputGroup size="lg" className={BlogStyles.inputbar}>
            <FormControl className={BlogStyles.searchInput} style={{outline:'none'}}
            placeholder="What are you looking for?"
            />
          <Link to="/searchResult"><Button className={BlogStyles.searchButton} variant="outline-secondary"><FaSearch/></Button></Link>
          </InputGroup>
            </Form>
           
            </Col>
        </Row>  
    </Container> 
    </div>  
            </Layout>
        </div>
    )
}
export default Blog
