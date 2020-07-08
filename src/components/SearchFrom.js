import React from "react";
function Search({ handleOnChange }) {
  return (
    <div>
      <form>
        <input
          type="Search"
          placeholder="Search Employees Here"
          onChange={(event) => handleOnChange(event)}
        ></input>
      </form>
    </div>
  );
}
export default Search;
