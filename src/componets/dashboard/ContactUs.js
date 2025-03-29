import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import "../../assets/css/ContactUs.css"
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import NavBar from "../topnav/NavBar";
import Footer from "../footer/Footer"



function ContactUs() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="awc-header">
          <Col lg={12} md={12} sm={12} className="awc-header-subtitle text-center ">
            <h1 className="offset-1 pt-3" >महिला सशक्तिकरण एवं बाल विकास विभाग</h1>
          </Col>
          {/* <Col lg={8} md={8} sm={12} className="awc-subtitle">
           
              <p className="pt-3">District-Wise Nodal Officer Contact Details
              <br/>
                विभागीय कर्मियों से कॉल के दौरान अनुशाशनहीनता किये जाने पर
                वैधानिक कार्यवाही की जाएगी |
                </p>
            
          </Col> */}
        </Row>
      </Container>
      <Container className="mt-2 mb-2">
        <Row className="awc-contact-main">
          
          {/* <Col lg={3} md={4} sm={12}>
            <Card className="m-2 awc-contact-box">
              <Row>
                <div className="d-flex ">
                  <Col lg={2} md={2} sm={2} className="awc-image">
                    <img src={LocationIcon} alt="Location"></img>
                  </Col>
                  <Col lg={10} md={10} sm={10} className="awc-contact-info">
                    <span>Email: </span> help.wecduk@gmail.com
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex ">
                  <Col lg={2} className="awc-image">
                    <img src={LocationIcon} alt="user name"></img>
                  </Col>
                  <Col lg={10} className="awc-contact-info">
                    <span>Address:</span>  ICDS office,Dehradun,U.K <br />Near Nanda ki chowki, Chakrata Road, Dehradun
                  </Col>
                </div>
              </Row>
              <Row>
                <div className="d-flex">
                  <Col lg={2} className="awc-image">
                    <img src={PhoneIcon} alt="phone number"></img>
                  </Col>
                  <Col lg={10} className="awc-contact-info">
                    <span> Department helpline:</span> 9557110679
                  </Col>
                </div>
              </Row>
            </Card>
          </Col> */}

          <Col lg={12}>
            <Card className="awc-office-contact-info">
              <Row>
                <Col lg={4} md={4} sm={12}>
                  <div className="p-3">
                    <div className="awc-contact-information">
                      <h2>
                        <MdOutlineMailOutline />
                        &nbsp; EMAIL
                      </h2>
                    </div>
                    <div className="awc-contact-subinfo">
                      <p>
                        {" "}
                        help.wecduk@gmail.com
                        <br />
                        dir.icds.ua@gmail.com
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12} className="awc-contact-border">
                  <div className="p-3">
                    <div className="awc-contact-information">
                      <h2>
                        <FaPhoneAlt />
                        &nbsp; CONTACT
                      </h2>
                    </div>
                    <div className="awc-contact-subinfo">
                      <p>
                        {" "}
                        +91 76681 51041 (Technical Helpline)
                        <br /> +91 92595 53906 (Scheme Helpline)
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="p-3">
                    <div className="awc-contact-information">
                      <h2>
                        <FaMapMarkerAlt />
                        &nbsp; ADDRESS
                      </h2>
                    </div>
                    <div className="awc-contact-subinfo">
                      <p>
                        {" "}
                        ICDS office,Dehradun,U.KUMAR
                        <br />
                        Near Naawca ki chowki, Chakrata Road, Dehradun
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUs;
