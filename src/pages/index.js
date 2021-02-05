import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import {InputGroup,FormControl,Button, Container, Form, Row, Col} from 'react-bootstrap';
import searchImage from '../images/search.png'
import articleOne from '../images/articleFour.png'
import articleTwo from '../images/articleOne.png'
import articleThree from '../images/articleTwo.png'
import articleFour from '../images/articleThree.png'
import workOne from '../images/workThree.png'
import workTwo from '../images/workTwo.png'
import workThree from '../images/workOne.png'
import kateNat from '../images/kateNat.png'
import SEO from "../components/seo"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import indexStyles from './index.module.css'
import HorizontalCategories from "../components/HorizontalCategories";
import Posts from "../components/Posts";
import CategoryPost from "../components/CategoryPost";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div  className={indexStyles.searchContainer}>
      <div style={{backgroundImage:`url(${searchImage})`}}>
        <Container fluid>
          <div className={indexStyles.headingContainer}>
          <h1 className={indexStyles.headingText} style={{alignItems:'left'}}>
            Your parenting questions.</h1>
            <h1 className={indexStyles.headingText} style={{textTransform:'uppercase'}}> Answered by 
            <span style={{fontWeight:700, color:'#f09622'}}> 40,000</span> + parents.</h1>
            <div className={indexStyles.topRankedContainer}>
              <Form>
              
                <span className={indexStyles.topRankedText}>What</span>
                <InputGroup className={indexStyles.inputbar}>
              <FormControl className={indexStyles.topRankedSearch}
                placeholder="show me the top ranked..."
              />
              
                <Link to="/searchResult"><Button className={indexStyles.topRankedButton} variant="outline-secondary"><FaSearch/></Button></Link>
            </InputGroup>
            </Form>
            </div>
            </div>
            
        </Container>
        <div className={indexStyles.categories}>
            <HorizontalCategories/>
            </div>
        </div>
      
      <Container className={indexStyles.workConatiner} style={{marginTop:'4%', marginBottom:'4%'}}>
      <Row>
        <h1 className={indexStyles.uppercaseText}>How does the tally work?</h1>
        <p className={`${indexStyles.largeText} ${indexStyles.grey}`}>Save yourself from the overwhelm of google search results, or the well meaning opinions of your small group of friends. Here you can access recommendations from literally tens of thousands of parents, that answer the most frequently asked parenting questions. </p>
      </Row>
      <Row>
      <Col>
      <img src={workOne} alt="pan" /> <p className={indexStyles.tallyWorkText}>Search for the specific recommendations</p>
      </Col>
      <Col><img src={workTwo} alt="pan" /><p className={indexStyles.tallyWorkText}>Browse by your child’s age or your parenting stage</p></Col>
      <Col><img src={workThree} alt="pan" /><p className={indexStyles.tallyWorkText}>Browse by category of recommendation</p></Col>
      </Row>
      </Container>
      <div className={indexStyles.ageContainer}>
      <div className={indexStyles.ageBackground}>
        <Container>
          <Row>
            <div className={indexStyles.ageContainerText}>
          <h1 className={indexStyles.uppercaseText}>browse by age</h1>
      <p className={indexStyles.largeText}>Velit sunt enim exercitation et commodo ipsum.Nostrud ullamco Lorem ullamco laborum eu aute ipsum irure in culpa ut.</p>
      
      </div> 
      
      </Row>
        </Container>
       
      </div>
      <div style={{marginTop: '-27%',marginBottom: '20%'}}>
      <HorizontalCategories/>
      </div>
     
     
     
      
      </div>
      <div className={indexStyles.categoryContainer}>
      <Container>
      <Row>
      <Col>
      <h1 className={indexStyles.uppercaseText}>browse by category</h1>
      <p className={indexStyles.largeText}>Non sit tempor in aliqua culpa occaecat veniam et veniam magna dolore.</p>
      </Col>
      <Col><CategoryPost/></Col>
      <Col><CategoryPost/></Col>
      <Col><CategoryPost/></Col>
      </Row>
      <Row>
      <Col><CategoryPost/></Col>
      <Col><CategoryPost/></Col>
      <Col><CategoryPost/></Col>
      <Col><CategoryPost/></Col>
      </Row>
      </Container>
      </div>
      <div className="container md-6">
      <div className={indexStyles.latestContent} style={{paddingTop:'5%',paddingBottom:'5%'}}>
      <Row>
        <Col><h1 className={`${indexStyles.uppercaseText} ${indexStyles.blue}`}>our latest<br/> articles</h1></Col>
      </Row>
      <Row>
      <Col>
        <Row>
        <Col><img  src={articleOne} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Do you know how to manage your Eczema?</p></Col>
        </Row>
        </Col>
        <Col>
        <Row>
        <Col><img  src={articleTwo} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Lorem Ipsum is simply dummy text of the printing & typesetting</p></Col>
        </Row>
        </Col>
      </Row>
      <Row>
      <Col>
        <Row>
        <Col><img src={articleThree} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Lorem Ipsum is simply dummy text of the printing & typesetting</p></Col>
        </Row>
        </Col><Col>
        <Row>
        <Col><img src={articleFour} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Top Eczema Triggers to
Avoid</p></Col>
        </Row>
        </Col>
      </Row>
      </div>
    </div>
      <div className={indexStyles.searchQuestion}>
    <Container>
        <Row>
        <Col><h1 className={indexStyles.uppercaseText}>search</h1>
            <p className={indexStyles.largeText}>Your questions answered. By your 40k closest friends.</p>
       
            <span className={indexStyles.largeText}>WHAT</span>
            <Form>
            <InputGroup size="lg" className={indexStyles.inputbar}>
            <FormControl className={indexStyles.searchInput}
            placeholder="What are you looking for?"
            />
          <Link to="/searchResult"><Button className={indexStyles.searchButton} variant="outline-secondary"><FaSearch/></Button></Link>
          </InputGroup>
            </Form>
            </Col>
        </Row>  
    </Container>   
         
    </div>
    <div className={indexStyles.finalContainer}>
      <Container>
        <Row>
          <Col md={4}>
          <div className="mt-5 mb-2"><img  className={indexStyles.finalImage} src={kateNat} alt="pan"/></div>
          </Col>
          <Col md={8} className="mt-5 mb-1">
          <div className={indexStyles.finalText}><p className={indexStyles.largeText}>We built The Tally because we needed it in our lives. As the mums of a collective tribe of three, we found ourselves constantly unsure as to what to do, where to go, or what to buy - and google only confused us further with its thousands of possible alternatives. We hope you find it as useful as we have as. Even more, we hope you’ll pay it forward by adding your own recommendations</p>
          <span className={indexStyles.largeText}>In parenting solidarity,</span></div>
          <p className={indexStyles.finalSignature}>Kate & Nat</p>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    
  </Layout>
)

export default IndexPage
