import React from 'react'
import categorypostStyles from './categorypost.module.css'
import child1 from '../images/child1.png'
import { Button } from 'react-bootstrap'
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const CategoryPost = () => {
    return (
        <div>
            <div className={categorypostStyles.catContent}>
                <div >
                    <img className={categorypostStyles.catImage} src={child1} alt="pan"/>
                </div>
                <div className={categorypostStyles.catText}>
                    <h1 className="text-left">
                    Activities & development
                    </h1>
                    <Button className={categorypostStyles.btnOutline}><FaArrowRight/></Button>
                </div>
            </div>
        </div>
    )
}
export default CategoryPost