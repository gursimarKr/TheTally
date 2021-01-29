import React from "react"
import { Link } from "gatsby"
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
