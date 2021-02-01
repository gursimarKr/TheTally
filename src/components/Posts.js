import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import postStyles from './posts.module.css';
const Posts = () => {
    return (
        <div className="container">
            <Card className={postStyles.cardContainer}>
                <div className={postStyles.cardContent}></div>
                <Card.Img variant="top" src="icon-48x48.png" />
                <Card.Body>
                    <Card.Title><h2>Card Title</h2></Card.Title>
                    <Button className={postStyles.buttonstyle} ><FaArrowRight/></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Posts