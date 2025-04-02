import React from "react";
// import Vector from "../../../assets/images/project_area_icon.png";
// import AWCCenters from "../../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../../assets/images/reported-icon.png";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";
import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";

const Project202324 = () => {
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
                  <thead className="dpo-project">
                   
                    <tr>
                    <th rowSpan="2"><div className="dpo-project-data">S.No</div></th>
    <th rowSpan="2">District Name</th>
    <th rowSpan="2">Project Name</th>
                      <th colspan="13" className="text-center">Grant 15</th>
                      <th colspan="5" className="text-center">Grant 30</th>
                      <th colspan="10" className="text-center">Grant 31</th>
                    </tr>
                    <tr>
                    
                     <th>AWC Rent | आंगनवाड़ी भवन किराया</th>
                      <th>TA</th>
                      <th>Medical</th>
                      <th>Petrol/ Oil/ Lubricant/ Maintainence etc | गाड़ियों के संचालन अनुरक्षण एवं इंधन आदि की खरीद</th>
                      <th>Contigency</th>
                      <th>THR | अनुपूरक पोषाहार</th>
                      <th>Manday | मानदेय</th>
                      <th>Cooked Food| मानदेय</th>
                      <th>Pre school Kit | प्रीस्कूल किट</th>
                      <th>Saree Suit | साड़ी सूट</th>
                      <th>Medicine Kit | मेडिसिन किट</th>
                      <th>Construction of AWC | आंगनवाड़ी भवन का निर्माण</th>
                      <th>Saksham AWC | सक्षम आंगनवाड़ी केंद्र</th>
                      <th>Contigency</th>
                      <th>THR | अनुपूरक पोषाहार</th>
                      <th>Manday | मानदेय</th>
                      <th>Cooked Food| मानदेय</th>
                      <th>Construction of AWC | आंगनवाड़ी भवन का निर्माण</th>
                      <th>Construction of AWC | आंगनवाड़ी भवन का निर्माण</th>
                      <th>AWC Rent | आंगनवाड़ी भवन किराया</th>
                      <th>TA</th>
                      <th>Medical</th>
                      <th>Petrol/ Oil/ Lubricant/ Maintainence etc | गाड़ियों के संचालन अनुरक्षण एवं इंधन आदि की खरीद</th>
                      <th>Contigency</th>
                      <th>THR | अनुपूरक पोषाहार</th>
                      <th>Manday | मानदेय</th>
                      <th>Cooked Food| मानदेय</th>
                      <th>Construction of AWC | आंगनवाड़ी भवन का निर्माण</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Almora</td>
                      <td>Bhaisiyachana</td>
                      <td>13200.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>113725.00</td>
                      <td>0.00</td>
                      <td>420762.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      
                    

                     
                     
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

export default Project202324;
