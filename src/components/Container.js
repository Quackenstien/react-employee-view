import React from "react";

export const Container = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-2">Image</div>
        <div className="col-2">Name</div>
        <div className="col-2">Phone</div>
        <div className="col-2">Email</div>
        <div className="col-2">D.O.B</div>
      </div>
    </div>
  );
};
