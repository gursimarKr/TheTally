import React from 'react'
import Layout from '../components/layout'
import searchResultStyles from './searchResultStyles.module.css'
import searchImage from '../images/search.png'
import { FaPeriscope } from "@react-icons/all-files/fa/FaPeriscope";
import {Dropdown, DropdownButton} from 'react-bootstrap'
const searchResult = () => {
    return (
        <div>
            <Layout>
                <div className={searchResultStyles.searchContainer} style={{backgroundImage:`url(${searchImage})`}}>
                    <div className="text-warning d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-12 pt-md-5 pb-md-4">
                                    <h1>The results are as follows:</h1>
                                    <p>Non incididunt esse ipsum sit id irure pariatur nostrud cillum cillum. Reprehenderit nulla proident nisi elit reprehenderit ipsum laborum non excepteur cupidatat dolore esse sit. Exercitation est laboris adipisicing exercitation exercitation in. Eu dolore nostrud tempor irure in reprehenderit do amet aliquip excepteur culpa esse sit et.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={searchResultStyles.searchContent}>
                    <div className="container">
                        <div className="row mb-md-4 mb-4 mt-4">
                            <div className="col-md-12 d-flex flex-wrap">
                            <h1>Elit ullamco et ad excepteur ut do duis adipisicing.</h1>
                            <Dropdown className="ml-4 mt-2">
                                    <Dropdown.Toggle>
                                       Cities
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Melbourne</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Sydney</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Perth</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 mb-4">
                                <div className={searchResultStyles.unitContainer}>
                                    <div className="d-flex align-items-center">
                                    
                                    <div className={searchResultStyles.numbers}>
                                       <p className="">1</p> 
                                    </div>
                                    <div className={searchResultStyles.unitHead}>
                                        <h1>Qui ut ullamco dolore pariatur aliquip minim.</h1>
                                        <p><FaPeriscope/> Melbourne</p>
                                    </div>
                                    </div>
                                    <div className={searchResultStyles.unitBody}>
                                        <p className="pl-5">Laborum deserunt proident anim anim ad fugiat consectetur et.</p>
                                 
                                    </div>
                                    <div className={searchResultStyles.unitTag}>
                                    <div className={searchResultStyles.searchTags}>pariatur aliquip minim</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-12 mb-4">
                                <div className={searchResultStyles.unitContainer}>
                                    <div className="d-flex align-items-center">
                                    {/* ...can add align-items-center */}
                                    <div className={searchResultStyles.numbers}>
                                       <p className="">2</p> 
                                    </div>
                                    <div className={searchResultStyles.unitHead}>
                                        <h1 className="">Qui ut ullamco dolore pariatur aliquip minim.</h1>
                                        <p><FaPeriscope/> Melbourne</p>
                                    </div>
                                    </div>
                                    <div className={searchResultStyles.unitBody}>
                                        <p className="pl-5">Laborum deserunt proident anim anim ad fugiat consectetur et.</p>
                                    </div>
                                    <div className={searchResultStyles.unitTag}>
                                    <div className={searchResultStyles.searchTags}>ad fugiat consectetur</div>
                                    <div className={searchResultStyles.searchTags}>ad fugiat consectetur</div>
                                    <div className={searchResultStyles.searchTags}>ad fugiat consectetur</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export default searchResult