import { Col, Dropdown, Row } from "antd";
import React from "react";
import logo from '../../assets/instant-hire-logo-1.svg'
import './navbar-black.css'
import image1 from '../../assets/navbar/project.svg'
import image2 from '../../assets/navbar/dollar.svg'
import image3 from '../../assets/navbar/tax.svg'
import image4 from '../../assets/navbar/Target.svg'
import { useNavigate } from "react-router-dom";


function NavbarBlackDekstop() {
  const items = [
    {
      key: '1',
      label: (
        <Row>
          <Col lg={0}></Col>
          <Col lg={24}>
            <Row className="buttons_services">
            
            <Col lg={6}><img src={image1} className="image-service" /></Col>  
            <Col lg={18}>
              <span className="text_col_span" onClick={() => {
                navigateToPage("/projectconsultancy")
              }}>Project Consultancy</span>
            </Col>
            </Row>
          </Col>
        </Row>
      ),
    },
    {
      key: '2',
      label: (
        <Row>
        <Col lg={0}></Col>
        <Col lg={24}>
          <Row className="buttons_services">
          
          <Col lg={6}><img src={image4} className="image-service" /></Col>  
          <Col lg={18}>
            <span className="text_col_span"  onClick={() => {
                navigateToPage("/technicalrecruitment")
              }}>Technical Recruitment</span>
          </Col>
          </Row>
        </Col>
      </Row>
      ),
    },
    {
      key: '3',
      label: (
        <Row>
          <Col lg={0}></Col>
          <Col lg={24}>
            <Row className="buttons_services">
            
            <Col lg={6}><img src={image2} className="image-service" /></Col>  
            <Col lg={18}>
              <span className="text_col_span" onClick={() => {
                navigateToPage("/payrollmanagement")
              }}>Payroll Management</span>
            </Col>
            </Row>
          </Col>
        </Row>
      ),
    },
    {
      key: '4',
      label: (
        <Row>
          <Col lg={0}></Col>
          <Col lg={24}>
            <Row className="buttons_services">
            
            <Col lg={6}><img src={image3} className="image-service" /></Col>  
            <Col lg={18}>
              <span className="text_col_span" onClick={() => {
                navigateToPage("/taxconsultancy")
              }}>Tax Consultancy</span>
            </Col>
            </Row>
          </Col>
        </Row>
      ),
    },
  ];
  const navigate = useNavigate();
  const navigateToPage = (path) => {
    navigate(path)
  }
  
  return (
    <div>
      <Row style={{ paddingTop: "15px", background : "#302A39" }}>
        <Col lg={1}></Col>
        <Col lg={4}>
          <img
            style={{ display: "flex", margin: "auto" }}
            src={logo}
            alt="logo"
          />
        </Col>
        <Col lg={1}></Col>
        <Col lg={1}>
          <button className="buttons_text_1">HOME</button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={1}>
          <button className="buttons_text_1">JOBS</button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={1}>
        <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow={{
        pointAtCenter: true, 
      }}
      
    >
          <button className="buttons_text_1" style={{position : "relative", right : "15%"}}>SERVICES</button>
    </Dropdown>
                  </Col>

        <Col lg={1}></Col>
        <Col lg={2}>
          <button className="buttons_text_1">ABOUT US</button>
        </Col>
        <Col lg={2}>
          <button className="buttons_text_1">Watch A Demo</button>
        </Col>
        <Col lg={2}></Col>
        <Col lg={3}>
          <button className="contact_us_button_1">Contact Us</button>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </div>
  );
}

export default NavbarBlackDekstop;
