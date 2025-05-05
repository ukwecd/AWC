import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";


const ViewRequestLog = () => {
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
              <h1>View Request Log by CDPO</h1>
            </div>


            <div className="awc-after-fillter mt-3">

              <Row> <h2>Entry Log</h2></Row>
              <Row>
                <div className="awc-finance-mobresp">
                  <Col lg={6} md={6} sm={6} className="nd-staff-print11">
                    <div className="search-container">
                      <form>
                        <input
                          className="search"
                          id="searchleft1"
                          type="search"
                          name="q"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <label
                          className="button search-btn-Directorate"
                          for="searchleft1"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} className="nd-staff-print ">
                    <Button variant="secondary" className="aws-copy-Directorate-btn mx-3">
                      Copy
                    </Button>
                    <Button className="awc-btn-Directorate-exl">Excel</Button>

                    <Button variant="secondary" className="dpo-prnt-Directorate-btn ">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>

              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="Direct-thead th">
                    <tr>
                      <th>SNo.</th>
                      <th>Bill Name</th>
                      <th>Instruction </th>
                      <th>Reason</th>
                      <th>Request by</th>
                      <th>Contact No.</th>
                      <th>Project</th>
                      <th>District</th>
                      <th>Request Time</th>
                      <th>Status </th>
                      <th>Response</th>



                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td><div className="dpo-p"> 1 </div>
                      </td>
                      <td>February 2024-25</td>
                      <td>अनीता देवी आगनबाड़ी कार्यकत्री बड़ेथी-२ का मानदेय माह दिसम्बर २४ जनबरी २५ फरवरी २५ का मानदेय त्रुटिबस नहीं बन पाया है कृपया मानदेय हेतु आगनबाड़ी कार्यकत्री बड़ेथी-२ नाम सूचि में सम्लित करने की कृपा करे Bank AC-31620295103</td>
                      <td>मानदेय माह दिसम्बर २४ जनबरी २५ फरवरी २५ का मानदेय त्रुटिबस नहीं बन पाया है Bank AC-31620295103</td>
                      <td>rajendra singh(Block Coordinator)</td>
                      <td>		9548-XXXX-XX</td>
                      <td>		Chinyalisaur</td>
                      <td>	Uttarkashi</td>
                      <td>2025-03-18 14:27:58</td>
                      <td>Done</td>
                      <td>	worker added on request.</td>

                    </tr>
                    <tr>

                      <td><div className="dpo-p"> 2 </div>
                      </td>
                      <td>February 2024-25</td>
                      <td>कृपया मानदेय बिल फरवरी 2025 से निम्न SAHAAYIKA को हटाने का कष्ट करें आँगनवाड़ी सहायिका का नाम shobha , AWC name : Dharkot , AC No 35926866945 स्टेट बैंक ऑफ़ इंडिया IFSC SBIN0002323</td>
                      <td>		आँगनवाड़ी सहायिका का नाम shobha , AWC name : Dharkot , AC No 35926866945 स्टेट बैंक ऑफ़ इंडिया IFSC SBIN0002323</td>
                      <td>		विनोद सिंह (कनिष्ठ सहायक )</td>
                      <td>		8979-XXXX-XX</td>
                      <td>		Dasoli</td>
                      <td>Chamoli</td>
                      <td>2025-03-18 10:45:49</td>
                      <td>Done</td>
                      <td>Worker removed from bill on request.</td>
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

export default ViewRequestLog;
