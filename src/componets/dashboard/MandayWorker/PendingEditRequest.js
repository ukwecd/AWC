import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import { MdError } from "react-icons/md";
import Footer from "../../footer/Footer";

const PendingEditRequest = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-table-head">
              <h1>Manday Employee Requested to Edit | Status = Pending</h1>
            </div>
            <div className="box-container">
              <Row>
                <div className="nd-staff-mobresp">
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
                          className="button search-btn-sector "
                          for="searchleft"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                    <Button variant="warning" className="nd-btn-copy">
                      Copy
                    </Button>
                    <Button variant="warning" className="mx-2 nd-btn-excel">
                      Excel
                    </Button>
                    <Button variant="secondary" className="nd-btn-prt">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>
              <div className="table-responsive-lg table-container-box">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="awc-thead ">
                    <tr>
                      <th>S.No</th>
                      <th>Old Information Description</th>
                      <th>New Information Description</th>
                      <th>Worker Name</th>
                      <th colSpan="2" className="text-center">
                        Worker Mobile No
                      </th>
                      <th>Worker Type</th>
                      <th>Acount No.</th>
                      <th>IFSC Code</th>
                      <th>Bank name</th>
                      <th>AWC name</th>
                      <th>AWC Code</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
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
            </div>
            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingEditRequest;
