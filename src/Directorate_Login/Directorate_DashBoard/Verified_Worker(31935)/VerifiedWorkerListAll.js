import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";



const VerifiedWorkerListAll = () => {
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
              <h1>Manday Employee</h1>
            </div>



            <div className="box-container awc-after-fillter">
              <div>
                <Form>
                  <Row>
                    <Col lg={3} className=""><Button className="aws-copy-Directorate-btn">All Employee</Button></Col>

                    <h3>District Wise Employee List | Dehradun</h3>
                    <Col lg={6} md={6} sm={12}>
                      <Row className="awc-bills-box1">


                        <Col lg={6} md={6} sm={6}>
                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option value="" selected="" disabled="">Filter District Wise</option>
                              <option value="almora_edited">Almora</option>
                              <option value="bageshwar_edited">Bageshwar</option>
                              <option value="champawat_edited">Champawat</option>
                              <option value="dehradun_edited">Dehradun</option>
                              <option value="haridwar_edited">Haridwar</option>
                              <option value="chamoli_edited">Chamoli</option>
                              <option value="pauri_edited">Pauri</option>
                              <option value="pithoragarh_edited">Pithoragarh</option>
                              <option value="rudraprayag_edited">Rudraprayag</option>
                              <option value="nanital_edited">Nanital</option>
                              <option value="tehri_edited">Tehri</option>
                              <option value="uttarkashi_edited">Uttarkashi</option>
                              <option value="usnagar_edited">Usnagar</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={6} md={6} sm={6} className="awc-btn-bill mb-3 mt-3">
                          <Button className="awc-btn-Directorate-exl">Filter District</Button>
                        </Col>
                      </Row>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                      <Row className="awc-bills-box1">



                        <Col lg={6} md={6} sm={6}>
                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="">
                              <option value="" selected="" disabled="">Filter Project Wise</option>
                              <option value="Bhaisiyachana">Bhaisiyachana</option>
                              <option value="Bhikiyasain">Bhikiyasain</option>
                              <option value="Chaukhutiya">Chaukhutiya</option>
                              <option value="Dhauladevi">Dhauladevi</option>
                              <option value="Dwarahat">Dwarahat</option>
                              <option value="Havalbag">Havalbag</option>
                              <option value="Lamgarha">Lamgarha</option>
                              <option value="Salt">Salt</option>
                              <option value="Syalde">Syalde</option>
                              <option value="Tadikhet">Tadikhet</option>
                              <option value="Takula">Takula</option>
                              <option value="Bageshwar">Bageshwar</option>
                              <option value="Garud">Garud</option>
                              <option value="Kapkot">Kapkot</option>
                              <option value="Dasoli">Dasoli</option>
                              <option value="Dewal">Dewal</option>
                              <option value="Gairsain">Gairsain</option>
                              <option value="Ghat">Ghat</option>
                              <option value="Joshimath">Joshimath</option>
                              <option value="Karnprayag">Karnprayag</option>
                              <option value="Narayanbagar">Narayanbagar</option>
                              <option value="Pokhari">Pokhari</option>
                              <option value="Tharali">Tharali</option>
                              <option value="Barakot">Barakot</option>
                              <option value="Champawat">Champawat</option>
                              <option value="Lohaghat">Lohaghat</option>
                              <option value="Paati">Paati</option>
                              <option value="Chakrata">Chakrata</option>
                              <option value="Dehradun City">Dehradun City</option>
                              <option value="Doiwala">Doiwala</option>
                              <option value="Kalsi">Kalsi</option>
                              <option value="Raipur">Raipur</option>
                              <option value="Sahaspur">Sahaspur</option>
                              <option value="Vikasnagar">Vikasnagar</option>
                              <option value="Bahadarabad01">Bahadarabad01</option>
                              <option value="Bahadarabad02">Bahadarabad02</option>
                              <option value="Bhagwanpur">Bhagwanpur</option>
                              <option value="Haridwar City">Haridwar City</option>
                              <option value="Khanpur">Khanpur</option>
                              <option value="Laksar">Laksar</option>
                              <option value="Manglore">Manglore</option>
                              <option value="Narsan">Narsan</option>
                              <option value="Roorkeecity">Roorkeecity</option>
                              <option value="Roorkee01">Roorkee01</option>
                              <option value="Roorkee02">Roorkee02</option>
                              <option value="Betalghat">Betalghat</option>
                              <option value="Bheemtal">Bheemtal</option>
                              <option value="Dhari">Dhari</option>
                              <option value="Haldwani Rural">Haldwani Rural</option>
                              <option value="Haldwani Urban">Haldwani Urban</option>
                              <option value="Kotabag">Kotabag</option>
                              <option value="Okhalkanda">Okhalkanda</option>
                              <option value="Ramgarh">Ramgarh</option>
                              <option value="Ramnagar">Ramnagar</option>
                              <option value="Beeronkhal">Beeronkhal</option>
                              <option value="Dugadda">Dugadda</option>
                              <option value="Dwarikhal">Dwarikhal</option>
                              <option value="Ekeshwar">Ekeshwar</option>
                              <option value="Jaiharikhal">Jaiharikhal</option>
                              <option value="Kaljikhal">Kaljikhal</option>
                              <option value="Khirsu">Khirsu</option>
                              <option value="Kot">Kot</option>
                              <option value="Nainidanda">Nainidanda</option>
                              <option value="Pabau">Pabau</option>
                              <option value="Pauri">Pauri</option>
                              <option value="Pokhara">Pokhara</option>
                              <option value="Rikhnikhal">Rikhnikhal</option>
                              <option value="Thalisain">Thalisain</option>
                              <option value="Yamkeshwar">Yamkeshwar</option>
                              <option value="Berinag">Berinag</option>
                              <option value="Dharchula">Dharchula</option>
                              <option value="Didihat">Didihat</option>
                              <option value="Gangolihat">Gangolihat</option>
                              <option value="Kanalichhina">Kanalichhina</option>
                              <option value="Munakot">Munakot</option>
                              <option value="Munsiari">Munsiari</option>
                              <option value="Pithoragarh">Pithoragarh</option>
                              <option value="Agastymuni">Agastymuni</option>
                              <option value="Jakholi">Jakholi</option>
                              <option value="Ukhimath">Ukhimath</option>
                              <option value="Bhilangana">Bhilangana</option>
                              <option value="Chamba">Chamba</option>
                              <option value="Hindolakhal">Hindolakhal</option>
                              <option value="Jakhanidhar">Jakhanidhar</option>
                              <option value="Kirtinagar">Kirtinagar</option>
                              <option value="Narendranagar">Narendranagar</option>
                              <option value="Pratapnagar">Pratapnagar</option>
                              <option value="Thatyur">Thatyur</option>
                              <option value="Thauldhar">Thauldhar</option>
                              <option value="Bazpur">Bazpur</option>
                              <option value="Gadarpur">Gadarpur</option>
                              <option value="Jaspur Rural">Jaspur Rural</option>
                              <option value="Jaspur Urban">Jaspur Urban</option>
                              <option value="Kashipur Rural">Kashipur Rural</option>
                              <option value="Kashipur Urban">Kashipur Urban</option>
                              <option value="Khatima">Khatima</option>
                              <option value="Rudrapur Rural">Rudrapur Rural</option>
                              <option value="Rudrapur Urban">Rudrapur Urban</option>
                              <option value="Sitarganj">Sitarganj</option>
                              <option value="Bhatwari">Bhatwari</option>
                              <option value="Chinyalisaur">Chinyalisaur</option>
                              <option value="Dunda">Dunda</option>
                              <option value="Mori">Mori</option>
                              <option value="Naugaon">Naugaon</option>
                              <option value="Purola">Purola</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={6} md={6} sm={6} className="awc-btn-bill mb-3 mt-3">
                          <Button className="awc-btn-Directorate-exl">Filter District</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
            <div className="awc-after-fillter mt-3">
              <Row> <h2>Added Vacancies</h2></Row>
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
                      <th>Employee Name</th>
                      <th>Aadhar No. </th>
                      <th>Employee Mobile</th>
                      <th>Type</th>
                      <th>District</th>
                      <th>Project</th>
                      <th>AWC Name</th>
                      <th>AWC Code</th>
                      <th>DOB</th>
                      <th>Retirement Date</th>


                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td><div className="dpo-p"> 3271 </div>
                      </td>
                      <td>ANITA DEVI</td>
                      <td>9708-XXXX-XXXX</td>
                      <td>9805-XXXX-XX</td>
                      <td>	AWW</td>
                      <td>	Dehradun</td>
                      <td>	chakrata</td>
                      <td>SHAIDIYA</td>
                      <td>	5060010538</td>
                      <td>01-10-1988</td>
                      <td>01-10-2048</td>
                    </tr>
                    <tr>

                      <td><div className="dpo-p"> 3270 </div>
                      </td>
                      <td>Savita</td>
                      <td>	7684-XXXX-XXXX</td>
                      <td>7684-XXXX-XX</td>
                      <td>	AWW</td>
                      <td>	Dehradun</td>
                      <td>	kalsi</td>
                      <td>	PATA</td>
                      <td>	5060040126</td>
                      <td>10-03-1990</td>
                      <td>10-03-2050</td>
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

export default VerifiedWorkerListAll;
