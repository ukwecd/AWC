import React from "react";
import DashBoard from "./DashBoard";
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
            

            <div className="box-container">
              AWC Information
              
            </div>
            <div>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWCInformation;
