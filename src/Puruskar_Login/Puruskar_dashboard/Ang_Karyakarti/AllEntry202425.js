import React from "react";
import { Col, Row,Button, Pagination, Table} from "react-bootstrap";
import "../../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import PuruskarDashBoard from "../PuruskarDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Link } from "react-router-dom";


const AllEntry202425 = () => {
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
              <h1>Anganwadi Puraskar Application All  List 2023-24</h1>
            </div>
            <Row>
             
              <Col lg={12} md={12} sm={12}>
                <div className="box-container1">
                  <div class="awc-purskar-alert">
                    <h2>Click On District Name to Filter</h2>
                  </div>

                 
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
                          <th>usnagar</th>
                          <th>Uttarkashi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        <td className="text-primary awc-bold">
                          <div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                 All Entry
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
                                7
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
                                9
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
                                13
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
                                17
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
                                12
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
                                5
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
                                24
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
              <h1>AWW Award 2023-24: All List</h1>
            </div>
            <Row>
             
              <Col lg={12} md={12} sm={12}>
                <div className="box-container">
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
                              className="button search-btn-dpo "
                              for="searchleft1"
                            >
                              <span className="mglass">&#9906;</span>
                            </label>
                          </form>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                      <Button variant="secondary" className="dpo-copy-puru-btn mx-3">
                          Copy
                        </Button>
                        <Button className="awc-btn-puru-exl">Excel</Button>

                        <Button variant="secondary" className="dpo-prnt-puru-btn">
                          Print
                        </Button>
                      </Col>
                    </div>
                  </Row>
                  <div className="table-responsive-lg table-container-box mt-1">
                    <Table className="dpo-sub-table" striped bordered hover>
                      <thead className="purskar-thead">
                        <tr>
                          <th>SNo.</th>
                          <th>Status</th>
                          <th>Merit</th>
                          <th>Mobile No.</th>

                          <th>Form ID</th>
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
                        <tr>
                          <td>1</td>
                          <td>Approved by District Selection Committee</td>
                          <td>94</td>
                          <td>8394-xxxxxx</td>
                          <td className="text-primary awc-bold">
                          <div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                AP-2024-00039
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </td>
                          <td>Vidhi Rautela</td>
                          <td>15-aug-1985</td>
                          <td>Trlok Singh</td>
                          <td>Post-Graduation</td>
                          <td>Rudraprayag</td>
                          <td>Agastymuni[0505801]</td>
                          <td>Tilwar(AWC)</td>
                          <td>2011-02-22</td>


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

export default AllEntry202425;
