import React, { useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase";
import { useData } from "../../Context/DataContext";

export default function AddDonation() {
  const { dcount, setDCount } = useData();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    donation: "",
    type: "Rs",
    status: "pending",
  });

  function handleChange({ target }) {
    setState({
      ...state,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    await db
      .collection("donations")
      .add({
        No: dcount,
        name: state.name,
        donation: state.donation,
        type: state.type,
        status: state.status,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        setIsLoading(false);
        setDCount(dcount + 1);
        setState({
          name: "",
          donation: "",
          type: "Rs",
          category: "cementory",
          status: "pending",
        });
        alert("Donation Successfully Added!");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            className="form-control shadow-none"
            placeholder="Donor Name"
          />
        </div>
        <div className="form-group d-flex">
          <input
            type="text"
            name="donation"
            value={state.donation}
            onChange={handleChange}
            className="form-control shadow-none w-50"
            placeholder="Donations"
          />
          <select
            className="form-control shadow-none ml-2 w-25"
            name="type"
            value={state.type}
            onChange={handleChange}
          >
            <option value="Rs">Rs</option>
            <option value="Bricks">Bricks</option>
            <option value="Cement Bags">Cement Bags</option>
            <option value="Trees">Trees</option>
            <option value="Trolley Sand">Trolley Sand</option>
            <option value="">Others</option>
          </select>
          <select
            className="form-control shadow-none ml-2 w-25"
            name="status"
            value={state.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="received">Received</option>
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary mx-2 shadow-none"
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
