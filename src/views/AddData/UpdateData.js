import React, { useState } from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { useData } from "../../Context/DataContext";
import ShowDonation from "../dashboard/ShowDonation";

function UpdateData() {
  const { donations } = useData();
  return (
    <>
      <CCard>
        <CCardHeader className="text-center">
          <h1>Update Donations</h1>
        </CCardHeader>
        <CCardBody className="">
          <ShowDonation donations={donations} update={true} />
        </CCardBody>
      </CCard>
    </>
  );
}

export default UpdateData;
