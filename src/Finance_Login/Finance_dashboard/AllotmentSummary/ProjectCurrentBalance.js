import React from "react";
import { Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import { useNavigate } from "react-router-dom";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

const ProjectCurrentBalance = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  
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
              <h1>All Project Current Balance 2024-25</h1>
            </div>
            <div className="box-container">
            <div class="awc-sub-heading">
                <h2><HiMiniArrowLongLeft className="go-back-arrow" onClick={goBack} />Allotment Summary of Bhaisiyachana 2024-25</h2>
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
                        <th>Project Name</th>
                        <th>Scheme</th>
                        <th>Grant</th>
                        <th>Component</th>
                        <th>Date</th>
                        <th>Allotment Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bhaisiyachana</td>
                        <td >UK321</td>
                      
                        <td >15</td>
                        <td>Cooked Food| मानदेय</td>
                        <td>20-May-2024</td>
                        <td className="text-success awc-bold">+488250.00
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

export default ProjectCurrentBalance;
