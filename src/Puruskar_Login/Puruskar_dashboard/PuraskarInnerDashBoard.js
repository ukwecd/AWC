import React from "react";
import { Col, Pagination, Row, Table, Button } from "react-bootstrap";
import Footer from "../../componets/footer/Footer";
import "../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import "../../Puruskar_Login/assets/css/PurskarDashBoard.css";
import PuruskarDashBoard from "./PuruskarDashBoard";

const PuraskarInnerDashBoard = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <PuruskarDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>Dashboard-Puraskar login</h1>
            </div>

            <Row>
              <Col lg={6} md={6} sm={12} className="d-flex">
                <div className="awc-card-data flex-fill card">
                  <div className="card-body">
                    <div className="card-title awc-sub-heading">
                      <h1>AWW Award Application Real time Status 2023-24</h1>
                    </div>
                    <p className="card-text">
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
                            <Button className="awc-btn-puru-exl">Excel</Button>
                            <Button
                              variant="secondary"
                              className="dpo-prnt-puru-btn"
                            >
                              Print
                            </Button>
                          </Col>
                        </div>
                      </Row>
                      <div className="table-responsive-lg table-container-box mt-1">
                        <Table className="dpo-sub-table" striped bordered hover>
                          <thead className="purskar-thead">
                            <tr>
                              <th>District</th>
                              <th className="table-th-w">Applicable Project</th>
                              <th className="table-th-w">Final Submit</th>
                              <th>Rejected</th>
                              <th className="table-th-w">Approved by CDPO</th>
                              <th className="table-th-w">
                                Approved by District
                              </th>
                              <th>Chosen</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>*</td>
                              <td className="text-bold-clr">Total</td>
                              <td className="text-bold-clr">12</td>
                              <td className="text-bold-clr">11</td>
                              <td className="text-bold-clr">36</td>
                              <td className="text-bold-clr">78</td>
                              <td className="text-bold-clr">0</td>

                            </tr>
                            <tr>
                              <td>Almora</td>
                              <td>Bhikiyasain</td>
                              <td>0</td>
                              <td>0</td>
                              <td>1</td>
                              <td>2</td>
                              <td>0</td>
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
                            <Pagination className="purskar-paging">
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
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} className="d-flex pur-p-right">
                <div className="awc-card-data flex-fill card">
                  <div className="card-body">
                    <div className="card-title awc-sub-heading">
                      <h1>Tilu Rauteli Application Real time Status 2023-24</h1>
                    </div>
                    <p className="card-text">
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
                                  id="searchleft1"
                                  type="search"
                                  name="q"
                                  placeholder="Search"
                                  aria-label="Search"
                                />
                                <label
                                  className="button search-btn-dpo "
                                  for="searchleft1"
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
                            <Button className="awc-btn-puru-exl">Excel</Button>

                            <Button
                              variant="secondary"
                              className="dpo-prnt-puru-btn"
                            >
                              Print
                            </Button>
                          </Col>
                        </div>
                      </Row>
                      <div className="table-responsive-lg table-container-box mt-1">
                        <Table className="dpo-sub-table" striped bordered hover>
                          <thead className="purskar-thead">
                            <tr>
                              <th>District</th>

                              <th>Final Submit</th>
                              <th>Rejected</th>
                              <th>Approved by CDPO</th>
                              <th>Approved by District</th>
                              <th>Chosen</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>*</td>
                              <td className="text-bold-clr">12</td>
                              <td className="text-bold-clr">11</td>
                              <td className="text-bold-clr">36</td>
                              <td className="text-bold-clr">78</td>
                              <td className="text-bold-clr">0</td>
                            </tr>
                            <tr>
                              <td>Almora</td>
                              <td>Bhikiyasain</td>
                              <td>0</td>
                              <td>0</td>
                              <td>1</td>
                              <td>2</td>
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
                            <Pagination className="purskar-paging">
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
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PuraskarInnerDashBoard;
