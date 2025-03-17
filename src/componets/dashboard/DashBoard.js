import { RiDashboard3Line } from "react-icons/ri";
import {
  MdOutlineFormatAlignRight,
  MdTimelapse,
} from "react-icons/md";
// import UKLogon from "../../assets/images/UKLogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { LuLogOut } from "react-icons/lu";
import "../../assets/css/DashBoard.css";
import React, { useState } from "react";
import { FaAlignLeft, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
import { MdCenterFocusWeak } from "react-icons/md";
import { MdOutlineAddchart } from "react-icons/md";
import { FaBuildingUser, FaUserGroup } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";


function DashBoard() {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  // Download handler
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigationOptions = [
    { icon: <RiDashboard3Line />, label: "Home", path: "/Home" },
    {
      icon: < RxDashboard />,
      label: "DashBoard",
      path: "/DashBoard",
    },
    { icon: <MdCenterFocusWeak />, label: "Aanganwadi Center Info", path: "/SubmitRequest" },
    {
      icon: <MdOutlineAddchart />,
      label: "Finace",
      path: "/FormStatus",
    },
    {
      icon: <FaUserGroup />,
      label: "AWW/AWH Vacancies",
      path: "/FormStatus",

      subRoutes: [
        {
          icon: <FaBuildingUser />,
          label: "Sector Wise View",
          path: "/OneSectorWiseView ",
        },
        {
          icon: <FaChalkboardTeacher />,
          label: "All Application",
          path: "/SectorAllApplication",
        },
        {
            icon: <MdTimelapse />,
            label: "Return Log",
            path: "/SectorReturnLogOne",
          },
          {
            icon: <MdTimelapse />,
            label: "Return Feedback",
            path: "/ReturnFeedBackOne",
          },
      ],
    },
    {
      icon: <MdOutlineFormatAlignRight />,
      label: "दिशा निर्देश",
      path: "/FormStatus",
    },

  
    {
      icon: <IoKeySharp />,
      label: "Change Password",
      path: "/DepartmentContact",
    },
  ];

  return (
    <>
      <header className="user-awc-header">
        <div className="logosec">
          <img
           src={MenuIcon}
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
            onClick={toggleNav}
          />

          <Link to="#" className="logo-page">
            <img src={UKLogon} alt="logo" className="logo" />
          </Link>
          <div className="awc-title">
            <span className="awc-subtitle">
            WECDPANE{" "}
            </span>
            {/* <span className="subtitle">
              महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड
            </span> */}
          </div>
         
        </div>

        <div className="message">
          <div className="awc-msg p-2">
            <i><img src={LogoCDPO} alt="WECD-LOGO" className="awc-logo-img"></img></i>
            <span className="mx-2">CDPO login :</span> 
            <span>Almora</span>
          </div>
          <div className="dp" alt="logout" title="Click to logout">
            <div className="awc-log-icon">
              <LuLogOut />
            </div>
          </div>
        </div>
      </header>

      <div>
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="nav">
              <div className="nav-upper-options">
                <div className="awc-menu">
                  <div>
                    <FaAlignLeft
                      className="icn menuicn"
                      id="menuicn"
                      alt="menu-icon"
                      onClick={toggleNav}
                    />
                  </div>
                  <div className="awc-user">User: Deepika chauhan</div>
                  <div className="awc-log-icon-mob">
                    <LuLogOut
                      className=" "
                      alt="logout"
                      title="Click to logout"
                    />
                  </div>
                </div>

                {navigationOptions.map((option, index) => (
                  <React.Fragment key={index}>
                    {option.download ? (
                      <div
                        className={`nav-option option${index + 1}`}
                        onClick={() =>
                          handleDownload(option.fileUrl, option.fileName)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={option.path}
                        className={`nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                        
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
