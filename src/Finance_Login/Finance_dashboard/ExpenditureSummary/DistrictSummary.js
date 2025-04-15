import React from "react";
import { Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";

const ProjectSummary = () => {
  
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
              <h1>All District Expenditure Summary 2024-25</h1>
            </div>
            <div className="box-container">
            <div class="awc-display-head">
                <h1>Amount Expenditure Details Financial Year 2024-25</h1>
                </div>


              <div className="awc-after-fillter mt-3">
                {/* <div className="awc-dpo-alert">
                        <p>
                          Click on the form ID to view Detailed Profile or
                          Approve and Disapprove
                        </p>
                      </div> */}
               

                <div className="table-responsive-lg mt-2">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                      <tr>
                        <th>SNo.</th>
                        <th>No. of Entry (Click here to View/Delete)</th>
                        
                        <th>District</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      <tr>
                        <td>1</td>
                        <td className="text-danger awc-bold">No entries to View/Dalete</td>
                  
                        <td>Almora</td>
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

export default ProjectSummary;
