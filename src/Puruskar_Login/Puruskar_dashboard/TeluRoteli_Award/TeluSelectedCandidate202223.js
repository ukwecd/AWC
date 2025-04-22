import React from "react";
import { Col, Row,Button, Pagination, Table} from "react-bootstrap";
import "../../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import PuruskarDashBoard from "../PuruskarDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Link } from "react-router-dom";

const TeluSelectedCandidate202223 = () => {
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
              <h1>Rajay Stree Shakti Tilu Rauteli Puraskar  Applicant List</h1>
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
                        <td>Approved</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                       </tr>
                        
                      </tbody>
                    </Table>
                  </div>
                  
                </div>
              </Col>
            </Row>
            {/* <div className="awc-dpo-head">
              <h1>Rajay Stree Shakti Tilu Rauteli Puraskar  2023-24: All List</h1>
            </div> */}
            <Row className="mt-3">
             
              <Col lg={12} md={12} sm={12}>
                <div className="box-container1">
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
                          <th>Form ID</th>
                          <th>Mobile No.</th>
                          <th>Applicant Name</th>
                          <th>Account Name</th>
                           <th>Account No.</th>
                          <th>IFSC Code</th>
                          <th>Bank Name</th>
                          
                         
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>1</td>
                        
                          <td className="text-primary awc-bold">
                          <div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                TR-2022-00081
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </td>
                          <td>9927-xxxxxx </td>
                          <td>Dr. Sahchi Joahi</td>
                          <td>Sashi Joshi</td>
                          <td>1178-xxxxxxx</td>
                          <td>SBIN0004759</td>
                          <td>State Bank Of India MoleKhal</td>
                         
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

export default TeluSelectedCandidate202223;
