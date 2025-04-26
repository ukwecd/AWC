import React from "react";
import { Table, Button, Row, Col, Pagination } from "react-bootstrap";
import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";

import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";



const VerificationLog = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DirectorateDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>View Worker Verification Log</h1>
            </div>
            <div className="awc-after-fillter mt-3">
              <Row> <h2>Entry Log</h2></Row>
              <Row>
                <div className="awc-finance-mobresp">
                  <Col lg={6} md={6} sm={12} className="nd-staff-print11">
                    <div className="search-container">
                      <form>
                        <input
                          className="search"
                          id="searchleft1"
                          type="search"
                          name="q"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <label
                          className="button search-btn-Directorate"
                          for="searchleft1"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                    <Button variant="secondary" className="aws-copy-Directorate-btn mx-3">
                      Copy
                    </Button>
                    <Button className="awc-btn-Directorate-exl">Excel</Button>

                    <Button variant="secondary" className="dpo-prnt-Directorate-btn ">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>

              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="Direct-thead">
                    <tr>
                      <th rowSpan="2">S.No</th>
                      <th rowSpan="2">District</th>
                      <th rowSpan="2">Project</th>
                      <th rowSpan="2">Month</th>
                      <th rowSpan="2">Entry Time</th>
                      <th colSpan="1" className="text-center">
                        Document Uploaded
                      </th>

                      <th rowSpan="2">Delete</th>
                    </tr>

                  </thead>
                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>
                        <div className="dpo-p">

                          Haridwar

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          Bhagwanpur

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          Sep,2023

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          11-02-2025 17:49:32

                        </div>
                      </td>
                      <td>
                        <tr>
                          <th><div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money">
                                <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                  View pdf 1
                                </span>
                              </Button>
                            </Link>
                          </div></th>
                          <th><div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money">
                                <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                  View pdf 2
                                </span>
                              </Button>
                            </Link>
                          </div></th>

                        </tr>

                      </td>


                      <td ><span className="aws-delete">Ask to Reupload PDF <RiDeleteBin6Fill /></span></td>


                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div className="dpo-p">

                          Bageshwar

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          Kapkot

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          Sep,2023

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          11-02-2025 15:31:56

                        </div>
                      </td>
                      <td>
                        <tr>
                          <th><div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money">
                                <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                  View pdf 1
                                </span>
                              </Button>
                            </Link>
                          </div></th>
                          <th><div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money">
                                <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                  View pdf 2
                                </span>
                              </Button>
                            </Link>
                          </div></th>

                        </tr>

                      </td>


                      <td ><span className="aws-delete">Ask to Reupload PDF <RiDeleteBin6Fill /></span></td>


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
                    <Pagination className="Directorate-paging">
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

export default VerificationLog;
