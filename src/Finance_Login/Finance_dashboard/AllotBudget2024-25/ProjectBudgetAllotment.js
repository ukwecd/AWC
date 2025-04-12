import React from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import { useNavigate } from "react-router-dom";

import FinanceDashBoard from "../FinanceDashBoard";
import { FaAngleLeft } from "react-icons/fa";

const ProjectBudgetAllotment = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  }
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
              <h1>Bulk Budget 2024-25 Allotment Page (Project)</h1>
            </div>
            <div className="box-container">
              <div class="awc-table-head">
                <h1> <FaAngleLeft className="go-back-arrow" onClick={goBack} /> Manday Bill View:</h1>
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
                                Grant/Component
                              </Form.Label>

                              <Form.Select className="mb-2">
                                <option>Choose Grant|Component </option>
                                <option value="1">January 2024-25</option>
                                <option value="2">February 2024-25</option>
                                <option value="3">March 2024-25</option>
                              </Form.Select>
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
                              <Form.Control type="text"></Form.Control>
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
                        </Row>
                      </Col>
                      <div className="biil-submit1">
                        <Button className="awc-dop-primary-btn">
                          Next Step
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
