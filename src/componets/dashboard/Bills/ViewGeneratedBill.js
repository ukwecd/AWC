import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import "../../../assets/css/Received.css";
import DashBoard from "../DashBoard";
import Footer from "../../footer/Footer";

const ViewGeneratedBill = () => {
  
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main received-form">
            <div className="awc-table-heading">
              <h1>View Generated Bill</h1>
             
            </div>
            <div className="box-container">
              <div>
                <Form>
                  <Row>
                    <Col lg={6} md={6} sm={12}>
                      <Row className="awc-bills-box1">
                        <div className="awc-label-title">
                        Manday Bill View:
                        </div>
                        {/* <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Manday"
                              disabled
                            />
                          </Form.Group>
                        </Col> */}
                        {/* <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Type</option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col> */}
                        <Col lg={6} md={6} sm={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Month </option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Button className="create-submit-btn">Submit</Button>
                        </Col>
                      </Row>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                      <Row className="awc-bills-box1">
                        <div className="awc-label-title">
                        Protsahan Bill View:
                        </div>
                        {/* <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Manday"
                              disabled
                            />
                          </Form.Group>
                        </Col> */}

                        <Col lg={6} md={6} sm={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Month </option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <Button className="create-submit-btn">Submit</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
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

export default ViewGeneratedBill;
