import React from "react";
// import Vector from "../../../assets/images/project_area_icon.png";
// import AWCCenters from "../../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../../assets/images/reported-icon.png";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";
import { IoMdCloseCircle } from "react-icons/io";
import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";
import { FaUserEdit } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

const WorkerEditRequest = () => {
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
              <h1>Manday Employee Edit Request | almora</h1>
            </div>
            <div className="box-container">
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
                      <th>Request</th>
                      <th>Old Information Description</th>
                      <th>New Information Description</th>
                      <th>Project</th>
                      <th>Worker Name</th>

                      <th>Worker Aadhar No</th>
                      <th>Worker Mobile No</th>
                      <th>Worker Type</th>
                      <th>Account No</th>
                      <th>IFSC Code</th>
                      <th>Bank Name</th>
                      <th>AWC Name</th>

                      <th>AWC Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div className="dpo-p">
                          <Button className="awc-edit-btn">
                            <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                              <FaUserEdit className="awc-dpo-add-icon" /> Edit
                            </span>
                          </Button>
                        </div>
                      </td>

                      <td>
                        <div className="dpo-table-remove">
                          <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                            <IoMdCloseCircle className="awc-dpo-add-icon" />{" "}
                            Remove{" "}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="dpo-table-add">
                          <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                            <IoIosCheckmarkCircle className="awc-dpo-add-icon" />{" "}
                            Nanki Devi{" "}
                          </span>
                        </div>
                      </td>
                      <td>tadikhet </td>
                      <td>Shama Parbeen</td>
                      <td>9846xxxxxxxx</td>
                      <td>9756144497</td>
                      <td>AWW</td>
                      <td>3155xxxxxxx</td>
                      <td>SBIN0005672</td>
                      <td>STATE BANK OF INDIA</td>
                      <td>MALROAD</td>
                      <td>5064100620</td>
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

export default WorkerEditRequest;
