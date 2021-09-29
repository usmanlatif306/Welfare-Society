import React, { useState } from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import ShowBlood from "./ShowBlood";
import { useData } from "src/Context/DataContext";

function Blood() {
  const { blood, apo, aneg, bpo, bneg, opo, oneg, abpo, abneg } = useData();
  const [all, setall] = useState(true);
  const [ap, setAp] = useState(false);
  const [an, setAn] = useState(false);
  const [bp, setBp] = useState(false);
  const [bn, setBn] = useState(false);
  const [op, setOp] = useState(false);
  const [on, setOn] = useState(false);
  const [abp, setAbp] = useState(false);
  const [abn, setAbn] = useState(false);

  function handleAll() {
    setall(true);
    setAp(false);
    setAn(false);
    setBp(false);
    setBn(false);
    setOp(false);
    setOn(false);
    setAbp(false);
    setAbn(false);
  }
  function handleAp() {
    setall(false);
    setAp(true);
    setAn(false);
    setBp(false);
    setBn(false);
    setOp(false);
    setOn(false);
    setAbp(false);
    setAbn(false);
  }
  function handleAn() {
    setall(false);
    setAp(false);
    setAn(true);
    setBp(false);
    setBn(false);
    setOp(false);
    setOn(false);
    setAbp(false);
    setAbn(false);
  }
  function handleBp() {
    setall(false);
    setAp(false);
    setAn(false);
    setBp(true);
    setBn(false);
    setOp(false);
    setOn(false);
    setAbp(false);
    setAbn(false);
  }
  function handleBn() {
    setall(false);
    setAp(false);
    setAn(false);
    setBp(false);
    setBn(true);
    setOp(false);
    setOn(false);
    setAbp(false);
    setAbn(false);
  }
  function handleOp() {
    setall(false);
    setAp(false);
    setAn(false);
    setBp(false);
    setBn(false);
    setOp(true);
    setOn(false);
    setAbp(false);
    setAbn(false);
  }
  function handleOn() {
    setall(false);
    setAp(false);
    setAn(false);
    setBp(false);
    setBn(false);
    setOp(false);
    setOn(true);
    setAbp(false);
    setAbn(false);
  }
  function handleAbp() {
    setall(false);
    setAp(false);
    setAn(false);
    setBp(false);
    setBn(false);
    setOp(false);
    setOn(false);
    setAbp(true);
    setAbn(false);
  }
  function handleAbn() {
    setall(false);
    setAp(false);
    setAn(false);
    setBp(false);
    setBn(false);
    setOp(false);
    setOn(false);
    setAbp(false);
    setAbn(true);
  }
  return (
    <CCard className="">
      <CCardHeader className="text-center">
        <h1>Blood Donations</h1>
        <div className="text-center mt-3">
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              all && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleAll}
          >
            All
          </button>
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              ap && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleAp}
          >
            A+
          </button>
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              an && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleAn}
          >
            A-
          </button>
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              bp && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleBp}
          >
            B+
          </button>
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              bn && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleBn}
          >
            B-
          </button>
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              op && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleOp}
          >
            O+
          </button>
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              on && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleOn}
          >
            O-
          </button>
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              abp && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleAbp}
          >
            AB+
          </button>
          <button
            className={`mb-2 btn btn-sm btn-outline-primary ${
              abn && "btn-primary text-white"
            } mx-2 shadow-none`}
            onClick={handleAbn}
          >
            AB-
          </button>
        </div>
      </CCardHeader>
      <CCardBody className="">
        {all && <ShowBlood donations={blood} />}
        {ap && <ShowBlood donations={apo} />}
        {an && <ShowBlood donations={aneg} />}
        {bp && <ShowBlood donations={bpo} />}
        {bn && <ShowBlood donations={bneg} />}
        {op && <ShowBlood donations={opo} />}
        {on && <ShowBlood donations={oneg} />}
        {abp && <ShowBlood donations={abpo} />}
        {abn && <ShowBlood donations={abneg} />}
      </CCardBody>
    </CCard>
  );
}

export default Blood;
