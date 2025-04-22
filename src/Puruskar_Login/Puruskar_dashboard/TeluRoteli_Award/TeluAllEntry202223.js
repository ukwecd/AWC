import React from "react";
import { Col, Row,Button, Pagination, Table} from "react-bootstrap";
import "../../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import PuruskarDashBoard from "../PuruskarDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";


const TeluAllEntry202223 = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <PuruskarDashBoard />

          {/* Main Content */}

          <div className="main">

          <div className="awc-dpo-head">
              <h1>Rajay Stree Shakti Tilu Rauteli Puraskar  Applicant List</h1>
            </div>
            <Row>
             
              <Col lg={12} md={12} sm={12}>
                <div className="box-container1">
                  
                  <div className="table-responsive-lg table-container-box mt-1">
                    <Table className="dpo-sub-table" striped bordered hover>
                      <thead className="purskar-thead">
                        <tr>
                          <th>Status</th>
                          <th>Almora</th>
                          <th>Bageshwar</th>
                          <th>Chamoli</th>
                          <th>Champawat</th>
                          <th>Dehradun</th>
                          <th>Haridwar</th>
                          <th>Nanital</th>
                          <th>Pauri</th>
                          <th>Pithoragarh</th>
                          <th>Rudraprayag</th>
                          <th>Tehri</th>
                          <th>Usnagar</th>
                          <th>Uttarkashi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>All Entry</td>
                          <td>14</td>
                          <td>11</td>
                          <td>10</td>
                          <td>4</td>
                          <td>15</td>
                          <td>9</td>
                          <td>16</td>
                          <td>4</td>
                          <td>17</td>
                          <td>2</td>
                          <td>1</td>
                          <td>11</td>
                          <td>6</td>
                         
                        </tr>
                        
                      </tbody>
                    </Table>
                  </div>
                  
                </div>
              </Col>
            </Row>
            {/* <div className="awc-dpo-head">
              <h1>Rajay Stree Shakti Tilu Rauteli Puraskar  2023-24: All List</h1>
            </div> */}
            <Row className="mt-2">
             
              <Col lg={12} md={12} sm={12}>
                <div className="box-container">
                  <Row>
                    <div className="awc-finance-mobresp">
                      <Col lg={6} md={6} sm={12} className="nd-staff-print11">
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
                              className="button search-btn-dpo "
                              for="searchleft1"
                            >
                              <span className="mglass">&#9906;</span>
                            </label>
                          </form>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                      <Button variant="secondary" className="dpo-copy-puru-btn mx-3">
                          Copy
                        </Button>
                        <Button className="awc-btn-puru-exl">Excel</Button>

                        <Button variant="secondary" className="dpo-prnt-puru-btn">
                          Print
                        </Button>
                      </Col>
                    </div>
                  </Row>
                  <div className="table-responsive-lg table-container-box mt-1">
                    <Table className="dpo-sub-table" striped bordered hover>
                      <thead className="purskar-thead">
                        <tr>
                          <th>SNo.</th>
                          <th>Form ID</th>
                          <th>Applicant Name</th>
                          <th>DOB</th>

                          <th>Education</th>
                          <th>Address</th>
                          <th>District</th>
                          <th>Social Media Link/URl</th>
                         
                         
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>1</td>
                        
                          <td className="text-primary awc-bold">
                          <div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                TR-2023-00040
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </td>
                          <td>Vandanan Bhandari </td>
                          <td>16-Jan-1995</td>
                          <td>Post-Graduation</td>
                          <td>Talakholta Sarkari ki Aalilower Mall Road Almora 263601 </td>
                          <td>Almora</td>
                          <td className="text-primary awc-bold">
                          <div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                               Open Link
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </td>
                      
                        </tr>
                        <tr>
                          <td>2</td>
                        
                          <td className="text-primary awc-bold">
                          <div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                               TR-2022-00059
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </td>
                          <td>Sunita Tiwari</td>
                          <td>15-Sep-1975</td>
                          <td>Post-Graduation</td>
                       
                          <td>Kosi almora Uttrakhand</td>
                        
                          <td>Almora</td>
                          <td className="text-primary awc-bold">
                          <div className="dpo-p">
                            <Link to="#">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                               <IoMdCloseCircle className="close-icon" />
                                </span>
                              </Button>
                            </Link>
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
                        <Pagination className="purskar-paging">
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
              </Col>
            </Row>

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeluAllEntry202223;
