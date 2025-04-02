import React from "react";

// import { Col, Pagination, Row, Table } from "react-bootstrap";

import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";
import "../../../DPO_Login/assets/css/Project202324.css";
import {  Table } from "react-bootstrap";

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
            <div className="awc-dpo-FSR-title">
              <div class="awc-dpo-head"><h1>Project Wise Balance Report Financial Year 2023-24</h1></div>
              <div className="box-container mt-3">

                <div class="awc-table-head"><h1>Amount Allotment Details 2023-24</h1>



                  <div className="table-responsive-lg table-container-box">
                    <Table className="awc-sub-table">
                      <thead className="awc-thead">
                        <tr>
                          <th>S.No</th>
                          <th>District</th>
                          <th>File</th>
                          <th>Change</th>
                          <th>Action</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>almora</td>
                          <td> View File </td>
                          <td>show</td>
                          <td> </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>


                </div>

              </div>
            </div>

            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project202324;
