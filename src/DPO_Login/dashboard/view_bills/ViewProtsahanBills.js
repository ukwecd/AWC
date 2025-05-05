import React from "react";
import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";
import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const ViewProtsahanBills = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DPODashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>View Generated Protsahan Bills</h1>
            </div>
            <div className="box-container">
              <div class="awc-table-head">
                <h1>Protsahan Bill View:</h1>
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

                <div className="awc-dpo-head">
                  <h1>
                    Manday For Month : February 2024-25 | all Project
                  </h1>
                </div>

                <div class="awc-table-head">
                  <h1> Enterice For Pending Protsahan 2021-22</h1>
                </div>
                <Row>
                  <div className="awc-dpo-mobresp">
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
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
                      sm={6}
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
                        <th>Bill Status</th>
                        <th>Group Title</th>
                        <th>Employee Name</th>
                        <th>Grant Code</th>
                        <th>Emplyee Type</th>
                        <th>District</th>
                        <th>Project </th>
                        <th>AWC Name</th>
                        <th>Account No</th>
                        <th>IFSC Code</th>
                        <th>Bank Name</th>
                        <th>Claim Amount</th>

                        <th>Remark (if Any)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Send to Directorate</td>
                        <td>DHAU MINI002</td>
                        <td>Tuhlsi Aray</td>
                        <td>GEN15</td>
                        <td>MINI</td>
                        <td>Almora</td>
                        <td>Chakrata</td>
                        <td>FALTIYA 2</td>
                        <td>0003-xxxx-xx</td>
                        <td>YESB0AZSB12</td>
                        <td>State Bannk of India</td>
                        <td>6000</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                {/* <div className="text-center awc-dna">
                  {" "}
                  <MdError /> Data Not Available
                </div> */}
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
                          <div>Total Amount</div>

                        </div>
                        <Badge bg="primary" pill>
                          6082200
                        </Badge>
                      </ListGroup.Item>

                    </ListGroup>
                  </Col>

                </Row>




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

export default ViewProtsahanBills;
