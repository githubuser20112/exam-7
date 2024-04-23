import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Side2 from "../components/Sidebar/Side2";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-3/4 h">{children}</div>
      <Side2/>
    </div>
  );
};

export default Layout;
