import React, { useState } from "react";
import Pagination from "react-js-pagination";

function ShowBlood({ donations }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  //Get current post
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentData = donations.slice(indexOfFirstUser, indexOfLastUser);
  //Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, idx) => (
              <tr key={item.id}>
                <td>{idx + 1 + (currentPage - 1) * usersPerPage}</td>
                <td>{item.name}</td>
                <td>{item.group}</td>
                <td>{item.mobile}</td>
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

export default ShowBlood;
