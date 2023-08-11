import React, {Suspense } from "react";
//Header
import Header from "./Components/Header/Header";
//Styling
//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//footer
import Footer from "./Components/Footer/Footer";
//Home module
import Home from "./Screens/Home/Home";
//Service Listing

import ProjectList from "./Screens/Project/List/ProjectList";
import ServiceDetail from "./Screens/Service/details/ServiceDetail";
import ProjectDetail from "./Screens/Project/details/ProjectDetail";
import Admin from "./Screens/Admin/Admin";
import Login from "./Authenticator/Login/Login";
import Signup from "./Authenticator/Signup/Signup";
import ServiceList from "./Screens/Service/List/ServiceList";
import CustomerDashboard from "./Screens/Dashboard/Customer/CustomerDashboard/Customer";
import Proposals from "./Screens/Dashboard/Customer/Proposals/Proposals";
import Projects from "./Screens/Dashboard/Customer/Projects/Projects";
import Myprofile from './Screens/Dashboard/Customer/Myprofile/Components/Myprofile';
import Changepass from './Screens/Dashboard/Customer/Myprofile/Components/ChangePassword/Changepass';
import Personal from './Screens/Dashboard/Customer/Myprofile/Components/PersonalInformation/Personal';
import AddAddressAddress from "./Screens/Dashboard/Customer/Myprofile/Components/MyAddress/AddAddressAddress";
import ProtectedRoutes from "./protected.routes";
import AddProject from "./Screens/Dashboard/Customer/Projects/AddProject";
import Category from "./Screens/Category/Category";
import CustomerChat from "./Screens/Dashboard/Customer/Chat/CustomerChat";
import UpdateProject from "./Screens/Dashboard/Customer/Projects/UpdateProject";
import Settings from "./Screens/Dashboard/Customer/Settings/Settings";
import Address from "./Screens/Dashboard/Customer/Settings/Address";
import Payment from "./Screens/Dashboard/Customer/Settings/Payment";
import Security from "./Screens/Dashboard/Customer/Settings/Security";
import EditAddress from "./Screens/Dashboard/Customer/Settings/EditAddress";
import AddAddress from "./Screens/Dashboard/Customer/Settings/AddAddress";
import ProfileUpdate from "./Screens/Dashboard/Customer/Settings/ProfileUpdate";

// vendor
import VendorChat from "./Screens/Dashboard/Vendor/Chat/Index.js";
import ServiceAdd from "./Screens/Dashboard/Vendor/Service/Create/Add";
import ServiceUpdate from "./Screens/Dashboard/Vendor/Service/Create/Update";
import VendorServices from "./Screens/Dashboard/Vendor/Service/List/Index";
import ProjectProposals from "./Screens/Dashboard/Vendor/Project/List/Index"

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Suspense fallback={loading}>
          {/* protected routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" name="dasboard" element={<ProtectedRoutes />}>
              <Route exact path="/admin_dashboard" element={<Admin />} />
              <Route
                exact
                path="/customer_dashboard"
                element={<CustomerDashboard />}
              />
              <Route exact path="/customer_proposals" element={<Proposals />} />
              <Route
                exact
                path="/customer_proposals/:id"
                element={<Proposals />}
              />
              <Route
                exact
                path="/customer_projects/:type"
                element={<Projects />}
              />
              <Route exact path="/customer_projects" element={<Projects />} />
              <Route exact path="/customer_myprofile" element={<Myprofile />} />
              <Route exact path="/customer/changepassword" element={<Changepass />} />
              <Route exact path="/customer/changepersonal" element={<Personal />} />
              <Route exact path="/customer/add_address_address" element={<AddAddressAddress />} />
              <Route exact path="/customer_settings" element={<Settings />} />
              <Route exact path="/customer_address" element={<Address />} />
              <Route exact path="/customer_payment" element={<Payment />} />
              <Route exact path="/customer_security" element={<Security />} />
              <Route
                exact
                path="/customer_editaddress/:address_id"
                element={<EditAddress />}
              />
              <Route
                exact
                path="/profile"
                element={<ProfileUpdate />}
              />
              <Route
                exact
                path="/address/add"
                element={<AddAddress />}
              />
              <Route
                exact
                path="/customer_project_add"
                element={<AddProject />}
              />
              <Route
                exact
                path="/project/edit/:project_id"
                element={<UpdateProject />}
              />
              <Route
                exact
                path="/customer_chat/:id"
                element={<CustomerChat />}
              />

              
            </Route>

            <Route path="/vendor/" name="dasboard" element={<ProtectedRoutes />}>
              <Route
                  exact
                  path="/vendor/chat/:id"
                  element={<VendorChat />}
                />
              <Route
                  exact
                  path="/vendor/service/add"
                  element={<ServiceAdd />}
                />
                <Route
                  exact
                  path="/vendor/service/edit/:service_id"
                  element={<ServiceUpdate />}
                />
                <Route
                  exact
                  path="/vendor/services"
                  element={<VendorServices />} />

                <Route
                  exact
                  path="/vendor/services/:type"
                  element={<VendorServices />}
                />
                <Route
                  exact
                  path="/vendor/projectproposals"
                  element={<ProjectProposals />}
                />
                <Route
                  exact
                  path="/vendor/projectproposals/:type"
                  element={<ProjectProposals />}
                />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<ServiceList />} />
            <Route path="/services/:id" element={<ServiceList />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/vendor_detail/:id" element={<ServiceDetail />} />
            <Route path="/project_detail/:id" element={<ProjectDetail />} />
            <Route path="/category" element={<Category />} />


          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* <ProjectListing /> */}
      <Footer />
    </div>
  );
}

export default App;
