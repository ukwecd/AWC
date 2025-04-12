import UKLOGO from "../../assets/images/uklogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { LuLogOut } from "react-icons/lu";
import React, { useState } from "react";
import "../../DPO_Login/assets/css/DPOLeftNav.css";
import { FaAlignLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
// import { MdCenterFocusWeak } from "react-icons/md";
// import { RiFileEditLine } from "react-icons/ri";
import { MdExpandLess } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { LuFileText } from "react-icons/lu";
import { BiRupee } from "react-icons/bi";
import { TbReceiptRupee } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { ImDisplay } from "react-icons/im";
import { FaFile } from "react-icons/fa6";

// import { FaPhoneAlt } from "react-icons/fa";

import { AiOutlineFundView } from "react-icons/ai";
import LogoDhanparwa from "../../assets/images/LogoDhanParbaw.png";

function FinanceDashBoard() {
  const [isNavClosed, setIsNavClosed] = useState(false);
  const [expandedMenus, setExpandedItems] = useState({});

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  const toggleSubMenu = (index) => {
    setExpandedItems((prev) => ({
      [index]: !prev[index],
    }));
  };

  const navigationOptions = [
    {
      icon: <RxDashboard />,
      label: "DashBoard",
      path: "/FinanceInnerDashboard",
    },
    {
      icon: <ImDisplay />,
      label: "Display file to CDPO/DPO",
      path: "/DisplayCDPOfile",
    },

    {
      icon: <FaFile />,
      label: "Allot Budget 2024-25",
      path: "/Manday Worker Info",
      subRoutes: [
        {
          icon: <FaFile />,
          label: "To Project 2024-25",
          path: "/Project202425",
        },
        {
          icon: <IoPersonAdd />,
          label: "To District 2024-25",
          path: "/District202425",
        },
       
      ],
    },
    {
      icon: <TbReceiptRupee />,
      label: "Custom Reports",
      subRoutes: [
        {
          icon: <MdOutlineReceiptLong />,
          label: "Project Date-wise",
          path: "/ProjectDatewise",
        },
        {
          icon: <FaReceipt />,
          label: "District Date-wise",
          path: "/DistrictDatewise",
        },
      ],
    },

    {
      icon: <AiOutlineFundView />,
      label: "Expenditure Summary",
      subRoutes: [
        {
          icon: <MdOutlineReceiptLong />,
          label: "Project Summary",
          path: "/ProjectSummary",
        },
        {
          icon: <FaReceipt />,
          label: "District Summary",
          path: "/DistrictSummary",
        },
      ],
    },

    {
      icon: <FaAward />,
      label: "Allotment Summary",
      subRoutes: [
        {
          icon: <MdOutlineReceiptLong />,
          label: "Project Summary",
          path: "/AllotProjectSummary",
        },
        {
          icon: <FaReceipt />,
          label: "District Summary",
          path: "/AllotDistrictSummary",
        },
      ],
    },
   
    {
      icon:  <span title="Surrender/Demand Summary"><BiRupee /></span>,
      label: "Surrender/Demand Sum.",
      subRoutes: [
        {
          icon: <IoIosList  />,
          label: "Project Surrender Summary",
          path: "/ProjectSurrenderSummary",
        },
        {
          icon: <FiFileText />,
          label: "State Scheme surr. report",
          path: "/StateSchemeReport",
        },
        {
          icon: <LuFileText />,
          label: "Project Demand Summary",
          path: "/ProjectDemandSummary",
        },
      ],
    },
    {
      icon: <BiRupee  />,
      label: "Financial Year 2023-24",
      subRoutes: [
        {
          icon: <IoIosList  />,
          label: "Project Overview",
          path: "/ProjectOverview",
        },
        {
          icon: <FiFileText />,
          label: "District Overview",
          path: "/DistrictOverview",
        },
        {
          icon: <LuFileText />,
          label: "Project Report 2023-24",
          path: "/ProjectReport202324",
        },
        {
          icon: <LuFileText />,
          label: "District Report 2023-24",
          path: "/DistrictReport202324",
        },
      ],
    },
    {
      icon: <BiRupee  />,
      label: "Financial Year 2022-23",
      subRoutes: [
        {
          icon: <IoIosList  />,
          label: "Project Overview",
          path: "/FinanceProjectOverview",
        },
        {
          icon: <FiFileText />,
          label: "District Overview",
          path: "/FinanceDistrictOverview",
        },
        {
          icon: <LuFileText />,
          label: "Project Report 2022-23",
          path: "/ProjectReport202223",
        },
        {
          icon: <LuFileText />,
          label: "District Report 2022-23",
          path: "/DistrictReport202223",
        },
      ],
    },

     {
          icon: <IoIosCall />,
          label: "Technical Help: 7668151041",
    
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
                      <img src={LogoDhanparwa} alt="logo" className="dhan-parwa-logo img-fluid" />
                    </Link>
          <Link to="#" className="logo-page">
            <img src={UKLogon} alt="logo" className="wced-logo" />
          </Link>
          <Link to="#" className="logo-page">
            <img src={UKLOGO} alt="logo" className="uk-logo" />
          </Link>

          <div className="awc-title">
            <span className="awc-subtitle">WECD Admin Panel</span>
          </div>
        </div>

        <div className="message">
          <div className="awc-msg p-2">
            <i>
              <img src={LogoCDPO} alt="WECD-LOGO" className="awc-logo-img" />
            </i>
            <span className="mx-2">Finance login :</span>
            <span>Almora</span>
          </div>
          <div className="finance-dp" alt="logout" title="Click to logout">
            <div className="awc-log-icon">
              <LuLogOut className="awc-logout" />
            </div>
          </div>
        </div>
      </header>

      <div className="finance-lhs-nav">
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="finance-nav">
              <div className="nav-upper-options">
                <div className="dpo-menu">
                  <div>
                    <FaAlignLeft className="icn dpo-menuicn" onClick={toggleNav} />
                  </div>
                  <div className="dpo-user">Finance login : Almora</div>
                  <div className="finance-log-icon-mob">
                    <LuLogOut className=" " title="Click to logout" />
                  </div>
                </div>
                {/* pdf link */}
                {navigationOptions.map((option, index) => (
                  <React.Fragment key={index}>
                    {option.download ? (
                      // ancore
                      <Link
                        to={option.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`finance-nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </Link>
                    ) : option.subRoutes ? (
                      <>
                        <div
                          className={`finance-nav-option option${index + 1}`}
                          onClick={() => toggleSubMenu(option.label)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="nav-item">
                            <div className="awc-nav-items">
                              <span className="nav-icon">{option.icon}</span>
                              <span className="nav-label">{option.label}</span>
                              <span className="dropdown-arrow">
                                {expandedMenus[option.label] ? (
                                  <MdExpandLess />
                                ) : (
                                  <MdKeyboardArrowRight />
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {expandedMenus[option.label] &&
                          option.subRoutes.map((subOption, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subOption.path}
                              className="finance-sub-option"
                            >
                              <div className="nav-item">
                                <div className="d-flex awc-sub-item">
                                  <span className="nav-icon">
                                    {subOption.icon}
                                  </span>
                                  <span className="nav-label">
                                    {subOption.label}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </>
                    ) : (
                      <Link
                        to={option.path}
                        className={`finance-nav-option option${index + 1}`}
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

export default FinanceDashBoard;
