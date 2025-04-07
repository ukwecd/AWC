import React from "react";
import { Col, Form, Nav, Navbar, Row } from "react-bootstrap";
import { FaUserShield, FaGlobe } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
// import News from "../assets/images/news.png";
import Logo from "../assets/images/uklogo.png";
import Wecdlogo from "../assets/images/wecdlogo.png";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import Footer from "./footer/Footer";
import BannerOne from "../assets/images/banner1.png"
import BannerTwo from "../assets/images/banner2.png"
import BannerThree from "../assets/images/banner3.png"
import LogoDanparbw from "../assets/images/LogoDhanParbaw.png"
import Carousel from 'react-bootstrap/Carousel';

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
          <Carousel>
      <Carousel.Item>
        {/* <Group text="First slide" /> */}
        <div>
          <i><img src={BannerOne} alt="carousel img" className="img-fluid"></img></i>
        </div>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <Group text="Second slide" /> */}
        <div>
          <i><img src={BannerTwo} alt="carousel img" className="img-fluid"></img></i>
        </div>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <Group text="Third slide" /> */}
        <div>
          <i><img src={BannerThree} alt="carousel img" className="img-fluid"></img></i>
        </div>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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
