import React from "react";
import { Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";

const ProjectSurrenderSummary = () => {
  
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
              <h1> All Project State Scheme Surrender Report</h1>
            </div>
          
              <div className="awc-after-fillter mt-3">
              <div class="awc-display-head">
                <h1>State Scheme Surrender Report</h1>
                </div>
             

                <div className="table-responsive-lg mt-2">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                     
                      <tr>
                        <th>SNo.</th>
                        <th>District</th>
                        <th>Project</th>
                        <th>Uploaded by</th>
                        <th>File</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                      <td>1</td>
                      <td>Rudraprayag</td>
                      <td>Syalda</td>
                      <td>DPO</td>
                      <td>View File</td>
                     </tr>
                    </tbody>
                  </Table>
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

export default ProjectSurrenderSummary;
