import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import "../../../assets/css/History.css";
import { MdError } from "react-icons/md";
import Footer from "../../footer/Footer";

const RetiredWorker = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-table-heading">
              <h1>Remove Retired Worker From Manday List to Generate Manday</h1>
            </div>
            <div className="box-container">
              <Row>
                <div className="nd-staff-mobresp">
                  <Col lg={6} md={6} sm={12} className="nd-staff-print11">
                    <div class="search-container">
                      <form>
                        <input
                          class="search"
                          id="searchleft"
                          type="search"
                          name="q"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <label
                          class="button search-btn-sector "
                          for="searchleft"
                        >
                          <span class="mglass">&#9906;</span>
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
              <div className="table-container-box table-responsive-lg">
                
                  <Table className="awc-sub-table ">
                    <thead className="awc-thead">
                      <tr>
                        <th>S.No</th>

                        <th>Remove Request</th>
                        <th>Aadhar No.</th>
                        <th>Group Title</th>
                        <th>Grant Code</th>
                        <th>Worker Name</th>
                        <th>Worker DOB</th>
                        <th>Worker Mobile No</th>
                        <th>Worker Type</th>
                        <th>Project</th>
                        <th>AWC Name</th>
                        <th>AWC Code</th>
                        <th>Center Mandary</th>
                        <th>State Manady</th>
                        <th>Acount No.</th>
                        <th>IFSC Code</th>
                        <th>Bank Name</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </Table>
                  <div className="text-center awc-dna">
                  {" "}
                  <MdError /> Data Not Available
                
                </div>
                
              </div>
              <Row>
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

export default RetiredWorker;
