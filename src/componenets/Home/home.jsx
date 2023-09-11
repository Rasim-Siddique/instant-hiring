import React, { useEffect } from "react";
import "./Home.css";
import { Row, Col, ColorPicker } from "antd";
import logo from "../../assets/instant-hire-logo.svg";
import gif1 from "../../assets/gifs/Home-1.gif";
import Jobs from "./jobs/jobs";
import pic1 from "../../assets/services/services_1.svg";
import pic2 from "../../assets/services/services_2.svg";
import pic3 from "../../assets/services/services_3.svg";
import pic4 from "../../assets/services/services_4.svg";
import tkxel from "../../assets/pleasureWork/tkxel.png"
import ServicesWeOffer from "./Services/servicesweoffer";
import Leading_div from "./leading-div/leading";
import WatchADemo from "./WatchADemo/watchademo";
import Footer from "./Footer/footer";
import NavbarDekstop from "../navbars/navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileNavbar from "../navbars/mobilenavbar";
import MobileFooter from "../footer/MobileFooter";

function Home({black}) {
  console.log(black)
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };
  const count = useSelector((state) => state.main.click);
  useEffect(() => {
    console.log(count);
  }, []);
  return (
    <div>
      <div className="mobile_hide">
        <NavbarDekstop />
      </div>
      <div className="desktop_hide">
        <MobileNavbar black={black}/>
      </div>

      <div className="section_2">
        <Row>
          <Col lg={2} xs={1}></Col>
          <Col lg={9} xs={22}>
            <span className="start_your_career_text">
              Start your career today with Instant Hire
            </span>
            <br />
            <br />
            <span className="description_text_1">
              The ultimate platform connecting talented candidates with
              top-notch companies. Discover your dream job, showcase your
              skills, and embark on a path to professional growth.
            </span>
            <br />
            <br />
            <div>
              <Row className="buttons_row">
                <Col lg={10} xs={11}>
                  <button className="find_jobs_button" onClick={() => navigateToPage('/allJobs')}>Find Jobs</button>
                </Col>
                <Col lg={10} xs={11}>
                  <button className="find_talent_button">Find Talent</button>
                </Col>
                <Col lg={4} xs={0}></Col>
              </Row>
            </div>
          
          </Col>
          <Col lg={13}>
            <img src={gif1} className="gifs" />
          </Col>
        </Row>
      </div>

      <div className="pleasure_work">
        <Row style={{display:"flex", flexDirection:"column", justifyContent:"space-around",
       alignItems:"center", textAlign:"center", gap:32}} >
          <Col lg={12}>
            <h2 className="pleasure_heading">Pleasure to work with</h2>
          </Col>
          <Col lg={12} style={{display:"flex", flexDirection:"row", columnGap:64}}>
            <div>
              <img src={tkxel} />
              <span style={{fontSize:18}}>Tkxel</span>
            </div>
            <div>
              <img src={tkxel} />
              <span style={{fontSize:18}}>Speedoy</span>
            </div>
            <div>
              <img src={tkxel} />
              <span style={{fontSize:18}}>XCape</span>
            </div>
            <div>
              <img src={tkxel} />
              <span style={{fontSize:18}}>IOMechs</span>
            </div>
            <div>
              <img src={tkxel} />
              <span style={{fontSize:18}}>TECINYX</span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="jobs_tab" style={{ background: "#FFFFF" }}>
        <Jobs />
      </div>
      <br />
      <br />
      <div className="services_tab" style={{ background: "#FCFCFC" }}>
        <Row>
          <Col lg={3} xs={1}></Col>
          <Col lg={20} xs={22}>
            <span className="text_services">Services We Offer</span>
            <br />
            <br />
            <br />
            <Row>
              <Col
                onClick={() => {
                  navigateToPage("/projectconsultancy");
                }}
                lg={11}
              >
                {" "}
                <ServicesWeOffer
                  image={pic1}
                  subheading="Project Consultancy"
                  description="We help businesses achieve their objectives by offering expertise and guidance throughout the project lifecycle."
                />
              </Col>
              <Col lg={2}></Col>
              <Col lg={11}>
                {" "}
                <ServicesWeOffer
                  image={pic2}
                  subheading="Technical Recruitment"
                  description="Our technical recruitment service helps companies find and hire the best candidates for their technical positions."
                />
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <br />
        <Row>
          <Col lg={3} xs={1}></Col>
          <Col lg={20} xs={22}>
            <Row>
              <Col lg={11}>
                {" "}
                <ServicesWeOffer
                  image={pic3}
                  subheading="Payroll management"
                  description="Our comprehensive payroll management services help businesses simplify and accurate their payroll processes."
                />
              </Col>
              <Col lg={2}></Col>
              <Col lg={11}>
                {" "}
                <ServicesWeOffer
                  image={pic4}
                  subheading="Tax Consultancy"
                  description="We provide tax consultancy services to assist our clients in managing their tax obligations effectively."
                />
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </div>
      <div className="leading_div">
          <Row className="main_div_1">
            <Col lg={24}>
              <Row>
                <Col lg={2} xs={1}></Col>
                <Col lg={20} xs={22}>
                  <Leading_div />
                </Col>
                <Col lg={2} xs={1}></Col>
              </Row>
            </Col>
          </Row>
        </div> 
        <br />
        <br />
        {/* <div>
          <WatchADemo />
        </div> */}
        <div>
          <div className="mobile_hide"><Footer /></div>

          <div className="dekstop_hide" style={{paddingTop : "160vh", width : "100%"}}><MobileFooter /></div>
        </div>
       
    </div>
  );  
}

export default Home;
