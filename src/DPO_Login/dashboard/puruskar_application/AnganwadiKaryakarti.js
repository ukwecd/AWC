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
import { MdError } from "react-icons/md";
import { FaIdCard } from "react-icons/fa6";

const AnganwadiKaryakarti = () => {
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
              <h1>Anganwadi Puruskar Applicant List 2023-24</h1>
            </div>
            <div className="box-container">
              <div className="awc-after-fillter">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="dpo-accordin-top">
                    <Accordion.Header>
                      Waiting for Review by CDPO
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
                              <th>Merit</th>
                              <th>Status</th>
                              <th>Review</th>
                              <th>Mobile No.</th>
                              <th>Form ID</th>
                              <th>Account No.</th>
                              <th>Applicant Name</th>
                              <th>DOB</th>
                              <th>Father/Husband Name</th>
                              <th>Education Qualification</th>
                              <th>District</th>
                              <th>Project</th>
                              <th>AWC Name</th>
                              <th>Join Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr>
                          
                            <td>1</td>
                            <td>81</td>
                            <td>Approved</td>
                            <td>ok</td>
                            <td>9837879462</td>
                            <td>AP-2024-0044</td>
                            <td>25-Jun-1985</td>
                            <td>Kamla</td>
                           
                            <td>Darshan Singh</td>
                            <td>Post-Graduation/स्नातकोत्तर</td>
                            <td>Almora</td>
                            <td>Bhikiyasain [0506402]</td>
                            <td>BADHAN(AWC)</td>
                            <td>11-Dec-2010</td>
                          </tr> */}
                          </tbody>
                        </Table>
                      </div>
                      <div className="text-center awc-dna">
                        {" "}
                        <MdError /> Data Not Available
                      </div>
                      <Row className="awc-m-t">
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
                  <Accordion.Item eventKey="1" className="dpo-accordin-top">
                    <Accordion.Header>
                      Forwarded by CDPO to DPO
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
                              <th>Merit</th>
                              <th>Status</th>
                              <th>Review</th>
                              <th>Mobile No</th>
                              <th>Form ID</th>
                              <th>Applicant Nmae</th>
                              <th>DOB</th>
                              <th>Father/Husband Nmae</th>
                              <th>Education Qualification</th>
                              <th>District</th>
                              <th>Project</th>
                              <th>AWC Name</th>
                              <th>Join Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>81</td>
                              <td>Approved</td>
                              <td>ok</td>
                              <td>9837879462</td>
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
                              <td>11-Dec-2010</td>
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
                  <Accordion.Item eventKey="3" className=" dpo-accordin-top">
                    <Accordion.Header>
                      Forwarded by CDPO to DPO
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
                              <th>Merit</th>
                              <th>Status</th>
                              <th>Review</th>
                              <th>Mobile No</th>
                              <th>Form ID</th>
                              <th>Applicant Nmae</th>
                              <th>DOB</th>
                              <th>Father/Husband Nmae</th>
                              <th>Education Qualification</th>
                              <th>District</th>
                              <th>Project</th>
                              <th>AWC Name</th>
                              <th>Join Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>81</td>
                              <td>Approved</td>
                              <td>ok</td>
                              <td>9837879462</td>
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
                              <td>26-Dec-2003</td>
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
              {/* <Row>
                <div className="awc-dpo-mobresp">
                  <Col lg={6} md={6} sm={12} className="nd-staff-print11">
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
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                    <Button className="awc-btn-copy">Copy</Button>

                    <Button variant="secondary" className="nd-btn-prt">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>
              <div className="table-responsive-lg table-container-box mt-1">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="dpo-thead">
                    <tr>
                      <th>S.No</th>
                      <th>Edit</th>
                      <th>Aadhar No</th>
                      <th>Group Title</th>
                      <th>Grant Code</th>
                      <th>Worker Name</th>
                     
                      <th>Worker Mobile No</th>
                      <th>Worker Type</th>
                      <th>District</th>
                      <th>Project</th>
                      <th>AWC Name</th>
                      <th>AWC Code</th>
                      <th>Account No</th>
                      <th>IFSC Code</th>
                      <th>Bank Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div className="dpo-p">
                          <Button className="awc-edit-btn">
                            <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                            <FaUserEdit className="awc-update-icon" />  Edit{" "}
                             
                            </span>
                          </Button>
                        </div>
                      </td>

                      <td>558830682810</td>
                      <td>DWAR-AWW001	</td>
                      <td>GEN15</td>
                      <td>PUSHPA BISHT</td>
                      <td>9411764031</td>
                      <td>AWW</td>
                      <td>almora</td>
                      <td>dwarahat</td>
                      <td>KULSIVI</td>
                      <td>5064050516</td>
                      <td>11690511799</td>
                      <td>SBIN0007312</td>
                      <td>STATE BANK OF INDIA</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Row className="awc-m-t">
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
              </Row> */}
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

export default AnganwadiKaryakarti;
