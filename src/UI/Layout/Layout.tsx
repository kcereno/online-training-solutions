import React from "react";
import Footer from "../Footer/Footer";
import CustomModal from "../Modal/CustomModal";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

type PropTypes = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropTypes) => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <CustomModal />
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
