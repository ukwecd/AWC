import React from "react";
import { Button, Col, Form, Nav, Navbar, Row, Table } from "react-bootstrap";
import { MdSimCardDownload } from "react-icons/md";
import "../../assets/css/LoginBanner.css";
import { FaUserShield, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
import News from "../../assets/images/news.png";
import { BsFillFilePdfFill } from "react-icons/bs";
import Logo from "../../assets/images/uklogo.png";
import Wecdlogo from "../../assets/images/wecdlogo.png";
import Group from "../../assets/images/Groupimg.png";
import { CiCircleCheck } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const LoginBanner = () => {
  return (
    <div clasName="container-fluid">
      <Row className="flex-fill">
        <Col lg={7} md={7} sm={12} className="awc-col awc-p">
          <div>
            <div className="awc-home mt-4">
              <h1>उत्तराखंड सरकार | Gov.t of Uttarakhand</h1>
            </div>
            <div className="awc-update d-flex align-items-center gap-3">
              <img src={News} alt="news"></img>नंदा गौरा योजना के तहत 12वीं
              पासआउट 2024 के लिए नए आवेदन केवल 30-नवंबर-2024 तक भरे जा सकते{" "}
            </div>
            <div className="awc-table">
              <h2 className="text-center">महत्वपूर्ण लिंक</h2>
              <div className="table-responsive-lg table-container">
                <Table striped bordered hover className="awc-sub-table mt-2">
                  <thead className="awc-thead-table">
                    <tr>
                      <th>विज्ञप्ति</th>
                      <th>आरंभ तिथि</th>
                      <th>अंतिम तिथि</th>
                      <th>शासनादेश </th>
                      <th>प्रयोगकर्ता निर्देशिका</th>
                      <th>पूर्ण विज्ञप्ति</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="awc-td">
                          आंगनबाड़ी कार्यकर्त्री/सहायिका के पद परचयन वर्ष 2024-25
                          हेतु क्लिक कर
                        </div>{" "}
                      </td>
                      <td>02-Jan-2025</td>
                      <td>08-Feb-2025</td>
                      <td>
                        <div className="awc-w">
                          शासनादेश{" "}
                          <BsFillFilePdfFill className="awc-pdf-icon" />
                        </div>
                      </td>
                      <td>
                        निर्देशिका{" "}
                        <BsFillFilePdfFill className="awc-pdf-icon" />
                      </td>
                      <td>
                        <BsFillFilePdfFill className="awc-pdf-icon" />{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="awc-alert-span">
                          {" "}
                        
                        </div>
                        आंगनवाड़ी कार्यकर्ती पुरस्कार के चयन हेतु क्लिक करे
                      </td>
                      <td>29-Jun-2024</td>
                      <td>21-Jul-2024</td>
                      <td>
                        <div className="awc-w">
                          शासनादेश{" "}
                          <MdSimCardDownload className="awc-pdf-icon" />
                        </div>
                        <span className="awc-span-alert1">अहर परियोजनाओं की सूची <LiaEyeSolid className="awc-span-icon" /></span>
                      </td>
                      <td>
                        निर्देशिका{" "}
                        <BsFillFilePdfFill className="awc-pdf-icon" />
                      </td>
                      <td>
                        <BsFillFilePdfFill className="awc-pdf-icon" />{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="awc-alert-span">
                      <span className="awc-span-closed">Application closed</span></div>
                        राज्य स्त्री शक्ति तीलू रौतेली पुरुस्कार हेतु क्लिक करे
                      </td>
                      <td>02-Jan-2025</td>
                      <td>08-Feb-2025</td>
                      <td>
                        <div className="awc-w">
                          शासनादेश{" "}
                          <BsFillFilePdfFill className="awc-pdf-icon" />
                        </div>
                      </td>
                      <td>
                        निर्देशिका{" "}
                        <BsFillFilePdfFill className="awc-pdf-icon" />
                      </td>
                      <td>
                        <BsFillFilePdfFill className="awc-pdf-icon" />{" "}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <div className="awc-bg">
            <i>
              <div className="awc-box-left"></div>
              <img src={Group} alt="group-img" className="img-fluid"></img>
            </i>
          </div>
        </Col>

        <Col lg={5} md={5} sm={12} className="awc-login-col">
          <Navbar expand="lg md" >
            <Navbar.Brand href="#home" className=" awc-heading ">
              <h1>उत्तराखंड सरकार | Gov.t of Uttarakhand</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end flex-grow-1">
                <Nav.Link href="#home">
                  <FaGlobe className="me-1" />
                  Official Website
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <FaUserShield className="me-1" />
                  Login (Admin)
                </Nav.Link>
                <Nav.Link href="#link">
                  <FaPhoneAlt className="me-1" />
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* <div className="awc-heading">
              <h1>उत्तराखंड सरकार | Gov.t of Uttarakhand</h1>
            </div> */}
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
                <p className="text-center awc-login-subtitle">
                  Applicant/User Login Form
                </p>

                <Form className="awc-form">
                  <h1 className="awc-sign text-center ">
                    {/* <img src={Login} alt="sign" className="p-2"></img>साइन इन */}
                    Sign in Now
                  </h1>

                  <Form.Group
                    className="mb-3 input-container"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="awc-form-label">
                      Registered Mobile No.
                    </Form.Label>

                    <Form.Control
                      type="number"
                      placeholder="+91-9876543210"
                      name="phone_no"
                      className="awc-form-control"
                    />
                    <CiCircleCheck className="input-icon" />
                    <span className="awc-verify">Verify</span>
                  </Form.Group>
                  {/* <InputGroup hasValidation>
                    <Form.Control type="text" required isInvalid />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                  <InputGroup hasValidation>
                    <Form.Control type="text" required isInvalid />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup> */}

                  <Form.Group
                    className="mb-3 input-container"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="awc-form-label">
                      Your Password
                    </Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="********"
                      name="phone_no"
                      className="awc-form-control"
                    />
                    <CiCircleCheck className="input-icon" />
                    <span className="awc-verify">Verify</span>
                  </Form.Group>
                  <Form.Group className="text-center ">
                   <Link to="/InnerDashBoard"> <Button
                      type="submit"
                      className="mt-3 awc-primary-btn nd-primary-btn1"
                      name="login"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="SingIn"
                        name="login"
                      >
                        Go to DashBoard
                      </span>
                    </Button></Link>
                  </Form.Group>
                  <Row>
                    <Col lg={12} md={12} sm={12} className="awc-forgot-pass">
                      <p> पासवर्ड भूल गए है ?</p>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginBanner;
