import React from "react";
import { CCard } from "@coreui/react";
import AddDonation from "./AddDonation";
import { useState } from "react";
import AddExpenditure from "./AddExpenditure";
import { Link } from "react-router-dom";
import AddBlood from "./AddBlood";

function AddData() {
  const [isDonation, setIsDonation] = useState(true);
  const [isExp, setIsExp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isBlood, setIsBlood] = useState(false);

  function handleDonations() {
    setIsDonation(true);
    setIsExp(false);
    setIsBlood(false);
  }
  function handleExpenditure() {
    setIsDonation(false);
    setIsExp(true);
    setIsBlood(false);
  }
  function handleBlood() {
    setIsDonation(false);
    setIsExp(false);
    setIsBlood(true);
  }
  function handlePassword(e) {
    if (e.target.value === "password306") {
      setIsLogin(true);
    }
  }
  return (
    <>
      {!isLogin ? (
        <div className="w-75 mx-auto my-3 px-2 px-md-0">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control shadow-none"
              placeholder="Enter Password"
              onChange={(e) => handlePassword(e)}
            />
          </div>
        </div>
      ) : (
        <CCard>
          <h1 className="text-center">Add Data to Database</h1>
          <div className="text-center py-2">
            <button
              className={`btn btn-sm btn-outline-primary ${
                isDonation && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleDonations}
            >
              Donations
            </button>
            <button
              className={`btn btn-sm btn-outline-primary ${
                isExp && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleExpenditure}
            >
              Expenditure
            </button>
            <button
              className={`btn btn-sm btn-outline-primary ${
                isBlood && "btn-primary text-white"
              } mx-2 shadow-none`}
              onClick={handleBlood}
            >
              Blood
            </button>
            <Link
              to="/update_data"
              className="btn btn-sm btn-outline-primary mx-2 shadow-none"
            >
              Update
            </Link>
          </div>
          <div className="account__div mx-auto my-3 px-2 px-md-0">
            {isDonation && <AddDonation />}
            {isExp && <AddExpenditure />}
            {isBlood && <AddBlood />}
          </div>
        </CCard>
      )}
    </>
  );
}

export default AddData;
