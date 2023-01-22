import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import StaffPortal from "./Pages/StaffPortal";
import Login from "./Pages/Login";
import About from "./Pages/About";
import BookingV2 from "./Pages/BookingV2";
import Gallery from "./Pages/Gallery";

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

import GalleryIndex from "./Components/StaffPortal/Gallery/GalleryIndex";
import GalleryCreate from "./Components/StaffPortal/Gallery/GalleryCreate";

import NotificationContainer from "react-notifications/lib/NotificationContainer";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-[50vh]">
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/booking" element={<BookingV2 />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/staffportal" element={<StaffPortal />}>
              <Route path="/staffportal/" element={<DashBoard />} />

              {/* Staff Portal Today Services */}
              <Route
                path="/staffportal/todayServices"
                element={<TodayServices />}
              />
              {/* Staff Portal Bookings */}
              <Route
                path="/staffportal/booking"
                element={<TodayBookingIndex />}
              />

              <Route
                path="/staffportal/Booking/view"
                element={<TodayBookingView />}
              />

              {/* Staff Portal Users */}
              <Route path="/staffportal/users" element={<Users />} />

              {/* Staff Portal Service Types */}
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

              {/* Staff Portal Services */}
              <Route path="/staffportal/services" element={<ServicesIndex />} />
              <Route
                path="/staffportal/services/create"
                element={<ServicesCreate />}
              />
              <Route
                path="/staffportal/services/view"
                element={<ServicesView />}
              />

              {/* Staff Portal Gallery */}
              <Route path="/staffportal/gallery" element={<GalleryIndex />} />
              <Route
                path="/staffportal/gallery/create"
                element={<GalleryCreate />}
              />
            </Route>
          </Routes>
          <NotificationContainer />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
