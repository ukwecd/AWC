import React from "react";
// import { Col, Pagination, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import FinanceDashBoard from "../FinanceDashBoard";

const FinanceDistrict202324 = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
       <FinanceDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-title">
              <div>
                <h1>Dashboard-DPO login</h1>
                <p>
                  समस्त डीपीओ/ सीडीपीओ कृपया अवगत कराना है माह February 2025 में
                  कार्यरत आंगनवाड़ी कार्यकर्ती/सहायिकाओं की केन्द्र/राज्य मानदेय
                  धनराशि की मांग नियमानुसार मानदेय पोर्टल पर तैयार कर आज ही
                  प्रमाण पत्र निदेशालय को प्रेषित किया जाना है। अतः उक्त कार्य
                  को प्राथमिकता देते हुए आज ही मानदेय धनराशि की मांग प्रेषित
                  करें। इसमें किसी भी प्रकार की लापरवाही क्षम्य नहीं होगी। आज्ञा
                  से , निर्देशक महोदय
                </p>
              </div>
            </div>

            <div className="dpo-data-container">
             District
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

export default FinanceDistrict202324;
