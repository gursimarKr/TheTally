import React from 'react'
import headingPostStyles from './headingPost.module.css'
import baby from '../images/baby.png'
import { Button } from 'react-bootstrap'
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const HeadingPost = () => {
    return (
            <div className={headingPostStyles.catContent}>
                <div className="d-flex align-items-center">
                    <img className={headingPostStyles.catImage} src={baby} alt="pan"/>
                    <div className={headingPostStyles.catText}>
                        <h1 className={headingPostStyles.heading}>
                        BEST Baby
monitors
                        </h1>
                        <Button className={headingPostStyles.btnOutline}><FaArrowRight/></Button>
                    </div>
                </div>
            </div>
    )
}
export default HeadingPost