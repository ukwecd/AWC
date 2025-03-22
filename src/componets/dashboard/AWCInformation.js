import React from "react";
import DashBoard from "./DashBoard";
import { Button, Table, Form } from "react-bootstrap";
import "../../assets/css/AWCInformation.css";
import { GrUpdate } from "react-icons/gr";

const AWCInformation = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
          <div className="awc-table-heading">
                  <h1>Surrender Report 2024-25</h1>
                </div>
            <div className="box-container">
            
              <div>
               

               
                  <div className="table-responsive-lg table-container-box">
                    <Table className="awc-sub-table">
                      <thead className="awc-thead">
                        <tr>
                          <th>S.No</th>
                          <th>District</th>
                          <th>Project</th>
                          <th>Sector</th>
                          <th>AWC Code</th>
                          <th>AWC Type</th>
                          <th>Grant</th>
                          <th>Pin Code</th>
                          <th>AWC Name</th>
                          <th>आँगनवाड़ी केंद्र का नाम हिंदी में दर्ज करें</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Almora</td>
                          <td>Havalabag[040645]</td>
                          <td>Almora[01]</td>
                          <td>5064060101</td>

                          <td>AWC </td>
                          <td>GEN_15</td>
                          <td>263601</td>

                          <td>
                            <Form.Control
                              type="text"
                              placeholder="CHANA"
                              className="awc-control-inp"
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="आँगनवाड़ी केंद्र का नाम"
                              className="awc-control-inp"
                            />
                          </td>
                          <td>
                            <div className="td-p">
                              <Button className="awc-update-btn">
                                <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                  Update AWC Name{" "}
                                  <GrUpdate className="awc-update-icon" />
                                </span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                
              </div>
            </div>
            <div>{/* <Footer /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWCInformation;
