import React from "react"
import { Link } from "gatsby"
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import Header from '../components/header'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "./Footer"
import Posts from '../components/Posts'
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <div>
    <div className="container">
    <Header/>
      <div className="row justify-content-md-center">
        <h1 style={{textTransform:'uppercase',alignItems:'left'}}>Your parenting questions.</h1><h1 style={{textTransform:'uppercase'}}> Answered by <span style={{fontWeight:700,color:'yellow'}}>40,000</span> + parents</h1>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="show me the top ranked"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary"><i className="fas fa-arrow-right"></i></Button>
    </InputGroup.Append>
  </InputGroup>
        <div className="col-xs-6">
          <Posts/>
        </div>
      </div>
      Dolor est non non officia. Ut ex irure eu commodo ipsum. Aliqua duis pariatur ut do eu sit ad nulla consectetur aliqua irure deserunt fugiat enim.
    </div>
    <Footer></Footer>
  </div>
)

export default IndexPage
