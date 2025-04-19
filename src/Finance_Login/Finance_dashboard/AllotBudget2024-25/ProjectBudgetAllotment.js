import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import { useNavigate } from "react-router-dom";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import FinanceDashBoard from "../FinanceDashBoard";

const ProjectBudgetAllotment = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <FinanceDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>Project | Budget Allotment Page</h1>
            </div>
            <div className="box-container">
              <div class="awc-sub-heading">
                <h2>
                  {" "}
                 <HiMiniArrowLongLeft className="go-back-arrow"
                    onClick={goBack}
                  />{" "}
                 Budget Allotment Form for Financial Year 2024-25
                </h2>
              </div>
              <div className="box-container">
                <div>
                  <Form>
                    <Row>
                      <Col lg={12} md={12} sm={12}>
                        <Row>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                District Name
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Almora"
                                disabled
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Project Name
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Bhaisiyachana"
                                disabled
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Scheme
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="UK282"
                                disabled
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Grant
                              </Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="15"
                                disabled
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Choose Component
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="AWC Rent | आंगनवाड़ी भवन किराया"
                                disabled
                              ></Form.Control>
                            </Form.Group>
                          </Col>

                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Letter No
                              </Form.Label>
                              <Form.Control type="number"></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Allotment Date
                              </Form.Label>
                              <Form.Control type="date"></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group controlId="formFileSm" className="mb-3">
                              <Form.Label className="awc-dpo-label-title">
                                Amount | {" "}
                                <span className="note-text">
                                  {" "}
                                  &nbsp; (Current Balance ( 63600.00 ))
                                </span>
                                :
                              </Form.Label>
                              <Form.Control type="text" placeholder="Enter the Amount you want to allot (in RS)"></Form.Control>
                              <span className="finance-pdf">
                              Note: This Amount will to Added to Current Balance
                              </span>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label className="awc-dpo-label-title">
                                Remark:
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Please Enter your Remark"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                      <div className="biil-submit1">
                        <Button className="awc-dop-primary-btn">
                          Submit
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBudgetAllotment;
