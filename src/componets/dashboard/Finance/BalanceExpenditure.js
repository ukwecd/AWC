import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Row, Table } from "react-bootstrap";
import { FaRegHandPointRight } from "react-icons/fa6";
import { TfiHandPointDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";

const BalanceExpenditure = () => {
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
              <h1>HavaBag Current Balance 2024-25</h1>
            </div>
            <div className="box-container">
              <Row>
                <div className="nd-staff-mobresp">
                  <Col lg={6} md={6} sm={12}>
                    <div className="awc-heading-two">
                      <h2>Havalbag Amount Allotment/Expandture Details </h2>
                    </div>
                  </Col>
                  {/* <Col lg={6} md={6} sm={6}>
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
                      <label class="button search-btn1 " for="searchleft">
                        <span class="mglass">&#9906;</span>
                      </label>
                    </form>
                  </div>
                </Col> */}

                  <Col lg={6} md={6} sm={12} className="nd-staff-print">
                    <div className="awc-view-btn">
                      <span>
                        (view to View history) <FaRegHandPointRight />
                      </span>
                      <Button variant="primary" className="awc-btn-passbook">
                        View Passbook
                      </Button>
                    </div>
                  </Col>
                </div>
              </Row>
              <div className="table-responsive-lg table-container-box">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="awc-thead">
                    <tr>
                      <th
                        colSpan="5"
                        className="text-center direc-12th-heading"
                      >
                        District: Almora | Project: HavalBag
                      </th>
                    </tr>
                    <tr>
                      <th>Component</th>
                      <th>Grant</th>
                      <th>
                        Balance Amount
                        <br />
                        <span className="awc-span">
                          Click to Register <TfiHandPointDown />{" "}
                        </span>
                      </th>
                      <th colSpan="2" className="text-center">
                        Action Other
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AWC Rent | Anganwadi Bhawan Kiraya</td>
                      <td>15</td>

                      <td>
                        <div className="td-p">
                          <Link to="#" className="awc-surrend-register">
                            <span className="badge  rounded-pill awc-surrend-register  d-inline-block nd-btn-district nd-btn-district1">
                              8,983,840
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="td-p">
                          <Button variant="info " className="awc-surrend-btn">
                            <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                              Surrender <FaFlag className="awc-update-icon" />
                            </span>
                          </Button>
                        </div>
                      </td>
                      <td>
                        <div className="td-p">
                          <Button className="awc-demand-btn">
                            <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                              Demand <HiOutlineDocumentReport className="awc-update-icon" />
                            </span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div>{/* <Footer /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceExpenditure;
