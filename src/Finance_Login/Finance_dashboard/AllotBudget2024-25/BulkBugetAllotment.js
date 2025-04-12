import React from "react";

import {

  Button,
  Col,
  Form,

  Row,
  Table,
} from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import FinanceDashBoard from "../FinanceDashBoard";

const BulkBugetAllotment = () => {
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
                <h1> Manday Bill View:</h1>
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
                                <Form.Label className="finace-label">Grant/Component</Form.Label>
                                
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
                               <Form.Label className="finace-label">Letter No</Form.Label>
                              <Form.Control type="text">

                              </Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                               <Form.Label className="finace-label">Allotment Date</Form.Label>
                              <Form.Control type="date">

                              </Form.Control>
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
                          <thead className="dpo-thead">
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
                              <th>
                                Amount
                              </th>
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
                               
                              <Form.Control type="text" placeholder="Almora">

                              </Form.Control>
                            </Form.Group>
                              </td>
                             
                              <td>
                              <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                               
                              <Form.Control type="text" placeholder="Chakrata">

                              </Form.Control>
                            </Form.Group>
                              </td>
                              <td>
                              <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                               
                              <Form.Control type="text" placeholder="15">

                              </Form.Control>
                            </Form.Group>
                              </td>
                              <td>
                              <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                               
                              <Form.Control type="text" placeholder="Chakrata">

                              </Form.Control>
                            </Form.Group>
                              </td>
                              <td>
                              <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                               
                              <Form.Control type="text" placeholder="AWC Rent">

                              </Form.Control>
                            </Form.Group>
                              </td>
                              <td>
                              <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                               
                              <Form.Control type="date" placeholder="Chakrata">

                              </Form.Control>
                            </Form.Group>
                              </td>

                              <td>
                              <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                               
                              <Form.Control type="text" placeholder="123">

                              </Form.Control>
                            </Form.Group>
                              </td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                    0{" "}
                                    <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
                                  </span>
                                </div>
                              </td>

                              <td>
                                <div className="dpo-p">
                                  <Button className="awc-disapprove-btn">
                                    <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                      <IoCloseCircle className="awc-dpo-add-icon" />{" "}
                                      DisApprove
                                    </span>
                                  </Button>
                                </div>
                              </td>
                              <td>
                                <div className="dpo-p">
                                  <Button className="awc-approve-btn">
                                    <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                      <IoIosCheckmarkCircle className="awc-dpo-add-icon" />{" "}
                                      Approve
                                    </span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Chakrata</td>
                              <td>116</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                    0{" "}
                                    <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
                                  </span>
                                </div>
                              </td>
                              <td>64</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                    0{" "}
                                    <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
                                  </span>
                                </div>
                              </td>
                              <td>64</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                    0{" "}
                                    <FaCircleCheck className="awc-dpo-rmv-icon" />{" "}
                                  </span>
                                </div>
                              </td>

                              <td>180</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                    0{" "}
                                    <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
                                  </span>
                                </div>
                              </td>

                              <td>
                                <div className="dpo-p">
                                  <Button className="awc-disapprove-btn">
                                    <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                      <IoCloseCircle className="awc-dpo-add-icon" />{" "}
                                      DisApprove
                                    </span>
                                  </Button>
                                </div>
                              </td>
                              <td>
                                <div className="dpo-p">
                                  <Button className="awc-approve-btn">
                                    <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                      <IoIosCheckmarkCircle className="awc-dpo-add-icon" />{" "}
                                      Approve
                                    </span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      {/* <div className="text-center awc-dna">
                        {" "}
                        <MdError /> Data Not Available
                      </div> */}
                 

               
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
