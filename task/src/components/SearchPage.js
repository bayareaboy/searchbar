import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchItem from "./SearchItem";

const SearchPage = () => {
  const [data, setData] = useState(
    localStorage.getItem("search")
      ? JSON.parse(localStorage.getItem("search"))
      : []
  );
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [name, setName] = useState(
    localStorage.getItem("searchTerm")
      ? JSON.parse(localStorage.getItem("searchTerm"))
      : ""
  );

  //  GET request to the API
  const searchPatient = async (searchName) => {
    const URI = `https://6195803474c1bd00176c6d9a.mockapi.io/api/v1/patient?firstName=${
      searchName ? searchName : name
    }`;

    try {
      setLoading(true);
      const res = await axios.get(URI);
      setData(res.data);

      setLoading(false);
      localStorage.setItem("searchTerm", JSON.stringify(name));
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  // Handles change when typing (shows drawer)
  const handleChange = async (e) => {
    // localStorage.removeItem("search");
    setTyping(true);
    setName(e.target.value);
    setTimeout(() => {
      searchPatient();
    }, 2500);
  };
  // runs the search when suggested results pop on the drawer
  const handleClick = async (name) => {
    setName(name);
    searchPatient(name);
    setTyping(false);
  };

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column justify-content-center">
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Patient Name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => searchPatient()}
            >
              Search
            </button>
          </div>
          {typing ? (
            <ul className="card col-6 shadow-sm" style={{ listStyle: "none" }}>
              <li>
                {typing ? (
                  <h6 className="dropdown-header fst-italic">
                    {localStorage.getItem("searchTerm")
                      ? JSON.parse(localStorage.getItem("searchTerm"))
                      : ""}
                  </h6>
                ) : (
                  ""
                )}
              </li>
              {!loading && data ? (
                data.slice(0, 19).map((searchItem, id) => (
                  <li key={id}>
                    <span
                      style={{ cursor: "pointer" }}
                      className="dropdown-item"
                      onClick={() => handleClick(searchItem.firstName)}
                    >
                      {searchItem.firstName}
                    </span>
                  </li>
                ))
              ) : (
                <p>No results found</p>
              )}
            </ul>
          ) : (
            ""
          )}
        </div>

        <div className="mt-10 d-flex flex-column">
          {!loading && data ? (
            data.map((item) => (
              <SearchItem
                key={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                id={item.id}
              />
            ))
          ) : (
            <h4>Searching...</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
