import React from "react";

import { Accordion, Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import { FaIdCard } from "react-icons/fa";
import { IoIosCheckmarkCircle} from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
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
              <h1>View Generated Manday Bills</h1>
            </div>
            <div className="box-container">
              <div class="awc-table-head">
                <h1> Manday Bill View:</h1>
              </div>
              <div className="box-container">
                <div>
                  <Form>
                    <Row className="mt-3">
                      <Col lg={6} md={6} sm={12}>
                        <Row>
                          <Col lg={5} md={5} sm={5}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select className="mb-2">
                                <option>Choose Month </option>
                                <option value="1">January 2024-25</option>
                                <option value="2">February 2024-25</option>
                                <option value="3">March 2024-25</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col lg={5} md={5} sm={5}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select className="mb-2">
                                <option>Project Name </option>
                                <option value="1">Chakrata1</option>
                                <option value="1">Chakrata2</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col lg={2} md={2} sm={2} className="biil-submit">
                            <Button className="awc-dop-primary-btn">
                              Submit
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>

              <div className="awc-after-fillter mt-3">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Manday For Month:PMSBY & PMSBY 2024-25 | Project All
                    </Accordion.Header>
                    <Accordion.Body>
                      {/* <div className="awc-dpo-alert">
                        <p>
                          Click on the form ID to view Detailed Profile or
                          Approve and Disapprove
                        </p>
                      </div> */}
                      <div class="awc-table-head">
                        <h1> Enterice For PMJJBY & PMSBY 2024-25</h1>
                      </div>
                      <Row>
                        <div className="awc-dpo-mobresp">
                          <Col
                            lg={6}
                            md={6}
                            sm={12}
                            className="nd-staff-print11"
                          >
                            <div className="search-container">
                              <form>
                                <input
                                  className="search"
                                  id="searchleft"
                                  type="search"
                                  name="q"
                                  placeholder="Search"
                                  aria-label="Search"
                                />
                                <label
                                  className="button search-btn-dpo "
                                  for="searchleft"
                                >
                                  <span className="mglass">&#9906;</span>
                                </label>
                              </form>
                            </div>
                          </Col>
                          <Col
                            lg={6}
                            md={6}
                            sm={12}
                            className="nd-staff-print "
                          >
                            <Button className="awc-btn-copy">Copy</Button>

                            <Button
                              variant="secondary"
                              className="awc-dpo-btn-prt"
                            >
                              Print
                            </Button>
                            <Button
                              variant="secondary"
                              className="nd-btn-excel"
                            >
                              Excel
                            </Button>
                          </Col>
                        </div>
                      </Row>
                      <div className="table-responsive-lg">
                        <Table className="awc-sub-table" striped bordered hover>
                          <thead className="dpo-thead">
                            <tr>
                              <th>S.No</th>
                              <th>Group Title</th>
                              <th>Employee Name</th>
                              <th>Grant Code</th>
                              <th>Emplyee Type</th>
                              <th>District</th>
                              <th>Project Name</th>
                              <th>AWC Name</th>
                              <th>Account No</th>
                              <th>IFSC Code</th>
                              <th>Bank Name</th>
                              <th>Center Share</th>
                              <th>State Share</th>
                              <th>Claim Amount</th>
                              <th>Remark (if Any)</th>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </Table>
                      </div>
                      <div className="text-center awc-dna">
                        {" "}
                        <MdError /> Data Not Available
                      </div>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          {" "}
                          <div className="tech-staff-perviose">
                            <div>Showing 1 to 10 of 105 entries</div>
                          </div>{" "}
                        </Col>
                        <Col lg={6} md={6} sm={12} className="awc-pading-next">
                          {" "}
                          <div className="tech-staff-table">
                            {" "}
                            <Pagination className="awc-paging">
                              <Pagination.First />
                              <Pagination.Prev />
                              <Pagination.Item>{1}</Pagination.Item>
                              <Pagination.Ellipsis />

                              <Pagination.Item>{10}</Pagination.Item>
                              <Pagination.Item>{11}</Pagination.Item>
                              <Pagination.Item active>{12}</Pagination.Item>

                              <Pagination.Next />
                              <Pagination.Last />
                            </Pagination>
                          </div>{" "}
                        </Col>
                      </Row>
                    
<Row>
  <Col lg={6} md={6} sm={12}>
  <ListGroup as="ol" className="awc-d-flex">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="me-auto">
          <div>AWW</div>
         
        </div>
        <Badge bg="primary" pill>
          0
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="me-auto">
          <div>AWH</div>
        
        </div>
        <Badge bg="primary" pill>
          0
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="me-auto">
          <div>MINI</div>
        
        </div>
        <Badge bg="primary" pill>
          0
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="me-auto">
          <div>Total Worker</div>
        
        </div>
        <Badge bg="primary" pill>
          0
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  </Col>
<Col lg={6} sm={12} md={6}>
<ListGroup as="ol" className="awc-d-flex">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="me-auto">
          <div>Center Share</div>
         
        </div>
        <Badge bg="primary" pill>
          0
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className=" me-auto">
          <div>State Share</div>
       
        </div>
        <Badge bg="primary" pill>
         0
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="me-auto">
          <div>Total Amount</div>
          
        </div>
        <Badge bg="primary" pill>
          0
        </Badge>
      </ListGroup.Item>
    </ListGroup>
</Col>
   
</Row>



                      <div class="awc-table-head">
                        <h1> State For PMJJBY 2024-25</h1>
                      </div>
                      <div className="table-responsive-lg">
                        <Table className="awc-sub-table" striped bordered hover>
                          <thead className="dpo-thead">
                            <tr>
                              <th>Project</th>
                              <th>AWW|Total</th>
                              <th>AWW| Entry</th>
                              <th>AWH | Total</th>
                              <th>AWH |Entry</th>
                              <th>MiNI| Total</th>
                              <th>MINI| Entry</th>
                              <th>Total Employee</th>
                              <th>Total Entry</th>
                              <th colSpan="2" className="text-center">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Chakrata</td>
                              <td>116</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                   
                                    0{" "} <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
                                  </span>
                                </div>
                                
                              </td>
                              <td>64</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                   
                                    0{" "} <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
                                  </span>
                                </div>
                                
                              </td>
                              <td>64</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                   
                                    0{" "} <FaCircleCheck  className="awc-dpo-rmv-icon" />{" "}
                                  </span>
                                </div>
                                
                              </td>
                           
                              <td>180</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                   
                                    0{" "} <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
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
                                   
                                    0{" "} <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
                                  </span>
                                </div>
                                
                              </td>
                              <td>64</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                   
                                    0{" "} <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
                                  </span>
                                </div>
                                
                              </td>
                              <td>64</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                   
                                    0{" "} <FaCircleCheck  className="awc-dpo-rmv-icon" />{" "}
                                  </span>
                                </div>
                                
                              </td>
                           
                              <td>180</td>
                              <td>
                                <div className="dpo-table-Entry">
                                  <span className="badge  rounded-pill d-inline-block dpo-entry">
                                   
                                    0{" "} <IoCloseCircle className="awc-dpo-entry-icon" />{" "}
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
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="mt-3">
                    <Accordion.Header>
                      Approved/Forwarded to Directorate
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <div className="awc-dpo-mobresp">
                          <Col
                            lg={6}
                            md={6}
                            sm={12}
                            className="nd-staff-print11"
                          >
                            <div className="search-container">
                              <form>
                                <input
                                  className="search"
                                  id="searchleft"
                                  type="search"
                                  name="q"
                                  placeholder="Search"
                                  aria-label="Search"
                                />
                                <label
                                  className="button search-btn-dpo "
                                  for="searchleft"
                                >
                                  <span className="mglass">&#9906;</span>
                                </label>
                              </form>
                            </div>
                          </Col>
                          <Col
                            lg={6}
                            md={6}
                            sm={12}
                            className="nd-staff-print "
                          >
                            <Button className="awc-btn-copy">Copy</Button>

                            <Button
                              variant="secondary"
                              className="awc-dpo-btn-prt"
                            >
                              Print
                            </Button>
                            <Button
                              variant="secondary"
                              className="nd-btn-excel"
                            >
                              Excel
                            </Button>
                          </Col>
                        </div>
                      </Row>
                      <div className="table-responsive-lg">
                        <Table className="awc-sub-table" striped bordered hover>
                          <thead className="dpo-thead">
                            <tr>
                              <th>S.No</th>
                              <th>Form ID</th>
                              <th>Mobile No</th>
                              <th>Applicant Name</th>
                              <th>DOB</th>
                              <th>Education</th>
                              <th>Address</th>
                              <th>District</th>
                              <th>Social Media Link/URL</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>

                              <td>
                                <div className="dpo-p">
                                  <Button className="awc-edit-btn">
                                    <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                      <FaIdCard className="awc-dpo-add-icon" />{" "}
                                      AP-2024-0044
                                    </span>
                                  </Button>
                                </div>
                              </td>
                              <td>Kamla</td>
                              <td>25-Jun-1985</td>
                              <td>Darshan Singh</td>
                              <td>Post-Graduation/स्नातकोत्तर</td>
                              <td>Almora</td>
                              <td>Bhikiyasain [0506402]</td>
                              <td>BADHAN(AWC)</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          {" "}
                          <div className="tech-staff-perviose">
                            <div>Showing 1 to 10 of 105 entries</div>
                          </div>{" "}
                        </Col>
                        <Col lg={6} md={6} sm={12} className="awc-pading-next">
                          {" "}
                          <div className="tech-staff-table">
                            {" "}
                            <Pagination className="awc-paging">
                              <Pagination.First />
                              <Pagination.Prev />
                              <Pagination.Item>{1}</Pagination.Item>
                              <Pagination.Ellipsis />

                              <Pagination.Item>{10}</Pagination.Item>
                              <Pagination.Item>{11}</Pagination.Item>
                              <Pagination.Item active>{12}</Pagination.Item>

                              <Pagination.Next />
                              <Pagination.Last />
                            </Pagination>
                          </div>{" "}
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
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
