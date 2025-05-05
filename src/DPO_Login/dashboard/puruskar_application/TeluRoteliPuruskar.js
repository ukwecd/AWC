import React from "react";
import {
  Accordion,
  Button,
  Col,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";
import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaIdCard } from "react-icons/fa";

const TeluRoteliPuruskar = () => {
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
              <h1>
                Rajya Stree Shakti Telu Roteli Puruskar Applicant List 2023-24
              </h1>
            </div>
            <div className="box-container">
              <div className="awc-after-fillter">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Waiting for Approval</Accordion.Header>
                    <Accordion.Body>
                      <div className="awc-dpo-alert">
                        <p>
                          Click on the form ID to view Detailed Profile or
                          Approve and Disapprove
                        </p>
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
                              <th>Form ID</th>
                              <th>Mobile No.</th>
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
                                  <Button className="dpo-form-id-btn">
                                    <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                      <FaIdCard className="awc-dpo-add-icon" />{" "}
                                      TR-2024-0010
                                    </span>
                                  </Button>
                                </div>
                              </td>
                              <td>9410731050</td>
                              <td>Sunita</td>
                              <td>15-sep-1975</td>
                              <td>Post Gradution</td>
                              <td>BioMola Almora Uttarakhand</td>
                              <td>Almora</td>

                              <td>
                                <div className="dpo-p">
                                  <Button className="dpo-approved-btn">
                                    <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                      <IoIosCheckmarkCircle className="awc-dpo-add-icon" />{" "}
                                      Open Link
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
                    <Accordion.Header>
                      Approved/Forwarded to Directorate
                    </Accordion.Header>
                    <Accordion.Body>
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

export default TeluRoteliPuruskar;
