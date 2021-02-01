import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Header from '../components/header'
import Footer from '../components/footer';
const primaryLayout = (props) => {
    return (
        <div>
            <Header/>
            <Container>
                {props.children}
            </Container>
            <Footer/>
        </div>
    )
}
export default primaryLayout
