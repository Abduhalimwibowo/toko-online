import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      <h1>Main Gan</h1>
      <Footer />
    </div>
  );
};

export default MainLayout;
