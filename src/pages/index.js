import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import {InputGroup,FormControl,Button} from 'react-bootstrap';

import SEO from "../components/seo"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3> Lets go for a <FaSearch />? </h3>
    <h1 style={{textTransform:'uppercase',alignItems:'left'}}>Your parenting questions.</h1><h1 style={{textTransform:'uppercase'}}> Answered by <span style={{fontWeight:700}}>40,000</span> + parents</h1>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="show me the top ranked"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary"><i className="fas fa-arrow-right"></i></Button>
    </InputGroup.Append>
  </InputGroup>
  </Layout>
)

export default IndexPage
