import React, { lazy } from "react";
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const Donations = lazy(() => import("../Donations/Donations"));

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <div className="d-none d-md-block">
        <Donations />
      </div>
    </>
  );
};

export default Dashboard;
