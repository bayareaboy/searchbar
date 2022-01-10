import React, { useState } from "react";

const SearchItem = ({ firstName, lastName, id }) => {
  return (
    <div>
      <div className="card  shadow-sm mt-3" style={{ width: "13rem" }}>
        <ul className="list-group align-items-start list-group-flush">
          <li className="list-group-item">
            <span className="fw-bold">First Name:</span> {firstName}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Last Name:</span> {lastName}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Patient ID:</span> {id}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchItem;
