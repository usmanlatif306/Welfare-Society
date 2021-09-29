import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { useData } from "src/Context/DataContext";
import { useHistory } from "react-router-dom";

function ShowExp({ donations }) {
  const { setExpDetail, expenditures } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const history = useHistory();

  //Get current post
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentData = donations.slice(indexOfFirstUser, indexOfLastUser);
  //Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Handle Expenditures Details
  async function handleExpDetails(e, id) {
    e.preventDefault();
    await setExpDetail(expenditures.find((item) => item.id === id));
    history.push("/expenditures/details");
  }
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Date</th>
              {/* for expenditures */}
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, idx) => (
              <tr key={item.id}>
                <th>{idx + 1 + (currentPage - 1) * usersPerPage}</th>
                <td className="semi-bold">
                  {item.createdAt.toDate().toDateString()}
                </td>
                {/* For Expenditures */}
                <td className="semi-bold">{item.amount}</td>
                <td className="semi-bold">
                  <a href="#" onClick={(e) => handleExpDetails(e, item.id)}>
                    Details
                  </a>
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

export default ShowExp;
