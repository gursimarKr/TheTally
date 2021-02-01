import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import {InputGroup,FormControl,Button, Container, Form, Row, Col} from 'react-bootstrap';

import SEO from "../components/seo"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import indexStyles from './index.module.css'
import HorizontalCategories from "../components/HorizontalCategories";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3> Lets go for a <FaSearch />? </h3>
    <div className={indexStyles.searchContainer}>
    <Container>
      <h1 className={indexStyles.headingText} style={{alignItems:'left'}}>Your parenting questions.</h1><h1 className={indexStyles.headingText} style={{textTransform:'uppercase'}}> Answered by <span style={{fontWeight:700}}>40,000</span> + parents</h1>
      <div className={indexStyles.topRankedContainer}>
        <Form>
        <p className={indexStyles.topRankedText}>What</p>
          <InputGroup className={indexStyles.inputbar}>
        <FormControl className={indexStyles.topRankedSearch}
          placeholder="show me the top ranked"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary"><FaSearch/></Button>
        </InputGroup.Append>
      </InputGroup>
      </Form>
      <HorizontalCategories/>
      </div>
      <Row>
        <h1 className={indexStyles.uppercaseText}>How does the tally work?</h1>
        <p className={`${indexStyles.largeText} ${indexStyles.grey}`}>Deserunt aliqua magna proident enim est id nostrud Lorem. Cupidatat adipisicing enim deserunt duis sint quis do culpa. Occaecat ex aliqua irure nisi velit laborum.</p>
      </Row>
      <Row>
      <Col>
      <img src="" alt="pan" /> <p className={indexStyles.tallyWorkText}>Incididunt commodo elit amet ullamco consequat esse proident irure magna Lorem aliquip tempor.</p>
      </Col>
      <Col><img src="" alt="pan" /><p className={indexStyles.tallyWorkText}>Sint adipisicing laboris Lorem nulla magna ad anim excepteur officia.</p></Col>
      <Col><img src="" alt="pan" /><p className={indexStyles.tallyWorkText}>Lorem in tempor in incididunt non dolore magna pariatur adipisicing proident sunt veniam.</p></Col>
      </Row>
      <Row>
      <Col>
      <h1 className={indexStyles.uppercaseText}>browse by age</h1>
      <p className={indexStyles.largeText}>Irure dolore ad ut adipisicing tempor veniam magna anim esse velit in do aliqua sunt.</p>
      </Col>
      <Col></Col>
      </Row>
      <Row>
      <Col><h1 className={indexStyles.uppercaseText}>browse by category</h1>
      <p className={indexStyles.largeText}>Non sit tempor in aliqua culpa occaecat veniam et veniam magna dolore.</p>
      </Col>
      <Col></Col>
      </Row>
      <Row>
        <Col><h1 className={`${indexStyles.uppercaseText} ${indexStyles.blue}`}>our latest articles</h1></Col>
      </Row>
      <Row>
      <Col>
        <Row>
        <Col><img src="" alt="pan" /></Col>
        <Col><p className={indexStyles.largeText}>In tempor mollit laboris laboris non ut ad est eiusmod.</p></Col>
        </Row>
        </Col>
        <Col>
        <Row>
        <Col><img src="" alt="pan" /></Col>
        <Col><p className={indexStyles.largeText}>In tempor mollit laboris laboris non ut ad est eiusmod.</p></Col>
        </Row>
        </Col>
      </Row>
      <Row>
      <Col>
        <Row>
        <Col><img src="" alt="pan" /></Col>
        <Col><p className={indexStyles.largeText}>In tempor mollit laboris laboris non ut ad est eiusmod.</p></Col>
        </Row>
        </Col><Col>
        <Row>
        <Col><img src="" alt="pan" /></Col>
        <Col><p className={indexStyles.largeText}>In tempor mollit laboris laboris non ut ad est eiusmod.</p></Col>
        </Row>
        </Col>
      </Row>
      
      </Container>
      <div className={indexStyles.searchQuestion}>
        <Container>
        <Row>
        <Col><h1 className={indexStyles.uppercaseText}>search</h1>
            <p className={indexStyles.largeText}>Exercitation aliquip ex reprehenderit cillum adipisicing commodo tempor tempor qui labore magna.</p>
       
            <span className={indexStyles.largeText}>WHAT</span>
            <Form>
            <InputGroup size="lg" className={indexStyles.inputbar}>
            <FormControl className={indexStyles.topRankedSearch}
            placeholder="What are you looking for?"
            />
          <InputGroup.Append>
          <Button variant="outline-secondary"><FaSearch/></Button>
          </InputGroup.Append>
          </InputGroup>
            </Form>
            </Col>
        </Row>  
        </Container>   
         
    </div>
    </div>
    
  </Layout>
)

export default IndexPage
