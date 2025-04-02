import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import { MdError } from "react-icons/md";
import Footer from "../../footer/Footer";

const PendingRemoveRequest = () => {
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
              <h1>Manday Worker Requested Removal </h1>
            </div>
            <div className="box-container">
              <div className="awc-text">
                <p>
                  Note: Listed Below will be Approved by DPO, after approval
                  will be Removed from your Verified Worker List
                </p>
              </div>
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
                  <thead className="awc-thead">
                    <tr>
                      <th>S.No</th>
                      <th>Status</th>
                      <th>Aadhar No.</th>
                      <th>
                        Worker Name
                      </th>
                      <th>Worker Type</th>
                      <th>District</th>
                      <th>Project</th>
                      <th>AWC Name</th>
                      <th>Acount No.</th>
                      <th>IFSC Code</th>
                      <th>Bank Detail</th>
                      <th>Reason</th>
                      <th>Request Time</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
                <div className="text-center awc-dna">
                  {" "}
                  <MdError /> Data Not Available
                </div>
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
                    <Pagination className="awc-cdpo-paging">
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

export default PendingRemoveRequest;
