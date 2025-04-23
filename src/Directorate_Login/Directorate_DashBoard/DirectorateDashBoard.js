import UKLOGO from "../../assets/images/uklogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { LuLogOut } from "react-icons/lu";
import React, { useState } from "react";
import "../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
import { MdExpandLess, MdOutlineCheckCircle } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import LogoDhanparwa from "../../assets/images/LogoDhanParbaw.png";
import { RiSlideshowLine } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { BiSelectMultiple } from "react-icons/bi";

function DirectorateDashBoard() {
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
      path: "/DirectInnerDash",
    },

    {
      icon: <FaAward />,
      label: "Verified Worker (31935)",
      path: "/DirectAWWVacancies",
      subRoutes: [
        {
          icon: <RiSlideshowLine />,
          label: "AWW/AWH Vacancies",
          path: "/DirectAWWVacancies",
        },
        {
          icon: <BiSelectMultiple />,
          label: "Verification Log",
          path: "/VerificationLog",
        },
        {
          icon: <RiSlideshowLine />,
          label: "Verified Worker List All",
          path: "/VerifiedWorkerListAll",
        },
        {
          icon: <MdOutlineCheckCircle />,
          label: "Add Worker Request",
          path: "/AddWorkerRequest",
        },
        {
          icon: <RiSlideshowLine />,
          label: "District Wise Report",
          path: "/DistrictWiseReport",
        },
        {
          icon: <MdOutlineCheckCircle />,
          label: "Project Wise Report",
          path: "/ProjectWiseReport",
        },
       
          {
            icon: <MdOutlineCheckCircle />,
            label: "Duplicate Account number",
            path: "/DuplicateAccountNo",
          },
          {
            icon: <MdOutlineCheckCircle />,
            label: "Duplicate Adhar info",
            path: "/DuplicateAdharinfo",
          },
          {
            icon: <MdOutlineCheckCircle />,
            label: "Worker DOB List",
            path: "/WorkerDOBList",
          },
      ],
    },
    {
      icon: <GiTrophyCup />,
      label: "Anganwadi Center Info",
      subRoutes: [
        {
          icon: <RiSlideshowLine />,
          label: "Center Info",
          path: "/CenterInfo",
        },
       
       
      ],
    },
    {
        icon: <GiTrophyCup />,
        label: "Bills",
        subRoutes: [
          {
            icon: <RiSlideshowLine />,
            label: "Non-Forwarded Bills",
            path: "/NonForwardedBills",
          },
          {
            icon: <BiSelectMultiple />,
            label: "Show/Hide Bills",
            path: "/ShowHideBills",
          },
          {
            icon: <RiSlideshowLine />,
            label: "Check Duplicate Entry",
            path: "/CheckDuplicateEntry",
          },
          {
            icon: <BiSelectMultiple />,
            label: "Generated Bill",
            path: "/DirectGeneratedBill",
          },
          {
            icon: <RiSlideshowLine />,
            label: "View Bill Log",
            path: "/ViewBillLog",
          },
          {
            icon: <BiSelectMultiple />,
            label: "View Request Log",
            path: "/ViewRequestLog",
          },
        ],
      },
      {
        icon: <GiTrophyCup />,
        label: "Reports",
        subRoutes: [
          {
            icon: <RiSlideshowLine />,
            label: "worker with Grant",
            path: "/WorkerWithGrant",
          },
          {
            icon: <BiSelectMultiple />,
            label: "Kalyan-kosh Report",
            path: "/KalyankoshReport",
          },
          {
            icon: <RiSlideshowLine />,
            label: "Budget Report",
            path: "/BudgetReport",
          },
          {
            icon: <BiSelectMultiple />,
            label: "Grant-wise Report",
            path: "/GrantwiseReport",
          },
          {
            icon: <RiSlideshowLine />,
            label: "Month-wise Report",
            path: "/MonthwiseReport",
          },
          {
            icon: <BiSelectMultiple />,
            label: "View Custom Report",
            path: "/ViewCustomReport",
          },
          {
            icon: <BiSelectMultiple />,
            label: "View Grant/share Report",
            path: "/ViewshareReport",
          },
          {
            icon: <BiSelectMultiple />,
            label: "Total Protsahan Report",
            path: "/TotalProtsahanReport",
          },
        ],
      },
      {
        icon: <GiTrophyCup />,
        label: "Rejection Report",
        subRoutes: [
          {
            icon: <RiSlideshowLine />,
            label: "Sept-Dec 21 Report",
            path: "/SeptDec21Report",
          },
          {
            icon: <BiSelectMultiple />,
            label: "January 21-22 Report",
            path: "/January2122Report",
          },
         
          
        ],
      },

      {
        icon: <GiTrophyCup />,
        label: "Generate Manday Excel",
        subRoutes: [
          {
            icon: <RiSlideshowLine />,
            label: "State Manday Bank Format",
            path: "/StateMandayBankFormat",
          },
          {
            icon: <RiSlideshowLine />,
            label: "State Manday PFMS format",
            path: "/StateMandayPFMSFormat",
          },
          {
            icon: <RiSlideshowLine />,
            label: "Center Manday PFMS Format",
            path: "/CenterMandayPFMSFormat",
          },
         
        ],
      },

      {
        icon: <RxDashboard />,
        label: "Insurance PFMS Format",
        path: "/InsurancePFMSFormat",
      },
      {
        icon: <RxDashboard />,
        label: "Generate Protsahan Excel",
        path: "/GenerateProtsahanExcel",
      },

      {
        icon: <RxDashboard />,
        label: "Bank Names",
        path: "/BankNames",
      },
      {
        icon: <RxDashboard />,
        label: "Send Manday SMS",
        path: "/SendMandaySMS",
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
            <img
              src={LogoDhanparwa}
              alt="logo"
              className="dhan-parwa-logo img-fluid"
            />
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
          <div className="awc-msg">
            <i>
              <img src={LogoCDPO} alt="WECD-LOGO" className="awc-logo-img" />
            </i>
            <span className="mx-2">Directorate Login </span>
            {/* <span>Almora</span> */}
          </div>
          <div className="purskar-dp" alt="logout" title="Click to logout">
            <div className="awc-log-icon">
              <LuLogOut className="awc-logout" />
            </div>
          </div>
        </div>
      </header>

      <div className="direct-lhs-nav">
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="direct-nav">
              <div className="nav-upper-options">
                <div className="dpo-menu">
                  <div>
                    <FaAlignLeft
                      className="icn dpo-menuicn"
                      onClick={toggleNav}
                    />
                  </div>
                  <div className="dpo-user">Directorate login </div>
                  <div className="direct-log-icon-mob">
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
                        className={`direct-nav-option option${index + 1}`}
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
                          className={`direct-nav-option option${index + 1}`}
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
                              className="direct-sub-option"
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
                        className={`direct-nav-option option${index + 1}`}
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

export default DirectorateDashBoard;
