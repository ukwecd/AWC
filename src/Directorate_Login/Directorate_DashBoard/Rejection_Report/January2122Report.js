import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";


const January2122Report = () => {
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
              <h1>View January 2021-22 Protsahan Rejection Report</h1>
            </div>


            <div className="awc-after-fillter mt-3">



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
                      <th>Worker Name</th>
                      <th>Worker Type </th>
                      <th>District</th>
                      <th>Project</th>
                      <th>Account No.</th>
                      <th>IFSC Code</th>
                      <th>Bank Name</th>
                      <th>Amount</th>
                      <th>Status</th>



                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td><div className="dpo-p"> 1</div>
                      </td>
                      <td>Janki Devi</td>
                      <td>AWW</td>
                      <td>	champawat</td>
                      <td>		lohaghat</td>
                      <td>			434001002780</td>
                      <td>		IBKL0768PJS</td>
                      <td>	Pithoragrah Zila Shakari Bank Lohag</td>
                      <td>2000</td>
                      <td>/RETURN 000369899389R03</td>
                    </tr>
                    <tr>

                      <td><div className="dpo-p"> 2</div>
                      </td>
                      <td>Maya Chilkoati</td>
                      <td>AWW</td>
                      <td>	champawat</td>
                      <td>		lohaghat</td>
                      <td>				434001002785</td>
                      <td>		IBKL0768PJS</td>
                      <td>	Pithoragrah Zila Shakari Bank Lohag</td>
                      <td>2000</td>
                      <td>/RETURN 000369899389R03</td>
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

export default January2122Report;
