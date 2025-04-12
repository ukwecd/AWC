import React from "react";

import { Button, Col, Form, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import { useNavigate } from "react-router-dom";

import FinanceDashBoard from "../FinanceDashBoard";
import { FaAngleLeft } from "react-icons/fa";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

const BulkBugetAllotment = () => {
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
                <h1> <HiMiniArrowLongLeft className="go-back-arrow" onClick={goBack} /> Manday Bill View:</h1>
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

              <div className="awc-after-fillter mt-3">
                {/* <div className="awc-dpo-alert">
                        <p>
                          Click on the form ID to view Detailed Profile or
                          Approve and Disapprove
                        </p>
                      </div> */}

                <div class="awc-table-head">
                  <h1>Bulk Budget 2024-25 Allotment Form</h1>
                </div>
                <div className="table-responsive-lg">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                      <tr>
                        <th>Id</th>
                        <th>District</th>
                        <th>Project</th>
                        <th>Scheme</th>
                        <th>Grant</th>
                        <th>Component</th>
                        <th>Date</th>
                        <th>Letter No</th>
                        <th>Current Balance</th>
                        <th>Amount</th>
                        <th>Remark</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Almora"
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Bhaisiyachana"
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>

                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="UK282"
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="15"
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="UK282"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="date"
                              placeholder="2025-04-09"
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="123"
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="63600.00"
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="0"
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder=""
                              className="control-wth"
                            ></Form.Control>
                          </Form.Group>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className="text-center awc-dna mt-2">
                  {" "}
                  <Form>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I have filled the form correctly"
                      />

                      <Button
                        variant="primary"
                        className="awc-dop-primary-btn"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Form.Group>
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

export default BulkBugetAllotment;
