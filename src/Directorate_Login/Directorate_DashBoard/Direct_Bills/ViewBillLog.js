import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";


const ViewBillLog = () => {
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
              <h1>View All Bill Entry Log</h1>
            </div>


            <div className="awc-after-fillter mt-3">

              <Row> <h2>Entry Log</h2></Row>
              <Row><Col lg={3} className=""><Button className="aws-copy-Directorate-btn">View Removed Log</Button></Col></Row>
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
                      <th>Project</th>
                      <th>Employee/Group Name </th>
                      <th>No. of Employee</th>
                      <th>Bill Type</th>
                      <th>Month</th>
                      <th>Date</th>



                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td><div className="dpo-p"> 365 </div>
                      </td>
                      <td>yamkeshwar</td>
                      <td>AWH</td>
                      <td>	55</td>
                      <td>		Manday</td>
                      <td>		February 2024-25</td>
                      <td>	12-03-2025 07:06:54</td>
                    </tr>
                    <tr>

                      <td><div className="dpo-p"> 366 </div>
                      </td>
                      <td>yamkeshwar</td>
                      <td>AWH</td>
                      <td>		28</td>
                      <td>		Manday</td>
                      <td>		February 2024-25</td>
                      <td>		12-03-2025 07:04:52</td>
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




            {/* <div className="awc-dpo-head">
              <h1>Rajay Stree Shakti Tilu Rauteli Puraskar  2023-24: All List</h1>
            </div> */}

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBillLog;
