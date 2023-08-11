import "src/Screens/Dashboard/Customer/Components/Sidebar/Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Sidebar = () => {
  //   const { dispatch } = useContext(DarkModeContext);
  const location = useLocation();
  const [subSettings,setSubSettings] = useState(false)

  return (
    <div className="sidebar">
      {console.log(location, "testakil")}

      <div className="center">
        <ul>
          <Link to="/customer_dashboard" style={{ textDecoration: "none" }}>
            <li
              className={
                location.pathname == "/customer_dashboard" ? "active" : ""
              }
            >
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/customer_chat/0" style={{ textDecoration: "none" }} >
            <li
              className={location.pathname == "/customer_chat" ? "active" : ""}
            >
              <NotificationsNoneIcon className="icon" />
              <span>Message</span>
            </li>
          </Link>

          <Link to="/customer_projects" style={{ textDecoration: "none" }}>
            <li
              className={
                location.pathname == "/customer_projects" ? "active" : ""
              }
            >
              <StoreIcon className="icon" />
              <span>Projects</span>
            </li>
          </Link>
          <Link to="/customer_project_add" style={{ textDecoration: "none" }}>
            <li
              className={
                location.pathname == "/customer_project_add" ? "active" : ""
              }
            >
              <CreditCardIcon className="icon" />
              <span>Add Project</span>
            </li>
          </Link>
          <Link to="/customer_myprofile" style={{ textDecoration: "none" }}>
            <li
              className={
                location.pathname == "/customer_myprofile" ? "active" : ""
              }
            >
              <PersonOutlineIcon className="icon" />
              <span>My Profile</span>
            </li>
          </Link>
          <li className={location.pathname == "/support" ? "active" : ""}>
            <NotificationsNoneIcon className="icon" />
            <span>Support</span>
          </li>
          <Link   style={{ textDecoration: "none",position:"relative" }} >
          <li onClick={()=>{setSubSettings(true)}} className={location.pathname == "/customer_settings" ? "active" : ""}>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
            
             { subSettings&&<ul className="settingLi">
             <Link  to="/customer_payment" style={{ textDecoration: "none"}} >
                <li>Payments</li>
                </Link>
                <Link  to="/customer_address" style={{ textDecoration: "none"}} > <li>Address/Location</li>
               </Link> 
               <Link  to="/customer_security" style={{ textDecoration: "none"}} ><li>Security & Privacy</li></Link>
              </ul>}
            
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
