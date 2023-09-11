import { Col, Row } from 'antd';
import React from 'react'
import './leading.css';
import pic from '../../../assets/leading-images/leading_image.svg'


function Leading_div() {
    return(
        <>
        <Row className='main_div_1_1' style={{display : "flex"}}>
            <Col lg={1} xs={0}></Col>
            <Col lg={10} xs={24} className="mobile_pos">
                <span className='instant_description'>
                Instant Hire is a leading tech recruitment company
                </span>
                <br />
                <button className='explore_button'>
                Explore Instant Hire
                </button>
            </Col>
            <Col lg={1} xs={0}></Col>
            <Col lg={9} xs={17}>
                <img className='pic_1' src={pic}/>
            </Col>

        </Row>
        </>
    )
}

export default Leading_div