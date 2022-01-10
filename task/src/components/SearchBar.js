import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const URI = "https://6195803474c1bd00176c6d9a.mockapi.io/api/v1/patient";

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-row justify-content-center">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
