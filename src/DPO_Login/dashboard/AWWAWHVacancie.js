import React from "react";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import "../../DPO_Login/assets/css/AllWorkerList.css";
import Footer from "../../componets/footer/Footer";
import DPODashBoard from "./DPODashBoard";

import { IoIosCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";

const AWWAWHVacancie = () => {
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
              <h1>Vacancies Details</h1>
            </div>
            <div className="box-container">
            <div class="awc-table-head">
              <h1>Added Vacancies</h1></div>

              <Row>
                <div className="awc-dpo-mobresp">
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
                          className="button search-btn-dpo "
                          for="searchleft"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                    <Button className="awc-btn-copy">Copy</Button>

                    <Button variant="secondary" className="dpo-prnt-btn">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>
              <div className="table-responsive-lg table-container-box mt-1">
                <Table className="dpo-sub-table" striped bordered hover>
                  <thead className="dpo-thead">
                    <tr>
                      <th>S.No</th>
                      <th>District Name</th>
                      <th>Project Name</th>
                     <th>Sector Name</th>
                      <th>AWC Name</th>
                      <th>AWC Type</th>
                      <th>Vacancy Name</th>
                      <th>Reserved Category</th>
                      <th>Action</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Almora</td>
                      <td>salt[0506042]</td>
                      <td>Jalkhan[03]</td>
                      <td>Jipha</td>
                      <td>Rural</td>
                      <td>AWH</td>
                      <td>UN</td>
                      <td>
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
                              <IoMdCloseCircle className="awc-dpo-add-icon" /> Return to CDPO
                            </span>
                          </Button>
                        </div>
                      </td>

                     
                     
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

export default AWWAWHVacancie;
