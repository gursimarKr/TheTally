import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import newbornPostsStyles from './newbornposts.module.css';
import child from '../images/child3.png'
const newbornPosts = () => {
    return (
        <div className={newbornPostsStyles.container}>
            <Card className={newbornPostsStyles.cardContainer}>
                {/* <div className={newbornPostsStyles.cardContent}></div> */}
                <Card.Img className={newbornPostsStyles.postImg} variant="left" src={child} />
                <Card.Body className={newbornPostsStyles.cardText}>
                    <h1 className="text-left" style={{fontSize:'23px'}}>Toddlers</h1>

                    <Button className={newbornPostsStyles.buttonstyle} ><FaArrowRight/></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default newbornPosts