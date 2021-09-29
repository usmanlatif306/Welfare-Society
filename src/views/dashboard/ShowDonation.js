import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { db } from "../../firebase";
import firebase from "firebase";

function ShowDonation({ donations, update }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [isLoading, setisLoading] = useState(false);
  const [status, setStatus] = useState("pending");
  const [search, setSearch] = useState("");

  //Get current post
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentData = donations.slice(indexOfFirstUser, indexOfLastUser);
  //Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // handle Update
  async function handleUpdate(id) {
    setisLoading(true);
    await db
      .collection("donations")
      .doc(id)
      .update({
        status: status,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setStatus("pending");
        setisLoading(false);
        alert("Document successfully updated!");
      })
      .catch((err) => {
        setisLoading(false);
        alert(err);
      });
  }
  let records = null;
  if (search === "") {
    records = currentData;
  } else {
    records = donations;
  }

  return (
    <>
      <div className="width__search form-group">
        <input
          type="text"
          className="form-control shadow-none"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col" className="text-center">
                Donations
              </th>

              <th scope="col">Date</th>
              <th scope="col">Status</th>

              {update && <th scope="col"></th>}
            </tr>
          </thead>
          <tbody>
            {records
              .filter((user) => {
                if (search === "") {
                  return user;
                } else if (
                  user.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((item, idx) => (
                <tr key={item.id}>
                  <th>
                    {update
                      ? item.No
                      : idx + 1 + (currentPage - 1) * usersPerPage}
                  </th>

                  <td className="semi-bold">{item.name}</td>

                  <td
                    className={`${
                      item.status === "pending" ? "text-danger" : "text-success"
                    } semi-bold text-center`}
                  >
                    {item.donation + " " + item.type}
                  </td>

                  <td className="semi-bold">
                    {item.createdAt.toDate().toDateString()}
                  </td>

                  {/* For Update */}
                  {!update ? (
                    <td className="text-capitalize semi-bold">{item.status}</td>
                  ) : (
                    <td>
                      <div className="form-group">
                        <select
                          className="form-control shadow-none"
                          defaultValue={item.status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="received">Received</option>
                        </select>
                      </div>
                    </td>
                  )}
                  <td>
                    {update && (
                      <button
                        className="btn btn-sm btn-primary shadow-none"
                        onClick={() => handleUpdate(item.id)}
                        disabled={isLoading}
                      >
                        Update
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        activePage={currentPage}
        itemsCountPerPage={usersPerPage}
        totalItemsCount={donations.length}
        pageRangeDisplayed={5}
        onChange={paginate}
        itemClass="page-item"
        linkClass="page-link shadow-none"
      />
    </>
  );
}

export default ShowDonation;
