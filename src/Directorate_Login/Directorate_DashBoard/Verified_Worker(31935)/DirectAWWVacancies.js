import React from "react";
import { Table, Button, Row, Col, Pagination } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";

import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
// import { Link } from "react-router-dom";

const DirectAWWVacancies = () => {
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
              <h1>Vacany Details</h1>
            </div>
            <div className="awc-after-fillter mt-3">
              <Row> <h2>Added Vacancies</h2></Row>
              <Row>
                <div className="awc-finance-mobresp">
                  <Col lg={6} md={6} sm={6} className="nd-staff-print11">
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
                  <Col lg={6} md={6} sm={6} className="nd-staff-print ">
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
                  <thead className="Direct-thead th">
                    <tr>
                      <th>SNo.</th>
                      <th>District Name</th>
                      <th>Project Name </th>
                      <th>Sector Name</th>
                      <th>AWC Name</th>
                      <th>Revenue Village/Ward Name</th>
                      <th>AWC Type</th>
                      <th>Vacancy Name</th>
                      <th>Remark</th>
                      <th>Reserved Category:</th>
                      <th>From Date</th>
                      <th>To</th>
                      <th>Action</th>
                      <th>Remove</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td><div className="dpo-p"> 482 </div>
                      </td>
                      <td>Pauri</td>
                      <td>Yamkeshwar [0506115]</td>
                      <td>YAMKESHWAR [02]</td>
                      <td>GHORGADI</td>
                      <td>BANDANI</td>
                      <td>	Rural</td>
                      <td>AWH</td>
                      <td>	OK</td>
                      <td>UN</td>
                      <td>Not Available</td>
                      <td>Not Available</td>
                      <td>Approved by DPO</td>
                      <td>Already Approved</td>

                    </tr>
                    <tr>

                      <td><div className="dpo-p"> 4539 </div>
                      </td>
                      <td>Pauri</td>
                      <td>Yamkeshwar [0506115]</td>
                      <td>SWARGASHRAM [01]</td>
                      <td>AMADI</td>
                      <td>AAMADI TALLI</td>
                      <td>	Rural</td>
                      <td>AWH</td>
                      <td>	OK</td>
                      <td>UN</td>
                      <td>Not Available</td>
                      <td>Not Available</td>
                      <td>Approved by DPO</td>
                      <td>Already Approved</td>

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

export default DirectAWWVacancies;
