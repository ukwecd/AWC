import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";


const ShowHideBills = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DirectorateDashBoard />

          {/* Main Content */}

          <div className="main">

            <div className="awc-dpo-head">
              <h1>Bills Master for Manday/Protsahan</h1>
            </div>

            <div className="awc-after-fillter mt-3">
              <Row> <h2>Month-Wise Bill List and Status</h2></Row>


              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="Direct-thead th">
                    <tr>
                      <th>SNo.</th>
                      <th>Bill Title</th>
                      <th>	financial Year</th>
                      <th>	Manday/Protsahan</th>
                      <th>	Bill Month</th>
                      <th>		Status (Click to Change Status)</th>



                    </tr>

                  </thead>
                  <tbody>
                    <tr>
                      <td><div className="dpo-p">1  </div>
                      </td>
                      <td>PMJJBY & PMSBY 2024-25</td>
                      <td>	2024-25</td>
                      <td>Insurance</td>
                      <td>	PMJJBY</td>
                      <td> <Button className="aws-copy-Directorate-btn">Click to Show</Button></td>
                    </tr>
                    <tr>
                      <td><div className="dpo-p">1  </div>
                      </td>
                      <td>PMJJBY & PMSBY 2023-24</td>
                      <td>	2023-24</td>
                      <td>Insurance</td>
                      <td>	PMJJBY</td>
                      <td>Old Bills can't be Shown/hide</td>
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
                    <Pagination className="Directorate-paging">
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


            {/* <div className="awc-dpo-head">
  <h1>Rajay Stree Shakti Tilu Rauteli Puraskar  2023-24: All List</h1>
</div> */}

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowHideBills;
