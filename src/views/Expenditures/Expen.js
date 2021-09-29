import React from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { useData } from "src/Context/DataContext";
import ShowDonation from "../dashboard/ShowDonation";
import ShowExp from "./ShowExp";

function Expen() {
  const { expenditures } = useData();

  return (
    <>
      <CCard>
        <CCardHeader className="text-center">
          <h1>Expenditures Details</h1>
        </CCardHeader>
        <CCardBody>
          {/* <ShowDonation donations={expenditures} isExp={true} /> */}
          <ShowExp donations={expenditures} />
        </CCardBody>
      </CCard>
    </>
  );
}

export default Expen;
