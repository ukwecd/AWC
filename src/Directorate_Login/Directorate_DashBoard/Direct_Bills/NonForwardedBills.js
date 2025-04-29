import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";


import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";

const NonForwardedBills = () => {
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
              <h1>View Non-Forwarded Bills (This page will show the bills which are in CDPO Panel)</h1>
            </div>
            <div className="awc-after-fillter mt-2">
              <Row> <h2>Center Info Details</h2></Row>

              <Form>

                <Row>

                  <Col lg={7} md={7} sm={12} >

                    <Row className="awc-bills-box1">
                      <div className="awc-label-title">For Bill Type | Manday :</div>

                      <Col lg={3} md={3} sm={3}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Select className="mb-2">
                            <option value="" selected="" disabled="">Choose Month</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={4}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Select className="mb-2">
                            <option value="" selected="" disabled="">Project Name</option>
                            <option value="ALL">ALL</option>
                            <option value="Agastymuni">Agastymuni</option>
                            <option value="Bageshwar">Bageshwar</option>
                            <option value="Bahadarabad01">Bahadarabad01</option>
                            <option value="Bahadarabad02">Bahadarabad02</option>
                            <option value="Barakot">Barakot</option>
                            <option value="Bazpur">Bazpur</option>
                            <option value="Beeronkhal">Beeronkhal</option>
                            <option value="Berinag">Berinag</option>
                            <option value="Betalghat">Betalghat</option>
                            <option value="Bhagwanpur">Bhagwanpur</option>
                            <option value="Bhaisiyachana">Bhaisiyachana</option>
                            <option value="Bhatwari">Bhatwari</option>
                            <option value="Bheemtal">Bheemtal</option>
                            <option value="Bhikiyasain">Bhikiyasain</option>
                            <option value="Bhilangana">Bhilangana</option>
                            <option value="Chakrata">Chakrata</option>
                            <option value="Chamba">Chamba</option>
                            <option value="Champawat">Champawat</option>
                            <option value="Chaukhutiya">Chaukhutiya</option>
                            <option value="Chinyalisaur">Chinyalisaur</option>
                            <option value="Dasoli">Dasoli</option>
                            <option value="Dehradun City">Dehradun City</option>
                            <option value="Dewal">Dewal</option>
                            <option value="Dharchula">Dharchula</option>
                            <option value="Dhari">Dhari</option>
                            <option value="Dhauladevi">Dhauladevi</option>
                            <option value="Didihat">Didihat</option>
                            <option value="Doiwala">Doiwala</option>
                            <option value="Dugadda">Dugadda</option>
                            <option value="Dunda">Dunda</option>
                            <option value="Dwarahat">Dwarahat</option>
                            <option value="Dwarikhal">Dwarikhal</option>
                            <option value="Ekeshwar">Ekeshwar</option>
                            <option value="Gadarpur">Gadarpur</option>
                            <option value="Gairsain">Gairsain</option>
                            <option value="Gangolihat">Gangolihat</option>
                            <option value="Garud">Garud</option>
                            <option value="Ghat">Ghat</option>
                            <option value="Haldwani Rural">Haldwani Rural</option>
                            <option value="Haldwani Urban">Haldwani Urban</option>
                            <option value="Haridwar City">Haridwar City</option>
                            <option value="Havalbag">Havalbag</option>
                            <option value="Hindolakhal">Hindolakhal</option>
                            <option value="Jaiharikhal">Jaiharikhal</option>
                            <option value="Jakhanidhar">Jakhanidhar</option>
                            <option value="Jakholi">Jakholi</option>
                            <option value="Jaspur Rural">Jaspur Rural</option>
                            <option value="Jaspur Urban">Jaspur Urban</option>
                            <option value="Joshimath">Joshimath</option>
                            <option value="Kaljikhal">Kaljikhal</option>
                            <option value="Kalsi">Kalsi</option>
                            <option value="Kanalichhina">Kanalichhina</option>
                            <option value="Kapkot">Kapkot</option>
                            <option value="Karnprayag">Karnprayag</option>
                            <option value="Kashipur Rural">Kashipur Rural</option>
                            <option value="Kashipur Urban">Kashipur Urban</option>
                            <option value="Khanpur">Khanpur</option>
                            <option value="Khatima">Khatima</option>
                            <option value="Khirsu">Khirsu</option>
                            <option value="Kirtinagar">Kirtinagar</option>
                            <option value="Kot">Kot</option>
                            <option value="Kotabag">Kotabag</option>
                            <option value="Laksar">Laksar</option>
                            <option value="Lamgarha">Lamgarha</option>
                            <option value="Lohaghat">Lohaghat</option>
                            <option value="Manglore">Manglore</option>
                            <option value="Mori">Mori</option>
                            <option value="Munakot">Munakot</option>
                            <option value="Munsiari">Munsiari</option>
                            <option value="Nainidanda">Nainidanda</option>
                            <option value="Narayanbagar">Narayanbagar</option>
                            <option value="Narendranagar">Narendranagar</option>
                            <option value="Narsan">Narsan</option>
                            <option value="Naugaon">Naugaon</option>
                            <option value="Okhalkanda">Okhalkanda</option>
                            <option value="Paati">Paati</option>
                            <option value="Pabau">Pabau</option>
                            <option value="Pauri">Pauri</option>
                            <option value="Pithoragarh">Pithoragarh</option>
                            <option value="Pokhara">Pokhara</option>
                            <option value="Pokhari">Pokhari</option>
                            <option value="Pratapnagar">Pratapnagar</option>
                            <option value="Purola">Purola</option>
                            <option value="Raipur">Raipur</option>
                            <option value="Ramgarh">Ramgarh</option>
                            <option value="Ramnagar">Ramnagar</option>
                            <option value="Rikhnikhal">Rikhnikhal</option>
                            <option value="Roorkee01">Roorkee01</option>
                            <option value="Roorkee02">Roorkee02</option>
                            <option value="Roorkeecity">Roorkeecity</option>
                            <option value="Rudrapur Rural">Rudrapur Rural</option>
                            <option value="Rudrapur Urban">Rudrapur Urban</option>
                            <option value="Sahaspur">Sahaspur</option>
                            <option value="Salt">Salt</option>
                            <option value="Sitarganj">Sitarganj</option>
                            <option value="Syalde">Syalde</option>
                            <option value="Tadikhet">Tadikhet</option>
                            <option value="Takula">Takula</option>
                            <option value="Thalisain">Thalisain</option>
                            <option value="Tharali">Tharali</option>
                            <option value="Thatyur">Thatyur</option>
                            <option value="Thauldhar">Thauldhar</option>
                            <option value="Ukhimath">Ukhimath</option>
                            <option value="Vikasnagar">Vikasnagar</option>
                            <option value="Yamkeshwar">Yamkeshwar</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={3} sm={3} className="biil-submit">
                        <Button className="aws-copy-Directorate-btn">Project-wise Fetch</Button>
                      </Col>
                    </Row>
                  </Col>


                </Row>
              </Form>
            </div>
            <div className="awc-after-fillter mt-3">
              <Row> <h2>Manday for Month : April 2023-24</h2></Row>
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
                          className="button search-btn-Directorate"
                          for="searchleft1"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                    <Button variant="secondary" className="aws-copy-Directorate-btn mx-3">
                      Copy
                    </Button>


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
                      <th>Update</th>
                      <th>Delete </th>
                      <th>Group Title</th>
                      <th>Grant Code</th>
                      <th>Employee Name</th>
                      <th>Employee Type</th>
                      <th>AWC Name</th>
                      <th>Account No.</th>
                      <th>IFSC Code</th>
                      <th>Bank Name</th>
                      <th>Center Manday</th>
                      <th>State Manday</th>
                      <th>Claim Amount</th>
                      <th>Remark(if any)</th>


                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td><div className="dpo-p">  </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>


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

export default NonForwardedBills;
