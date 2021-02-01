import React from "react"
import { Link } from "gatsby"
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import Header from "../components/Header"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "./Footer"
import Posts from '../components/Posts'
import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalCategories from "./HorizontalCategories";

const IndexPage = () => (
  <div>
    <Header/>
    <div className="container">
    
      <div className="row justify-content-md-center">
        <h1 style={{textTransform:'uppercase',alignItems:'left'}}>Your parenting questions.</h1><h1 style={{textTransform:'uppercase'}}> Answered by <span style={{fontWeight:700}}>40,000</span> + parents</h1>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="show me the top ranked"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary"><i className="fas fa-arrow-right"></i></Button>
    </InputGroup.Append>
  </InputGroup>
      {/* <HorizontalCategories/> */}
        <div className="col-xs-6">
          <Posts/>
        </div>
      </div>
      <h1 style={{textTransform:'uppercase'}}>how does the tally work?</h1>
      <span>Cupidatat minim eu dolore elit labore et culpa. Elit in consequat ut non magna irure proident laborum voluptate excepteur magna exercitation magna culpa. Nulla eu aliquip ad et duis exercitation ea ea incididunt nisi. Sit voluptate elit elit dolore occaecat consequat voluptate nulla labore consectetur aliquip id elit. Laborum esse commodo dolor exercitation. Eiusmod esse fugiat sint mollit nulla enim ullamco culpa consequat consequat consectetur nostrud minim veniam.</span>
    </div>
    <Footer></Footer>
  </div>
)

export default IndexPage
