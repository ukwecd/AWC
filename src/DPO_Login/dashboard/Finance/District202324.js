import React from "react";
// import Vector from "../../../assets/images/project_area_icon.png";
// import AWCCenters from "../../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../../assets/images/reported-icon.png";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";
import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";
import "../../../DPO_Login/assets/css/Project202324.css"
import DistrictHistory from "./DistrictHistory";
import ExpenditureForm from "./ExpenditureForm";
import Medical from "./Medical";

const District202324 = () => {
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
              <h1>District Wise Report 203-24</h1>
            </div>
            <div className="box-container">
              <div class="awc-table-head">
                <h1>District Amount Alloment Details 2023-24</h1>
              </div>

            
              <div className="table-responsive-lg table-container-box mt-1">
                <Table className="dpo-sub-table" striped bordered hover>
                  <thead className="dpo-project">
                    <tr>
                      <th colspan="3" className="text-center">
                        Almora
                      </th>
                    </tr>
                    <tr>
                      <th>Grant</th>
                      <th>Component
                        <span className="note-text-view"><br />Click to View History</span>
                      </th>
                      <th>Balance Amount

                      <span className="note-text-view"><br />Click to Register Expenditure</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>15</td>
                      <td>
                        <div className="dpo-p">
                        <DistrictHistory />
                        </div>
                      </td>
                      <td>

                      <div className="dpo-p">
                          <ExpenditureForm />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>
                        <div className="dpo-p">
                        <Medical />
                        </div>
                      </td>
                      <td>

                      <div className="dpo-p">
                          <ExpenditureForm />
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

export default District202324;
