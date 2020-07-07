import React, { Component } from "react";
import Header from "./Header";

class FetchRandomUser extends Component {
  state = {
    loading: true,
    people: [],
  };
  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=200&nat=us";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
    console.log(data);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.people.length ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.people.map((person) => (
              <div key={person.login.uuid}>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <div>{person.email}</div>
                <div>{person.phone}</div>
                <div>{person.dob.date}</div>
                <img src={person.picture.thumbnail} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default FetchRandomUser;
