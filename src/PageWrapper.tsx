import React from "react";
import Navbar from "./Navbar";

const PageWrapper = ({ children }: any) => {
  return (
    <div className="pagewrapper">
      <Navbar />
      {children}
    </div>
  );
};

export default PageWrapper;
