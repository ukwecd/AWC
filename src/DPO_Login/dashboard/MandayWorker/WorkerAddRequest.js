import React from "react";
// import Vector from "../../../assets/images/project_area_icon.png";
// import AWCCenters from "../../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../../assets/images/reported-icon.png";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";

import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";
import { MdError } from "react-icons/md";

const WorkerAddRequest = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DPODashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>Manday Employee Verified List | almora</h1>
            </div>
            <div className="box-container">
              <Row>
                <div className="awc-dpo-mobresp">
                  <Col lg={6} md={6} sm={6} className="nd-staff-print11">
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
                          className="button search-btn-dpo "
                          for="searchleft"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} className="nd-staff-print ">
                    <Button variant="secondary" className="nd-btn-excel mx-2">
                      Excel
                    </Button>

                    <Button variant="secondary" className="awc-dpo-btn-prt">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>
              <div className="table-responsive-lg table-container-box mt-1">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="dpo-thead">
                    <tr>
                      <th>S.No</th>
                      <th>Action</th>
                      <th>Aadhar No</th>
                      <th>Group Title</th>
                      <th>Grant Code</th>
                      <th>Worker Name</th>

                      <th>Worker Mobile No</th>
                      <th>Worker Type</th>
                      <th>District</th>
                      <th>Project</th>
                      <th>AWC Name</th>
                      <th>AWC Code</th>
                      <th>Account No</th>
                      <th>IFSC Code</th>
                      <th>Bank Name</th>
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
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkerAddRequest;
