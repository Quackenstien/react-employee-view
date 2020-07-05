import React, { Component } from "react";
import API from "./API";
import Header from "./Header";

class EmpList extends Component {
  state = {
    result: {},
    search: "",
  };

  searchEmp = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return <Header />;
  }
}

export default EmpList;
