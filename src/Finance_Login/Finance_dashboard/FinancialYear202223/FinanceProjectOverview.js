import React from "react";
import { Button, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";


const FinanceProjectOverview = () => {
  
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
              <h1> All Project  Financial Report 2023-24 </h1>
            </div>
            <div className="box-container">
            <div class="awc-display-head">
                <h1>Amount Allotment Details</h1>
                </div>
             
              <div className="awc-after-fillter mt-3">
              <div className="awc-allot-heading">
                             <h2>Amount Allotment Details</h2>
                             <span className="awc-note-data">Note:</span>
                             <ol>
                               <li>
                                 For Bulk Budget Allotment{" "}
                                 <Link to="/BulkBugetAllotment">
                                   <button className="clc-bnn">Click Here !</button>
                                 </Link>
                               </li>
                               <li>To Allot Specific Budget Click on Amount.</li>
                               <li>To View Passbook Click on Project.</li>
                             </ol>
                           </div>
                <div className="table-responsive-lg mt-2">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                     
                      <tr>
                        <th>District Name</th>
                        <th>Project Name</th>
                        <th>Scheme</th>
                        <th>Grant</th>
                        <th>Component</th>
                        <th>Date</th>
                        <th>Latter No.</th>
                        <th>Type</th>
                        <th>Demanded Amount</th>
                        <th>Upload File</th>
                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                      <td>Dehradun</td>
                      <td>Kalsi</td>
                      <td>UK282</td>
                      <td>32</td>
                      <td>TA.</td>
                      <td>06-Mar-2023</td>
                      <td>Memo</td>
                      <td>Demand</td>
                      <td>-50000.00</td>
                      <td>
                        <div className="dpo-p">
                          <Link to="/BulkBugetAllotment">
                            {" "}
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                              <FaFilePdf className="awc-pdf-file"/>
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </td>
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

export default FinanceProjectOverview;
