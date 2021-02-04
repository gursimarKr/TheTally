import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import postStyles from './posts.module.css';
import child from '../images/child3.png'
const Posts = () => {
    return (
        <div className={postStyles.container}>
            <Card className={postStyles.cardContainer}>
                {/* <div className={postStyles.cardContent}></div> */}
                <Card.Img className={postStyles.postImg} variant="left" src={child} />
                <Card.Body className={postStyles.cardText}>
                    <h1 className="text-left" style={{fontSize:'23px'}}>Toddlers</h1>

                    <Button className={postStyles.buttonstyle} ><FaArrowRight/></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Posts