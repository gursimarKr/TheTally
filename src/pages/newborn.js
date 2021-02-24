import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FaCaretRight } from "@react-icons/all-files/fa/FaCaretRight";
import newbornStyles from "./newborn.module.css";
import newbornOne from "../images/newbornOne.png";
import newbornTwo from "../images/newbornTwo.png";
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
                    <li><span className={newbornStyles.bullets}><FaCaretRight/></span>Activities & Development</li>
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
                       <Image className={newbornStyles.topImage} src={newbornOne} alt="pan"/>
                       <Image className={newbornStyles.polygon} src={polygon} alt="pan"/></p> 
                </Col>
                </Row>
            </Container> 
            <Container>
                <Row className="mt-4">
                    <Col><h1 style={{textTransform:'uppercase'}}>Most Popular</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></Col>    
                </Row>
                <Row>
                    <Col>
                        <HorizontalCategories/>
                    </Col>
                </Row>
            </Container> 
            <Container>
            <Row>
                    <Col><div>
                        <h1>Activities & development</h1>
                        <p>Bikes & Scooters</p>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Birthday parties</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Childcare</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Entertainment - Movies & TV Shows</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>School and learning</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Toys & gifts</h3>
                        </div></Col>
                </Row>  
                </Container>  
                <Container>
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h1>Clothing & toiletries</h1>
                        <h3>Bathroom</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Clothing</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Accessories</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Nappies</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Shoes</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row>
                    <Col><div>
                        <h1>Kids Health</h1>
                        <h3>Medical specialists for kids</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>GPs and dentists for kids</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Allied health practitioners for kids</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>
                        Treatments & pharmacy
                        </h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Treatments & pharmacy</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>
            </Container>  
            <Container>
            <Row>
                    <Col><div>
                        <h1>Parent's health & Lifestyle</h1>
                        <h3>Bathroom</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Clothing</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Accessories</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>

                <Row>
                    <Col><div>
                        <h3>Nappies</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>
                <Row>
                    <Col><div>
                        <h3>Shoes</h3>
                        </div></Col>
                </Row>    
                <Row>
                    <Col>
                    <HorizontalCategories/>
                    </Col>
                </Row>
            </Container>
            </Layout>
        </div>
    )
}
export default Newborn
