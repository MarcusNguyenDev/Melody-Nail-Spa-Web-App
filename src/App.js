import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import StaffPortal from "./Pages/StaffPortal";
import Login from "./Pages/Login";
import Booking from "./Pages/Booking";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";

import DashBoard from "./Components/StaffPortal/Dashboard/DashBoard";
import Users from "./Components/StaffPortal/Users/Users";

import ServiceTypeIndex from "./Components/StaffPortal/ServicesType/ServiceTypeIndex";
import ServiceTypeCreate from "./Components/StaffPortal/ServicesType/ServiceTypeCreate";
import ServiceTypeView from "./Components/StaffPortal/ServicesType/ServiceTypeView";

import Services from "./Pages/Services";

import TodayServices from "./Components/StaffPortal/TodayServices/TodayServices";
import TodayBookingIndex from "./Components/StaffPortal/TodayBooking/TodayBookingIndex";
import TodayBookingView from "./Components/StaffPortal/TodayBooking/TodayBookingView";

import ServicesIndex from "./Components/StaffPortal/Services/ServicesIndex";
import ServicesView from "./Components/StaffPortal/Services/ServicesView";
import ServicesCreate from "./Components/StaffPortal/Services/ServicesCreate";

import NotificationContainer from "react-notifications/lib/NotificationContainer";

function App() {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/staffportal" element={<StaffPortal />}>
            <Route path="/staffportal/dashboard" element={<DashBoard />} />
            <Route
              path="/staffportal/todayServices"
              element={<TodayServices />}
            />

            <Route
              path="/staffportal/TodayBooking"
              element={<TodayBookingIndex />}
            />
            <Route
              path="/staffportal/TodayBooking/view"
              element={<TodayBookingView />}
            />

            <Route path="/staffportal/users" element={<Users />}>
              <Route path="/staffportal/users/create" element={<Users />} />
            </Route>

            <Route
              path="/staffportal/servicetype"
              element={<ServiceTypeIndex />}
            />
            <Route
              path="/staffportal/servicetype/create"
              element={<ServiceTypeCreate />}
            />
            <Route
              path="/staffportal/servicetype/view"
              element={<ServiceTypeView />}
            />

            <Route path="/staffportal/services" element={<ServicesIndex />} />
            <Route
              path="/staffportal/services/create"
              element={<ServicesCreate />}
            />
            <Route
              path="/staffportal/services/view"
              element={<ServicesView />}
            />
          </Route>
        </Routes>
        <NotificationContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
