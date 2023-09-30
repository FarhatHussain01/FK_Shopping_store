import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header shadow-lg flex items-center justify-between  p-7">
        {/* <img src="" alt="" /> */}
        <h1 className="text-xl font-bold  p-1">My Blog</h1>

        <nav className="nav--links flex gap-3 text-xl font-semibold ">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact-us">Contact us</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
