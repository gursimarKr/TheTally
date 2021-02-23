import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FaCaretRight } from "@react-icons/all-files/fa/FaCaretRight";

const Newborn = () => {
    return (
        <div>
            <Layout>
            <Container>
                <Row>
                    {/* 2 col of size 6 for md and bigger and 1 col for size smaller than md */}
                <Col md={6}>
                    <h1>Newborns &
                    Babies</h1>
                    <ul>
                    <li><FaCaretRight/>Most Popular</li>
                    <li><FaCaretRight/>Activities & Development</li>
                    <li><FaCaretRight/>Clothing & Toiletries</li>
                    <li><FaCaretRight/>Kids Health</li>
                    <li><FaCaretRight/>Sleeping, Feeding & Settling</li>
                    <li><FaCaretRight/>Others List for you</li>
                    </ul>
                </Col>
                <Col md={6}>

                </Col>
                </Row>
            </Container>    
            </Layout>
        </div>
    )
}
export default Newborn
