import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Details = React.lazy(() => import("./views/Details"));
const Donations = React.lazy(() => import("./views/Donations/Donations"));
const Expenditures = React.lazy(() => import("./views/Expenditures/Expen"));
const AddData = React.lazy(() => import("./views/AddData/AddData"));
const UpdateData = React.lazy(() => import("./views/AddData/UpdateData"));
const Blood = React.lazy(() => import("./views/blood/Blood"));
const routes = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/donations", exact: true, name: "Donations", component: Donations },
  {
    path: "/expenditures",
    exact: true,
    name: "Donations",
    component: Expenditures,
  },
  {
    path: "/expenditures/details",
    name: "",
    component: Details,
    exact: true,
  },
  { path: "/blood-donations", exact: true, component: Blood },
  { path: "/add_data", exact: true, component: AddData },
  { path: "/update_data", exact: true, component: UpdateData },
];

export default routes;
