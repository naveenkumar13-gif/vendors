import React from "react";
import { Outlet } from "react-router-dom";

function index() {
  return (
    <div>
      Educator
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default index;
