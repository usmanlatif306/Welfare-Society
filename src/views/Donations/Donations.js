import React, { lazy, useState } from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { useData } from "../../Context/DataContext";
const ShowDonation = lazy(() => import("../dashboard/ShowDonation.js"));

function Donations() {
  const {
    donations,
    cashArr,
    brickArr,
    cementArr,
    trolleyArr,
    treesArr,
    othersArr,
    receivedArr,
  } = useData();
  const [all, setall] = useState(true);
  const [cash, setcash] = useState(false);
  const [bricks, setbricks] = useState(false);
  const [cement, setcement] = useState(false);
  const [sand, setsand] = useState(false);
  const [trees, settrees] = useState(false);
  const [others, setothers] = useState(false);
  const [received, setreceived] = useState(false);

  function handleAll() {
    setall(true);
    setcash(false);
    setbricks(false);
    setcement(false);
    settrees(false);
    setothers(false);
    setsand(false);
    setreceived(false);
  }
  function handleCash() {
    setall(false);
    setcash(true);
    setbricks(false);
    setcement(false);
    settrees(false);
    setothers(false);
    setsand(false);
  }
  function handleBricks() {
    setall(false);
    setcash(false);
    setbricks(true);
    setcement(false);
    settrees(false);
    setothers(false);
    setsand(false);
    setreceived(false);
  }
  function handleCement() {
    setall(false);
    setcash(false);
    setbricks(false);
    setcement(true);
    settrees(false);
    setothers(false);
    setsand(false);
    setreceived(false);
  }
  function handleTrees() {
    setall(false);
    setcash(false);
    setbricks(false);
    setcement(false);
    settrees(true);
    setothers(false);
    setsand(false);
    setreceived(false);
  }
  function handleOthers() {
    setall(false);
    setcash(false);
    setbricks(false);
    setcement(false);
    settrees(false);
    setothers(true);
    setsand(false);
    setreceived(false);
  }
  function handleSand() {
    setall(false);
    setcash(false);
    setbricks(false);
    setcement(false);
    settrees(false);
    setothers(false);
    setsand(true);
    setreceived(false);
  }
  function handleRecieved() {
    setall(false);
    setcash(false);
    setbricks(false);
    setcement(false);
    settrees(false);
    setothers(false);
    setsand(false);
    setreceived(true);
  }
  return (
    <>
      <CCard className="">
        <CCardHeader className="text-center">
          <h1>Donations Details</h1>
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
                cash && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleCash}
            >
              Cash
            </button>
            <button
              className={`mb-2 btn btn-sm btn-outline-primary ${
                bricks && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleBricks}
            >
              Bricks
            </button>
            <button
              className={`mb-2 btn btn-sm btn-outline-primary ${
                cement && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleCement}
            >
              Cement Bags
            </button>
            <button
              className={`mb-2 btn btn-sm btn-outline-primary ${
                trees && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleTrees}
            >
              Trees
            </button>
            <button
              className={`mb-2 btn btn-sm btn-outline-primary ${
                sand && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleSand}
            >
              Sand
            </button>
            <button
              className={`mb-2 btn btn-sm btn-outline-primary ${
                others && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleOthers}
            >
              Others
            </button>
            <button
              className={`mb-2 btn btn-sm btn-outline-primary ${
                received && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleRecieved}
            >
              Received
            </button>
          </div>
        </CCardHeader>
        <CCardBody className="">
          {all && <ShowDonation donations={donations} update={false} />}
          {cash && <ShowDonation donations={cashArr} update={false} />}
          {bricks && <ShowDonation donations={brickArr} update={false} />}
          {cement && <ShowDonation donations={cementArr} update={false} />}
          {trees && <ShowDonation donations={treesArr} update={false} />}
          {sand && <ShowDonation donations={trolleyArr} update={false} />}
          {others && <ShowDonation donations={othersArr} update={false} />}
          {received && <ShowDonation donations={receivedArr} update={false} />}
        </CCardBody>
      </CCard>
    </>
  );
}

export default Donations;
