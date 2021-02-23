import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import {InputGroup,FormControl,Button, Container, Form, Row, Col, DropdownButton,Dropdown, Image, Card} from 'react-bootstrap';
import { FaCaretRight } from "@react-icons/all-files/fa/FaCaretRight";
import {FaSearch} from "@react-icons/all-files/fa/FaCaretRight";
import blogDetailsOne from '../images/blogDetailsOne.png';
import blogDetailsTwo from '../images/blogDetailsTwo.png';
import articleOne from '../images/articleOne.png';
import articleTwo from '../images/articleTwo.png';
import articleThree from '../images/articleThree.png';
import articleFour from '../images/articleFour.png';
import blogDetailsStyles from './blogDetails.module.css';
const BlogDetails = () => {
    return (
        <div>
            <Layout>
                <Container className={blogDetailsStyles.headContainer} fluid>
                    <Row className="text-center">
                        <Col md={12}><p ><Image fluid className={blogDetailsStyles.headImage} src={blogDetailsOne} alt="pan"/></p></Col>
                    </Row>
                </Container>
                <Container className={blogDetailsStyles.bodyContainer}>
                    <Row>
                        <Col md={12} sm={6}>
                            <div className={blogDetailsStyles.childSection}>
                                <FaCaretRight/><span className="mr-md-2 mr-lg-5">Kids Health</span>
                                <FaCaretRight/><span className="">Child Eczema</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className={blogDetailsStyles.tratmentSectionOne}>
                        <Col className="pt-5 m-3">
                            <h1>Eczema in Children: 5 Treatments for Babies with Eczema</h1>
                            <p><i>22 January, 2021</i></p>
                            <hr/>

                            <p className="mt-5">Are you worried your little one has eczema? While baby skin is known for being soft, silky, and smooth, infant eczema can cause the skin to appear dry and crusty. Read on to discover how to treat eczema in newborns.</p>
                            <p>Please keep in mind that although what we discuss in this post can relieve eczema, we are in no way medical professionals. If you’re experiencing severe eczema symptoms like an infection, it is best to seek medical advice immediately.</p>

                            <h2 className="mt-5 pt-2 mb-4">What is Infant Eczema?</h2>
                            <p>Eczema in newborns typically appears between two and four months old. It is a common skin condition in babies – in fact, an estimated 60% of people with eczema develop it during their first year of life. While it is thankfully neither dangerous nor contagious, it can be itchy and uncomfortable for your baby. Many babies outgrow the condition as they age but for some, it is a life-long condition.</p>

                            <h2 className="mt-5 pt-2 mb-4">What Causes Eczema in Newborns?</h2>
                            <p>Eczema in newborns is caused by a combination of genetic and environmental factors. For example, babies with a family history of allergies, eczema and asthma are more likely to develop infant eczema. Others will develop the condition when their skin comes into contact with certain triggers. Top eczema triggers include pet dander, chemicals or toxins in laundry detergents and soaps, dust, certain fabrics, and moisture from drool or sweat.</p>

                            <h2 className="mt-5 pt-2 mb-4">Symptoms of Eczema in Newborns</h2>
                            <p>Eczema in newborns typically affects the joints of arms and legs, as well as the cheeks and chin. Sometimes it can even develop in the diaper area. It appears as patches of red, dry skin and may look similar to a rash. Because of its similar appearance, infant eczema is often confused for baby acne or cradle cap.</p>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                            <p><Image className={blogDetailsStyles.babyImage} src={blogDetailsTwo} alt="pan" fluid/></p>
                                </Col>
                            </Row>
                            <Row className={blogDetailsStyles.tratmentSectionTwo}>
                            <Col>
                            <h2 className="mt-5 pt-2 mb-4 pb-2">Eczema in Newborns Treatment</h2>
                            <p>As babies have delicate skin, it’s extra important to treat the condition using natural products. Discover our best natural treatment options to show your little one’s skin some TLC:</p>
                            <ul>
                                <li><FaCaretRight/>
                                <b>Scratch Protection:</b> If your little one can’t stop scratching their tender skin raw, check out these ScratchSleeves with Scratch Mittens. Made with 100% stretch cotton sleeves and silk mittens, they are gentle and breathable. You may also like these Remedywear™ baby mittens. They’re perfect for newborns up to two years old and are clinically proven to reduce itchiness and improve quality of sleep.
                                </li>
                                <li><FaCaretRight/>
                                <b>Wear Eczema-Friendly Pajamas:</b> This Baby Sleepsuit with Scratch Mitts will help your little one sleep soundly by offering soothing itch relief and scratch protection. Covering your baby's full body from neck to toe, it features moisture-wicking sweat control to prevent chafing or sweaty irritation. Check out this One-Piece Footed Pajama for Kids too.</li>
                                <li>
                                    <FaCaretRight/>
                                    <b>Apply a Gentle Moisturizer:</b> We believe the best skincare for babies are gentle and 100% natural. That’s why we love this Organic Manuka Skin Soothing Cream. It’s made with just six ingredients - all natural! - and has absolutely no burning or stinging. This Emily Skin Soothers For Thick, Dry Eczema is also safe and effective for babies. Made with certified safe herbs, it helps nourish rough, dry and itchy skin like a dream.
                                </li>
                            </ul>
                            </Col>
                            </Row>
                </Container>
                <Container>
                <div className="container md-6">
      <div className={blogDetailsStyles.latestContent} style={{paddingTop:'5%',paddingBottom:'5%'}}>
      <Row className="mb-5">
        <Col><h1 className={`${blogDetailsStyles.uppercaseText} ${blogDetailsStyles.blue}`}>our latest<br/> articles</h1></Col>
      </Row>
      <Row>
     <Col lg={6} sm={6}>
        <Row className="mb-4">
        <Col><img  src={articleOne} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Do you know how to manage your Eczema?</p></Col>
        </Row>
     </Col>
     <Col lg={6} sm={6}>
         {/* anything below the large wil go one column and anything above large will have 6 col */}
        <Row className="mb-4">
        <Col><img  src={articleTwo} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Lorem Ipsum is simply dummy text of the printing & typesetting</p></Col>
        </Row>
     </Col>
      </Row>
      <Row className="mb-4">
      <Col lg={6} sm={6}>
        <Row className="mb-4">
        <Col><img src={articleThree} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Lorem Ipsum is simply dummy text of the printing & typesetting</p></Col>
        </Row>
        </Col>
        <Col lg={6} sm={6}>
        <Row className="mb-4">
        <Col><img src={articleFour} alt="pan" /></Col>
        <Col className="mt-5 mb-4"><p>Top Eczema Triggers to
Avoid</p></Col>
        </Row>
        </Col>
      </Row>
      </div>
    </div>
                </Container>

                {/* <div className={blogDetailsStyles.searchQuestion}>
    <Container>
        <Row>
        <Col><h1 className={blogDetailsStyles.uppercaseText}>search</h1>
            <p className={blogDetailsStyles.largeText}>Your questions answered. By your 40k closest friends.</p>
       
            <span className={blogDetailsStyles.largeText}>WHAT</span>
            <Form>
            <InputGroup size="lg" className={blogDetailsStyles.inputbar}>
            <FormControl className={blogDetailsStyles.searchInput} style={{outline:'none'}}
            placeholder="What are you looking for?"
            />
          <Link to="/searchResult"><Button className={blogDetailsStyles.searchButton} variant="outline-secondary"><FaSearch/></Button></Link>
          </InputGroup>
            </Form>
            </Col>
        </Row>  
    </Container>   
         
    </div> */}
            </Layout>
        </div>
    )
}
export default BlogDetails