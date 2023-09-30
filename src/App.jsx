import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header.jsx";
import Main from "./components/Main";
import AboutUs from "./components/pages/AboutUs";
import Gallery from "./components/pages/Gallery";
import ContactUs from "./components/pages/ContactUs";
import ProductDetails from "./components/ProductDetails.jsx";

const App = () => {
  return (
    <>
      <Router>
        <div className="max-w-[1200px] m-auto">
          <Header />
          {/* <Main /> */}
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product-details/:slug" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
