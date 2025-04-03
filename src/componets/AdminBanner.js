import React from "react";
import { Col, Form, Nav, Navbar, Row } from "react-bootstrap";
import { FaUserShield, FaGlobe } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
// import News from "../assets/images/news.png";
import Logo from "../assets/images/uklogo.png";
import Wecdlogo from "../assets/images/wecdlogo.png";
import Group from "../assets/images/Groupimg.png";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import Footer from "./footer/Footer";
// import Login from "../assets/images/login.png";
import LogoDanparbw from "../assets/images/LogoDhanParbaw.png"

const AdminBanner = () => {
  return (
    <div className="container-fluid">
      <Row className="flex-fill">
        <Col
          lg={7}
          md={7}
          sm={12}
          className="awc-col awc-p awc-border awc-bg-img"
        >
          <div>
            <div className="awc-home mt-4">
              <h1>उत्तराखंड सरकार | Gov.t of Uttarakhand </h1>
            </div>
            
          </div>
          <div className=" ">
            <i>
              <div className="awc-box-left "></div>
              <div className="awc-admin-bg">
                <img src={Group} alt="group-img" className="img-fluid"></img>
              </div>
            </i>
          </div>
        </Col>

        <Col lg={5} md={5} sm={12} className="awc-login-col awc-banner-p">
          <Navbar expand="lg md">
            <Navbar.Brand href="#home" className=" awc-heading ">
              <h1>उत्तराखंड सरकार | Gov.t of Uttarakhand</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end flex-grow-1 awc-nav">
                <Link to="/">
                  <Nav.Link href="#home">
                    <FaGlobe className="me-1" />
                    Official Website
                  </Nav.Link>
                </Link>
                <Nav.Link href="#link">
                  {" "}
                  <FaUserShield className="me-1" />
                  Login (Admin)
                </Nav.Link>
                {/* <Link to="/ContactUs">
                  {" "}
                  <Nav.Link href="#link">
                    <FaPhoneAlt className="me-1" />
                    Contact Us
                  </Nav.Link>
                </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="awc-login">
            <div className="awc-box"></div>
            <div className="awc-logo">
              <i>
                <img src={Logo} alt="uk"></img>
              </i>
              <i>
                <img src={Wecdlogo} alt="wecd-logo"></img>
              </i>
            </div>
           
            <Form className="awc-form">
              <div className=" p-3 nd-Login-form">
                <p className="text-center awc-login-title">
                  महिला सशक्तिकरण एवं बाल विकास विभाग
                </p>
                {/* <p className="text-center awc-admin-subtitle">
                  <img src={Login} alt="sign" className="p-2" /> धन प्रवाह
                </p> */}
                <div className="awc-logo">
              <i>
                <img src={LogoDanparbw} alt="uk" className="dhanparwa-logo"></img>
              </i>
             
            </div>
                <AdminLogin />
              </div>
            </Form>
          </div>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default AdminBanner;
