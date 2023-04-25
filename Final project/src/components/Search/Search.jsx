import React, { useState } from "react";

import "./search.scss";

const Search = ({ searchString, setSearchString }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="searchWrapper">
      <div className="search">
        <input
          placeholder="Type to search..."
          required=""
          className={isActive ? "input1 showInput" : "input1"}
          name="text"
          type="text"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <div className="icon" onClick={() => setIsActive(!isActive)}>
          <svg
            viewBox="0 0 512 512"
            className="ionicon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Search</title>
            <path
              stroke-width="32"
              stroke-miterlimit="10"
              stroke="currentColor"
              fill="none"
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            ></path>
            <path
              d="M338.29 338.29L448 448"
              stroke-width="32"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke="currentColor"
              fill="none"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
