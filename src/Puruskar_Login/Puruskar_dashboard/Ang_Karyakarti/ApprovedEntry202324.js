import React from "react";
import { Col, Row, Button, Pagination, Table } from "react-bootstrap";
import "../../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import PuruskarDashBoard from "../PuruskarDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaIdCard } from "react-icons/fa";

const ApprovedEntry202324 = () => {
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
              <h1>
                Anganwadi Puraskar Selected by District Section Committee List
                2022-23
              </h1>
            </div>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <div className="box-container1">
                  <div className="table-responsive-lg table-container-box mt-1">
                    <Table className="dpo-sub-table" striped bordered hover>
                      <thead className="purskar-thead">
                        <tr>
                          <th>Status</th>
                          <th>Almora</th>
                          <th>Bageshwar</th>
                          <th>Chamoli</th>
                          <th>Champawat</th>
                          <th>Dehradun</th>
                          <th>Haridwar</th>
                          <th>Nanital</th>
                          <th>Pauri</th>
                          <th>Pithoragarh</th>
                          <th>Rudraprayag</th>
                          <th>Tehri</th>
                          <th>Usnagar</th>
                          <th>Uttarkashi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-primary awc-bold">
                            Selected by CDPO
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    18
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    3
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    18
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    3
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    10
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    20
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    18
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    27
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    15
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    6
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    20
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    23
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    25
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>

                          {/* <td>
                        <div className="dpo-p">
                          <Button className="dpo-approved-btn">
                            <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                              <IoIosCheckmarkCircle className="awc-dpo-add-icon" /> Approved By CDPO
                            </span>
                          </Button>
                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">
                          <Button className="dpo-return-btn">
                            <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                              <GiReturnArrow className="awc-dpo-add-icon" /> Return to CDPO
                            </span>
                          </Button>
                        </div>
                      </td> */}
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="awc-dpo-head">
              <h1>AWW Award 2022-23: All Selected For Puraskar</h1>
            </div>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <div className="box-container">
                  <Row>
                    <div className="awc-finance-mobresp">
                      <Col
                        lg={12}
                        md={12}
                        sm={12}
                        className="nd-staff-print m-1"
                      >
                        <Button
                          variant="secondary"
                          className="awc-btn-puru-exl"
                        >
                          Download Excel
                        </Button>
                      </Col>
                    </div>
                  </Row>
                  <div className="table-responsive-lg table-container-box mt-1">
                    <Table className="dpo-sub-table" striped bordered hover>
                      <thead className="purskar-thead">
                        <tr>
                          <th>SNo.</th>
                          <th>District</th>
                          <th>Project</th>
                          <th>Candidate Name</th>
                          <th>Form ID</th>
                          <th>Remark</th>
                          <th>Merit</th>
                          <th colSpan="2">Choose For AWARD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Champawat</td>
                          <td>Lohaghat[0506503]</td>
                          <td>Seema Joshi</td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    <FaIdCard className="awc-dpo-add-icon" />{" "}
                                    AP-2024-00079
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>

                          <td>Aaganwadi karykarti Puraskar hetu</td>
                          <td>93</td>
                          <td>
                            <input type="radio" name="gender" />
                          </td>
                          <td>
                            <div className="dpo-p">
                              <Button className="dpo-approved-btn">
                                <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                  <IoIosCheckmarkCircle className="awc-dpo-add-icon" />{" "}
                                  Submit
                                </span>
                              </Button>
                            </div>
                          </td>
                          {/* <td>
                        <div className="dpo-p">
                          <Button className="dpo-return-btn">
                            <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                              <GiReturnArrow className="awc-dpo-add-icon" /> Return to CDPO
                            </span>
                          </Button>
                        </div>
                      </td> */}
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Champawat</td>
                          <td>Barkot[0506503]</td>
                          <td>Manju Bisht</td>
                          <td className="text-primary awc-bold">
                            <div className="dpo-p">
                              <Link to="#">
                                {" "}
                                <Button className="awc-btn-money text-primary">
                                  <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                    <FaIdCard className="awc-dpo-add-icon" />{" "}
                                    AP-2024-000120
                                  </span>
                                </Button>
                              </Link>
                            </div>
                          </td>

                          <td>Ok</td>
                          <td>86</td>
                          <td>
                            <input type="radio" name="gender" />
                          </td>
                          <td>
                            <div className="dpo-p">
                              <Button className="dpo-approved-btn">
                                <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                  <IoIosCheckmarkCircle className="awc-dpo-add-icon" />{" "}
                                  Submit
                                </span>
                              </Button>
                            </div>
                          </td>
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

export default ApprovedEntry202324;
