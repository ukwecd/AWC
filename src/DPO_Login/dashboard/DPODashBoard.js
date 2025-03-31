import UKLOGO from "../../assets/images/uklogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { MdCurrencyRupee } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import "../../assets/css/DashBoard.css";
import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
// import { MdCenterFocusWeak } from "react-icons/md";
// import { RiFileEditLine } from "react-icons/ri";
import { MdExpandLess } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
// import { PiShieldCheckDuotone } from "react-icons/pi";
// import { RiBillLine } from "react-icons/ri";
// import { FaUserEdit } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { PiUsersFourFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";

function DPODashBoard() {
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
      path: "/DPOInnerDashBoard"
    },


    {
      icon: <FaUserTie />,
      label: "Manday Worker",
      path: "/Manday Worker Info",
      subRoutes: [
        {
          icon: <FaUserEdit />,
          label: "All Worker List(edit)",
          path: "/AllWorkerList",
        },
        {
          icon: <IoPersonAdd />,
          label: "Worker Add Request",
          path: "/WorkerAddRequest",
        },
        {
          icon: <PiUsersFourFill />,
          label: "Worker Edit Request",
          path: "/WorkerEditRequest",
        },
        {
          icon: <PiUsersFourFill />,
          label: "Worker Remove Request",
          path: "/WorkerRemoveRequest",
        },

      ],
    },
    {
      icon: <FaMoneyBill />,
      label: "Forward Bills",
      subRoutes: [
        {
          icon: <MdOutlineReceiptLong />,
          label: "Manday Bills",
          path: "/MandayBills",
        },
        {
          icon: <FaReceipt />,
          label: "Protsahan Bills",
          path: "/ProtsahanBills",
        },



      ],

    },



      {
        icon: <FaMoneyBill />,
        label: "FPuruskar Application",
        subRoutes: [
          {
            icon: <MdOutlineReceiptLong />,
            label: "Anganwadi Karyakarti",
            path: "/AnganwadiKaryakarti",
          },
          {
            icon: <FaReceipt />,
            label: "Telu Roteli Puruskar",
            path: "/TeluRoteliPuruskar",
          },
         
         
         
        ],
        
      },
      {
        icon: <PiUsersFourFill />,
        label: "AWW/AWH Vacancies",
        path: "/AWWAWHVacancie",
      },
      {
        icon: <FaMoneyBill />,
        label: "Finance",
        subRoutes: [
          {
            icon: <MdOutlineReceiptLong />,
            label: "State Scheme Surr. Report",
            path: "/FinanceSchemeReport",
          },
          {
            icon: <FaReceipt />,
            label: "Project 2023-24",
            path: "/Project202324",
          },
          {
            icon: <FaReceipt />,
            label: "District 2023-24",
            path: "/District202324",
          },
        
        ],
        
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
            <img src={UKLogon} alt="logo" className="wced-logo" />
          </Link>
          <Link to="#" className="logo-page">
            <img src={UKLOGO} alt="logo" className="uk-logo" />
          </Link>

          <div className="awc-title">
            <span className="awc-subtitle">WECDPANE</span>
          </div>
        </div>

        <div className="message">
          <div className="awc-msg p-2">
            <i>
              <img src={LogoCDPO} alt="WECD-LOGO" className="awc-logo-img" />
            </i>
            <span className="mx-2">DPO login :</span>
            <span>Almora</span>
          </div>
          <div className="dp" alt="logout" title="Click to logout">
            <div className="awc-log-icon">
              <LuLogOut className="awc-logout" />
            </div>
          </div>
        </div>
      </header>

      <div className="awc-lhs-nav">
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="nav">
              <div className="nav-upper-options">
                <div className="awc-menu">
                  <div>
                    <FaAlignLeft className="icn menuicn" onClick={toggleNav} />
                  </div>
                  <div className="awc-user">DPO login : Almora</div>
                  <div className="awc-log-icon-mob">
                    <LuLogOut className=" " title="Click to logout" />
                  </div>
                </div>
                {/* pdf link */}
                {navigationOptions.map((option, index) => (
                  <React.Fragment key={index}>
                    {option.download ? (
                      // ancore
                      <Link to=
                        {option.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`nav-option option${index + 1}`}
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
                          className={`nav-option option${index + 1}`}
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
                              className="nav-sub-option"
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

export default DPODashBoard;
