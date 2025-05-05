import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import "../../../Directorate_Login/assets/css/DuplicateAccountNo.css";




const WorkerDOBList = () => {
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
                  <thead className="Direct-thead">
                    <tr>
                      <th rowSpan="2">S.No</th>
                      <th rowSpan="2">District</th>
                      <th rowSpan="2">Project</th>
                      <th rowSpan="2">	Worker</th>
                      <th rowSpan="2">	DOB Filled</th>

                    </tr>

                  </thead>
                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>
                        <div className="dpo-p">

                          Almora

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          bhaisiyachana

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          180

                        </div>
                      </td>




                      <td ><span className="aws-delete">	180 </span></td>


                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <div className="dpo-p">

                          Almora

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          bhikiyasain

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">

                          210

                        </div>
                      </td>




                      <td ><span className="aws-delete">		210 </span></td>


                    </tr>
                  </tbody>
                </Table>


              </div>
              <div>
                <div className="aws-wroker-total">Total Worker : 31935</div>
                <div className="aws-wroker-dob">Worker With DOB : 	31935</div>
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

export default WorkerDOBList;
