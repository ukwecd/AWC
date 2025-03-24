import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Pagination, Row, Table} from "react-bootstrap";
import "../../../assets/css/History.css";
import { FaCheckCircle } from "react-icons/fa";

const ActiveVacancies = () => {
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
              <h1>Details For Active Vacancy For Selectoion</h1>
            </div>
            <div className="box-container">
            <div className="awc-heading-tw">
              <h2>Active Vacancy For Selectoion</h2>
            </div>
              <Row className="mt-3">
                <div className="nd-staff-mobresp">
                  <Col lg={6} md={6} sm={6} className="nd-staff-print11">
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
                  <Col lg={6} md={6} sm={6} className="nd-staff-print ">
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

              <div>
                <div className="table-responsive-lg table-container-box">
                  <Table className="awc-sub-table">
                    <thead className="awc-thead">
                      <tr>
                        <th>S.No</th>
                        <th>Sector Name</th>
                        <th>AWC Code</th>
                        <th>RV/Ward Name</th>
                        <th>AWC Type</th>
                        <th>Vacancy Name</th>
                        <th>Reserved Category</th>
                        <th>Remark</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>sITLAKHET[05] </td>
                        <td> Mansiger(5064060531) </td>
                        <td>Basar </td>
                        <td>Rural </td>
                        <td>AWH </td>
                        <td>SC</td>
                        <td>Letter1395 dated 18/01/25 </td>
                        <td>
                          <div className="td-p">
                            <Button variant="info " className="awc-surrend-btn">
                              <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                Approved{" "}
                                <FaCheckCircle className="awc-update-icon" />
                              </span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                   
                  </Table>
                  {/* <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination> */}
                  
                </div>
              </div>
            </div>
            <div>{/* <Footer /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveVacancies;
