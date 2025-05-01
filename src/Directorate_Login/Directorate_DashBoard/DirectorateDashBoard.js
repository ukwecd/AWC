import UKLOGO from "../../assets/images/uklogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { LuFileSliders, LuLogOut } from "react-icons/lu";
import React, { useState } from "react";
import "../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import { FaAlignLeft, FaChartLine, FaHandHoldingMedical, FaRegAddressCard, FaRegFileExcel, FaRegListAlt, FaSlideshare, FaSms, FaUserCheck, FaUserGraduate, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
import { MdCalendarMonth, MdExpandLess, MdOutlineDashboardCustomize, MdOutlinePendingActions, MdOutlineToday } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { IoIosCall, IoIosPeople } from "react-icons/io";
import LogoDhanparwa from "../../assets/images/LogoDhanParbaw.png";
import { RiBankFill, RiFileExcel2Fill, RiFileExcel2Line, RiFilePpt2Fill, RiFilePpt2Line } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import { FaFileCircleCheck, FaIndianRupeeSign, FaUsersBetweenLines } from "react-icons/fa6";
import { HiOutlineDocumentDuplicate, HiOutlineDocumentReport } from "react-icons/hi";
import { TbReport, TbReportAnalytics } from "react-icons/tb";
import { GrDuplicate, GrOverview, GrUserWorker } from "react-icons/gr";
import { HiCalendarDays, HiClipboardDocumentList, HiMiniBuildingOffice2 } from "react-icons/hi2";
import { SiAdblock } from "react-icons/si";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

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
      icon: <IoIosPeople />,
      label: "Verified Worker (31935)",
      path: "/DirectAWWVacancies",
      subRoutes: [
        {
          icon: <FaUserGraduate />,
          label: "AWW/AWH Vacancies",
          path: "/DirectAWWVacancies",
        },
        {
          icon: <FaUserCheck />,
          label: "Verification Log",
          path: "/VerificationLog",
        },
        {
          icon: <FaUsersBetweenLines />,
          label: "Verified Worker List All",
          path: "/VerifiedWorkerListAll",
        },
        {
          icon: <FaUserPlus />,
          label: "Add Worker Request",
          path: "/AddWorkerRequest",
        },
        {
          icon: <HiOutlineDocumentReport />,
          label: "District Wise Report",
          path: "/DistrictWiseReport",
        },
        {
          icon: <TbReport />,
          label: "Project Wise Report",
          path: "/ProjectWiseReport",
        },

        {
          icon: <GrDuplicate />,
          label: "Duplicate Account number",
          path: "/DuplicateAccountNo",
        },
        {
          icon: <FaRegAddressCard />,
          label: "Duplicate Aadhar info",
          path: "/DuplicateAdharinfo",
        },
        {
          icon: <HiClipboardDocumentList />,
          label: "Worker DOB List",
          path: "/WorkerDOBList",
        },
      ],
    },
    {
      icon: <HiMiniBuildingOffice2 />,
      label: "Anganwadi Center Info",
      subRoutes: [
        {
          icon: <BiBuildingHouse />,
          label: "Center Info",
          path: "/CenterInfo",
        },


      ],
    },
    {
      icon: <FaIndianRupeeSign />,
      label: "Bills",
      subRoutes: [
        {
          icon: <SiAdblock />,
          label: "Non-Forwarded Bills",
          path: "/NonForwardedBills",
        },
        {
          icon: <FaRegListAlt />,
          label: "Show/Hide Bills",
          path: "/ShowHideBills",
        },
        {
          icon: <HiOutlineDocumentDuplicate />,
          label: "Check Duplicate Entry",
          path: "/CheckDuplicateEntry",
        },
        {
          icon: <FaFileCircleCheck />,
          label: "Generated Bill",
          path: "/DirectGeneratedBill",
        },
        {
          icon: <GrOverview />,
          label: "View Bill Log",
          path: "/ViewBillLog",
        },
        {
          icon: <MdOutlinePendingActions />,
          label: "View Request Log",
          path: "/ViewRequestLog",
        },
      ],
    },
    {
      icon: <BsFileEarmarkPerson />,
      label: "Reports",
      subRoutes: [
        {
          icon: <GrUserWorker />,
          label: "Worker with Grant",
          path: "/WorkerWithGrant",
        },
        {
          icon: <TbReportAnalytics />,
          label: "Kalyan kosh Report",
          path: "/KalyankoshReport",
        },
        {
          icon: <FaChartLine />,
          label: "Budget Report",
          path: "/BudgetReport",
        },
        {
          icon: <LiaAwardSolid />,
          label: "Grant Wise Report",
          path: "/GrantwiseReport",
        },
        {
          icon: <MdCalendarMonth />,
          label: "Month Wise Report",
          path: "/MonthwiseReport",
        },
        {
          icon: <MdOutlineDashboardCustomize />,
          label: "View Custom Report",
          path: "/ViewCustomReport",
        },
        {
          icon: <FaSlideshare />,
          label: "View Grant/share Report",
          path: "/ViewshareReport",
        },
        {
          icon: <LuFileSliders />,
          label: "Total Protsahan Report",
          path: "/TotalProtsahanReport",
        },
      ],
    },
    {
      icon: <FaRegFileExcel />,
      label: "Rejection Report",
      subRoutes: [
        {
          icon: <HiCalendarDays />,
          label: "Sept-Dec 21 Report",
          path: "/SeptDec21Report",
        },
        {
          icon: <MdOutlineToday />,
          label: "January 21-22 Report",
          path: "/January2122Report",
        },


      ],
    },

    {
      icon: <RiFileExcel2Line />,
      label: "Generate Manday Excel",
      subRoutes: [
        {
          icon: <PiMicrosoftExcelLogo />,
          label: "State Manday Bank Format",
          path: "/StateMandayBankFormat",
        },
        {
          icon: <RiFilePpt2Line />,
          label: "State Manday PFMS format",
          path: "/StateMandayPFMSFormat",
        },
        {
          icon: <RiFilePpt2Fill />,
          label: "Center Manday PFMS Format",
          path: "/CenterMandayPFMSFormat",
        },

      ],
    },

    {
      icon: <FaHandHoldingMedical />,
      label: "Insurance PFMS Format",
      path: "/InsurancePFMSFormat",
    },
    {
      icon: <RiFileExcel2Fill />,
      label: "Generate Protsahan Excel",
      path: "/GenerateProtsahanExcel",
    },

    {
      icon: <RiBankFill />,
      label: "Bank Names",
      path: "/BankNames",
    },
    {
      icon: <FaSms />,
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
