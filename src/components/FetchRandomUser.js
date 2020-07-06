import React, { Component } from "react";

class FetchRandomUser extends Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=200&nat=us";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <div>{this.state.person.email}</div>
            <div>{this.state.person.phone}</div>
            <div>{this.state.person.dob.date}</div>
            <img src={this.state.person.picture.thumbnail} />
          </div>
        )}
      </div>
    );
  }
}

export default FetchRandomUser;
