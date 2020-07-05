import React from "react";
import "./Search.css";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">Employee Directory</h1>
            <h6 className="text-center">
              Click on carrots to filter by heading or use the search box to
              narrow your results.
            </h6>
          </div>
        </div>
        <input className="Search" placeholder="Search"></input>
      </header>
    </div>
  );
}

export default Header;
