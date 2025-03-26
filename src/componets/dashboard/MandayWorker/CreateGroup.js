import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Row, Table, Form, Pagination } from "react-bootstrap";
import "../../../assets/css/CreateGroup.css";
import Accordion from "react-bootstrap/Accordion";
import "../../../assets/css/History.css";
import Footer from "../../footer/Footer";
const CreateGroup = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-table-heading">
              <h1>Group Creation and View page</h1>
            </div>
            <div className="box-container">
              <div className="awc-fillter-box">
                <Form>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Group controlId="selectOption">
                        <Form.Label className="awc-select-opn">
                          Create New Group:
                        </Form.Label>
                        <Form.Select className="mb-2">
                          <option>Choose Type</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs="auto" className="mt-4">
                      <Button type="submit" className=" create-submit-btn mb-2">
                        Submit
                      </Button>
                    </Col>
                    <Col className="mt-4 awc-lebel-btn">
                      <Button type="submit" className=" create-group-btn mb-2">
                        Edit Group Label
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
            <div className="awc-table-heading">
              <h1>Added Groups with Employee</h1>
            </div>
            <div className="awc-after-fillter">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    HAVA-AWW001 | Newly Promoted ( 73 workers in this group)
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive-lg">
                      <Table className="awc-sub-table" striped bordered hover>
                        <thead className="awc-thead">
                          <tr>
                            <th>S.No</th>
                            <th>Group Title</th>
                            <th>Worker Name</th>
                            <th>Worker Type</th>
                            <th>AWC Name</th>
                            <th>AWC Code</th>
                            <th>Account No.</th>
                            <th>IFSC Code</th>
                            <th>Bank Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>HAVA-AWW001</td>
                            <td>meena devi</td>
                            <td>AWW</td>
                            <td>BHEH</td>
                            <td>5064060407</td>
                            <td>000134001100331</td>
                            <td>YESB0AZSB02</td>
                            <td>ALMORA DISTRICT CENTRAL CO-OP.BANK</td>
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
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>Old Data</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive-lg">
                      <Table className="awc-sub-table" striped bordered hover>
                        <thead className="awc-thead">
                          <tr>
                            <th>S.No</th>
                            <th>Old Information Description</th>
                            <th>Worker Name</th>
                            <th colSpan="2" className="text-center">
                              Worker Mobile No
                            </th>
                            <th>Worker Type</th>
                            <th>Acount No.</th>
                            <th>IFSC Code</th>
                            <th>Bank name</th>
                            <th>AWC name</th>
                            <th>AWC Code</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>HAVA-AWW001</td>
                            <td>meena devi</td>
                            <td>AWW</td>
                            <td>BHEH</td>
                            <td>5064060407</td>
                            <td>000134001100331</td>
                            <td>YESB0AZSB02</td>
                            <td>ALMORA DISTRICT CENTRAL CO-OP.BANK</td>
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

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateGroup;
