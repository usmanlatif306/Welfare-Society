import React from "react";
import { CRow, CCol } from "@coreui/react";
import { useData } from "../../Context/DataContext";

const WidgetsDropdown = () => {
  const {
    total,
    recCash,
    bricks,
    recBricks,
    cement,
    recCement,
    trolley,
    RcvTrolly,
    expen,
    trees,
    RcvTrees,
  } = useData();
  return (
    <CRow>
      <CCol sm="6" md="4" className="mb-2">
        <div className="card border bg-gradient-primary text-center text-white pt-4 pb-3 h-100">
          <h2 className="mt-4">Total Cash: {total}</h2>
          <h3 className="mt-2">Received: {recCash}</h3>
        </div>
      </CCol>
      <CCol sm="6" md="4" className="mb-2">
        <div className="card border bg-gradient-info text-center text-white pt-4 pb-3 h-100">
          <h2 className="mt-4">Total Bricks : {bricks}</h2>
          <h3 className="mt-2">Received: {recBricks}</h3>
        </div>
      </CCol>

      <CCol sm="6" md="4" className="mb-2">
        <div className="card border bg-gradient-success text-center text-white pt-4 pb-3 h-100">
          <h2 className="mt-4">Cement Bags : {cement}</h2>
          <h3 className="mt-2">Received: {recCement}</h3>
        </div>
      </CCol>
      <CCol sm="6" md="4" className="mb-2">
        <div className="card border bg-gradient-warning text-center text-white pt-4 pb-3 h-100">
          <h2 className="mt-4">Trolley Sand: {trolley}</h2>
          <h3 className="mt-2">Received: {RcvTrolly}</h3>
        </div>
      </CCol>
      <CCol sm="6" md="4" className="mb-2">
        <div className="card border bg-gradient-primary text-center text-white pt-4 pb-3 h-100">
          <h2 className="mt-4">Trees: {trees}</h2>
          <h3 className="mt-2">Received: {RcvTrees}</h3>
        </div>
      </CCol>
      <CCol sm="6" md="4" className="mb-2">
        <div className="card border bg-gradient-danger text-center text-white pt-4 pb-3 h-100">
          <h2 className="mt-4">Expenditures</h2>
          <h3 className="mt-2">{expen}</h3>
        </div>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
