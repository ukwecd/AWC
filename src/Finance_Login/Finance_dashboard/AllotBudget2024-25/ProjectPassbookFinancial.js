import React from "react";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import FinanceDashBoard from "../FinanceDashBoard";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import { useNavigate } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
const ProjectPassbookFinancial = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <FinanceDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>Project Passbook Financial Year 2024-25</h1>
            </div>
            <div className="box-container">
              <div className="awc-allot-heading">
                <h2>
                  <HiMiniArrowLongLeft
                    className="go-back-arrow"
                    onClick={goBack}
                  />
                  Passbook of Bhaisiyachana Financial Year 2024-25
                </h2>
              </div>
              <Col lg={12} md={12} sm={12} className="awc-passbook-drop">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="finace-label">
                    Fatch Spasific :
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>ALL</option>
                    <option value="1">15(AWC Rent)</option>
                    <option value="2">15(Petrol/Oil/Lubricant etc)</option>
                    <option value="3">15(Cooked Food)</option>
                    <option value="3">30(Cooked Food)</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <div className="table-responsive-lg table-container-box mt-3">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="finance-thead">
                    <tr>
                      <th>Project Name</th>
                      <th>Scheme</th>
                      <th>Grant</th>
                      <th>Component</th>
                      <th>Date</th>
                      <th>Letter No.</th>
                      <th>Type</th>
                      <th>Alloted/Spend Amount</th>
                      <th>Uploaded file</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bhaisiyachana</td>
                      <td>UK321</td>
                      <td>15</td>
                      <td>Cooked Food| मानदेय</td>
                      <td>
                        <div className="dpo-p">
                          <Link to="/ProjectPassbookFinancialYear">
                            {" "}
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                24-may-2024
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </td>
                      <td>c_531</td>
                      <td>Allotment</td>
                      <td>488250.00</td>
                      <td>Not Applicable</td>
                    </tr>
                    <tr>
                      <td>Bhaisiyachana</td>
                      <td>UK282</td>
                      <td>30</td>
                      <td>Cooked Food| मानदेय</td>
                      <td>
                        <div className="dpo-p">
                          <Link to="/ProjectPassbookFinancialYear">
                            {" "}
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                27-Jul-2024
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </td>
                      <td>C1225</td>
                      <td>Expenditure</td>
                      <td>488250.00</td>
                      <td>
                        <div>
                          <Button className="awc-btn-money">
                            <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn awc-view-file">
                              <FaFilePdf className="awc-dpo-add-icon" />
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
                    <Pagination className="finance-paging">
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

export default ProjectPassbookFinancial;
