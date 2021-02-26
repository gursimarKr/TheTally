import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import postStyles from './posts.module.css';
// import child from '../images/child3.png'
import child from '../images/child3.png'

const Posts = () => {
    return (
        <div className={postStyles.container}>
            <Card className={postStyles.cardContainer}>
                {/* <div className={postStyles.cardContent}></div> */}
                <Card.Img className={postStyles.postImg} variant="left" src={child} />
                <Card.Body className={postStyles.cardText}>
                    <p className="text-left" style={{fontSize:'20px',marginLeft:'-18%'}}>Birthday
Parties</p>

                    <Button className={postStyles.buttonstyle} ><FaArrowRight/></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Posts