import React from 'react'
import Layout from '../components/layout'
import {InputGroup,FormControl,Button, Container, Form, Row, Col, Image} from 'react-bootstrap';
import { Link } from "gatsby"
import { FaCaretRight } from "@react-icons/all-files/fa/FaCaretRight";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import newbornStyles from "./newborn.module.css";
import newbornOne from "../images/newbornOne.png";
import newbornTwo from "../images/newbornTwo.png";
import articleOne from "../images/articleOne.png";
import articleTwo from "../images/articleTwo.png";
import articleThree from "../images/articleThree.png";
import articleFour from "../images/articleFour.png";
import polygon from "../images/Polygon.png";
import HorizontalCategories from '../components/HorizontalCategories';
const Newborn = () => {
    return (
        <div>
            <Layout>
            <Container>
                <Row className="mt-4">
                    {/* 2 col of size 6 for md and bigger and 1 col for size smaller than md */}
                <Col md={6}>
                <div className={newbornStyles.topContainer}>
                    <h1>Newborns & Babies</h1>
                    <ul className={newbornStyles.listItems}>
                    <li><span className={newbornStyles.bullets}><FaCaretRight/></span>Most Popular</li>
                    <li className={newbornStyles.hoverItem}
                    ><span className={newbornStyles.bullets}><FaCaretRight/></span>
                    <a>Activities & Development</a>
                    <div className={newbornStyles.itemContent}>
                        <ul>
                            <li>Bikes and Scooters</li>
                                <li>Birthday Parties</li>
                                <li>Childcare</li>
                                <li>Entertainment - Movies & TV Shows</li>
                            <li>School and learning</li>
                        </ul>
                    </div>
                    </li>
                    <li><span className={newbornStyles.bullets}><FaCaretRight/></span>Clothing & Toiletries</li>
                    <li><span className={newbornStyles.bullets}><FaCaretRight/></span>Kids Health</li>
                    <li><span className={newbornStyles.bullets}><FaCaretRight/></span>Sleeping, Feeding & Settling</li>
                    <li><span className={newbornStyles.bullets}><FaCaretRight/></span>Others List for you</li>
                    </ul>
                    </div>
                </Col>
                <Col md={6}>
                   <p className="" 
                   style={{backgroundImage:`url(${newbornTwo})`,}}>
                       <Image fluid className={newbornStyles.topImage} src={newbornOne} alt="pan"/>
                       <Image fluid className={newbornStyles.polygon} src={polygon} alt="pan"/></p> 
                </Col>
                </Row>
            </Container> 
            <Container>
                <Row className="mt-4">
                    <Col><h1 style={{textTransform:'uppercase'}}>Most Popular</h1>
                    <p className={newbornStyles.paraText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></Col>    
                </Row>
                <Row className="mt-4 mb-5 pt-3">
                    <Col>
                        <HorizontalCategories/>
                    </Col>
                </Row>
            </Container> 
            <Container className={newbornStyles.sectionTwo}>
            <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h1>Activities & development</h1>
                        <h3>Bikes & Scooters</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1 ">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Birthday parties</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Childcare</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Entertainment - Movies & TV Shows</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1 ">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>School and learning</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Toys & gifts</h3>
                        </div></Col>
                </Row>  
               
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>
                </Container>  
                <Container>
                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h1>Clothing & toiletries</h1>
                        <h3>Bathroom</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Clothing</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Accessories</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Nappies</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Shoes</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>
                </Container>
                <Container className={newbornStyles.sectionTwo}>
                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h1>Kids Health</h1>
                        <h3>Medical specialists for kids</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>GPs and dentists for kids</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Allied health practitioners for kids</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>
                        Treatments & pharmacy
                        </h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

            </Container>  
            <Container>
            <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h1>Parent's health & Lifestyle</h1>
                        <h3>Bathroom</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Clothing</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Accessories</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Nappies</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>
                <Row className="mt-5 mb-1 pt-4">
                    <Col><div className={newbornStyles.subHeading}>
                        <h3>Shoes</h3>
                        </div></Col>
                </Row>    
                <Row className="mt-3 mb-1">
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="container md-6">
      <div className={newbornStyles.latestContent} style={{paddingTop:'5%',paddingBottom:'5%'}}>
      <Row className="mb-5">
        <Col><h1 className={`${newbornStyles.uppercaseText} ${newbornStyles.blue}`}>our latest<br/> articles</h1></Col>
      </Row>
      <Row>
     <Col lg={6} sm={6}>
        <Row className="mb-4">
        <Col><img  src={articleOne} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Do you know how to manage your Eczema?</p></Col>
        </Row>
     </Col>
     <Col lg={6} sm={6}>
         {/* anything below the large wil go one column and anything above large will have 6 col */}
        <Row className="mb-4">
        <Col><img  src={articleTwo} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Lorem Ipsum is simply dummy text of the printing & typesetting</p></Col>
        </Row>
     </Col>
      </Row>
      <Row className="mb-4">
      <Col lg={6} sm={6}>
        <Row className="mb-4">
        <Col><img src={articleThree} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Lorem Ipsum is simply dummy text of the printing & typesetting</p></Col>
        </Row>
        </Col>
        <Col lg={6} sm={6}>
        <Row className="mb-4">
        <Col><img src={articleFour} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Top Eczema Triggers to
Avoid</p></Col>
        </Row>
        </Col>
      </Row>
      </div>
    </div>
                </Container>
      <div className={newbornStyles.searchQuestion}>
    <Container>
        <Row>
        <Col><h1 className={newbornStyles.uppercaseText}>search</h1>
            <p className={newbornStyles.largeText}>Your questions answered. By your 40k closest friends.</p>
       
            <span className={newbornStyles.largeText}>WHAT</span>
            <Form>
            <InputGroup size="lg" className={newbornStyles.inputbar}>
            <FormControl className={newbornStyles.searchInput} style={{outline:'none'}}
            placeholder="What are you looking for?"
            />
          <Link to="/searchResult"><Button className={newbornStyles.searchButton} variant="outline-secondary"><FaSearch/></Button></Link>
          </InputGroup>
            </Form>
            </Col>
        </Row>  
    </Container>   
         
    </div>
    {/* <div className={newbornStyles.finalContainer}>
      <Container>
        <Row>
          <Col md={4}>
          <div className="mt-5 mb-2"><img  className={newbornStyles.finalImage} src={kateNat} alt="pan"/></div>
          </Col>
          <Col md={8} className="mt-5 mb-1">
          <div className={newbornStyles.finalText}><p className={newbornStyles.largeText}>We built The Tally because we needed it in our lives. As the mums of a collective tribe of three, we found ourselves constantly unsure as to what to do, where to go, or what to buy - and google only confused us further with its thousands of possible alternatives. We hope you find it as useful as we have as. Even more, we hope you’ll pay it forward by adding your own recommendations</p>
          <span className={newbornStyles.largeText}>In parenting solidarity,</span></div>
          <p className={newbornStyles.finalSignature}>Kate & Nat</p>
          </Col>
        </Row>
      </Container>
    </div> */}
            </Layout>
        </div>
    )
}
export default Newborn
