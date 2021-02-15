import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import {InputGroup,FormControl,Button, Container, Form, Row, Col} from 'react-bootstrap';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

import aboutUsStyles from './aboutUs.module.css'
import aboutUsOne from '../images/aboutUsOne.png'
import aboutUsTwo from '../images/aboutUsFour.png'
import aboutUsFour from '../images/aboutUsTwo.png'
import aboutUsThree from '../images/aboutUsThree.png'
import kateNat from '../images/kateNat.png'
const AboutUs = () => {
    return (
        <div>
            <Layout>
                <div className={aboutUsStyles.container}>
                    <Container fluid>
                        {/* fluid prop is for full width */}
                        <Row>
                            {/* offset: push column for more space, offset={3}  md={{size:12}}*/}
                            <Col><div className={aboutUsStyles.heading}>
                           <h2 className="text-center">About Us</h2> 
                                </div></Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row clasName="text-center mb-5">
                            <Col className="pt-md-5 pb-md-5 mb-2">
                                <p className={aboutUsStyles.headText}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source
                                </p></Col>
                        </Row>
                        <Row offset={3} className={aboutUsStyles.greyBox}>
                        <Col className="text-center pl-5 ml-5 pt-4 pr-2 pb-2">
                            <div className="d-flex align-items-center">
                            <div className="mr-5"> <img className={aboutUsStyles.greyImage} src={aboutUsThree} alt="pan"/></div>
                            <div className={aboutUsStyles.greyContainer}>
                                <h2>40,000 </h2><span>+</span><p>Comments on facebook</p>
                            </div>
                            <div className={aboutUsStyles.vl}></div>
                            </div>

                        </Col>
                        <Col className="text-center pl-4 pt-4 pr-1 pb-2 ml-3"> <div className="d-flex align-items-center">
                        <div className="mr-5"> <img className={aboutUsStyles.greyImage} src={aboutUsOne} alt="pan"/></div>

                            <div className={aboutUsStyles.greyContainer}><h2>12,000 </h2><span>+</span><p>Mums and Dads</p></div>
                            </div></Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row offset={3}><Col  className="mb-4 mt-4 pt-5 pl-5 ml-5" ><h1  className="mb-5">How we get the data?</h1>
                        <Row>
                            <Col offset={3}>
                            <div>
                                <p className={aboutUsStyles.teamText}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure hidden in the middle of text. 
                                </p>
                                <p className={aboutUsStyles.teamText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                            </div>
                            </Col>
                        </Row>
                        </Col>
                            <Col  className="mb-3 mt-4 ml-5 pl-5 pt-5">
                            <img className={aboutUsStyles.kateImage} src={kateNat} alt="pan"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                <Row ><Col clasName="center-block"><h1 className={aboutUsStyles.teamHead}>The Tally Team</h1></Col></Row>
                <Row><Col clasName="text-center pl-2 pr-2 ml-3 mr-3 mb-5 pb-5"><p className={aboutUsStyles.teamPara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></Col></Row>
                </Container>
                <Container fluid>
                    <Row className="mt-4 pl-5 ml-4 mb-5">
                    <Col>
                        <div className="d-flex align-items-center">
                        <div className="mr-4 mb-2"> <img className={aboutUsStyles.finalImage} src={aboutUsTwo} alt="pan"/></div>

                            <div className={aboutUsStyles.finalBody}>
                                 {/* <div className={aboutUsStyles.finalContainer}> */}
                                <h4 className={aboutUsStyles.Name}>Dr. Sara Castillo </h4>
                            <p className={aboutUsStyles.finalDesignation}>Pediatrician</p>
                            {/* </div> */}
                            <p className={aboutUsStyles.finalPara}>Lorem Ipsum is simply dummy text of the printing </p></div>
                            </div>
                        </Col>
                         <Col clasName="ml-3">
                        <div className="d-flex align-items-center">
                        <div className="lg-ml-0 mr-4 mb-2"> <img className={aboutUsStyles.finalImage} src={aboutUsFour} alt="pan"/></div>
                            <div className={aboutUsStyles.finalBody}>
                                {/* <div className={aboutUsStyles.finalContainer}> */}
                                <h4 className={aboutUsStyles.Name}>Dr. Jane Michale </h4>
                                 <p className={aboutUsStyles.finalDesignation}>Pediatrician</p>
                            {/* </div> */}
                            <p className={aboutUsStyles.finalPara}>Lorem Ipsum is simply dummy text of the printing </p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
                
      <div className={aboutUsStyles.searchQuestion}>
    <Container>
        <Row>
        <Col><h1 className={aboutUsStyles.uppercaseText}>search</h1>
            <p className={aboutUsStyles.largeText}>Your questions answered. By your 40k closest friends.</p>
       
            <span className={aboutUsStyles.largeText}>WHAT</span>
            <Form>
            <InputGroup size="lg" className={aboutUsStyles.inputbar}>
            <FormControl className={aboutUsStyles.searchInput} style={{outline:'none'}}
            placeholder="What are you looking for?"
            />
          <Link to="/searchResult"><Button className={aboutUsStyles.searchButton} variant="outline-secondary"><FaSearch/></Button></Link>
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
export default AboutUs