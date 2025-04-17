import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";


const ProjectReport202324 = () => {

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
              <h1>Project-wise Custom Date Report 2023-24</h1>
            </div>
            <div className="box-container">
              <div className="box-container1">
                <div>
                  <Form>
                    <Row>
                      <Col lg={12} md={12} sm={12}>
                        <Row>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Start Date:
                              </Form.Label>

                              <Form.Control type="Date"></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                End Date:
                              </Form.Label>

                              <Form.Control type="Date"></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Component:
                              </Form.Label>

                              <Form.Select className="mb-2">
                                <option>Choose Grant|Component </option>
                                <option value="1">TA</option>
                                <option value="2">Medical</option>
                                <option value="3">Cooked Food</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                      <div className="biil-submit1">
                        <Button className="awc-dop-primary-btn">
                          Fatch Report
                        </Button>
                      </div>
                    </Row>
                    <div className="awc-project-detail">
                      <p><RiMoneyRupeeCircleFill className="custom-icon" />Allotment/Expenditure Details 2022-23</p>
                      <p> <IoDocumentTextSharp className="custom-icon" />Saree Suit | साड़ी सूट</p>
                      <p> <FaCalendarAlt className="custom-icon" /> Start Date: 3-Apr-2025- End Date:02 Apr-2025</p>
                    </div>
                  </Form>
                </div>
              </div>

              <div className="awc-after-fillter mt-3">
                {/* <div className="awc-dpo-alert">
                        <p>
                          Click on the form ID to view Detailed Profile or
                          Approve and Disapprove
                        </p>
                      </div> */}
                

                <div className="table-responsive-lg mt-2">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                      <tr>
                        <th rowSpan="2">SNo.</th>
                        <th rowSpan="2">District</th>
                      
                        <th colSpan="5" className="text-center">Saree Suit | साड़ी सूट</th>
                       
                      </tr>
                      <tr>
                        <th>Allotment Date</th>
                        <th>Allotment Amount</th>
                        <th>Expenditure Date</th>
                        <th>Expenditure Amount</th>
                        <th>Current Balance</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Almora</td>
                       
                        <td className="text-success awc-bold">-</td>
                        <td className="text-success awc-bold">0</td>
                        <td className="text-danger awc-bold">-</td>
                        <td className="text-danger awc-bold">0</td>
                        <td className="text-primary awc-bold">0</td>
                        
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Bageshwar</td>
                       
                        <td className="text-success awc-bold">-</td>
                        <td className="text-success awc-bold">0</td>
                        <td className="text-danger awc-bold">-</td>
                        <td className="text-danger awc-bold">0</td>
                        <td className="text-primary awc-bold">0</td>
                        
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
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

export default ProjectReport202324;
