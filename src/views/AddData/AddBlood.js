import React, { useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase";

function AddBlood() {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    group: "A+",
    mobile: "",
  });
  //   handle change
  function handleChange({ target }) {
    setState({
      ...state,
      [target.name]: target.value,
    });
  }
  //   handle Submit form
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    await db
      .collection("blood")
      .add({
        name: state.name,
        group: state.group,
        mobile: state.mobile,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setIsLoading(false);
        setState({
          name: "",
          group: "A+",
          mobile: "",
        });
        alert("Group Successfully Added!");
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
            placeholder="Name"
          />
        </div>
        <div className="form-group d-flex">
          <select
            className="form-control shadow-none w-50"
            name="group"
            value={state.group}
            onChange={handleChange}
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <input
            type="text"
            name="mobile"
            value={state.mobile}
            onChange={handleChange}
            className="form-control shadow-none ml-2 w-50"
            placeholder="Mobile"
          />
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

export default AddBlood;
