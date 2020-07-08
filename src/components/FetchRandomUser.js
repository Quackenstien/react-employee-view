import React, { Component } from "react";
import Moment from "moment";

class FetchRandomUser extends Component {
  state = {
    loading: true,
    results: [],
  };
  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=5&nat=us";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ results: data.results, loading: false });
  }

  render() {
    return (
      <div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">D.O.B</th>
              </tr>
            </thead>
            <tbody>
              {this.state.results.map(
                ({ name, picture, dob, email, phone }) => (
                  <tr>
                    <td>
                      <img alt="userimg" src={picture.thumbnail} />
                    </td>
                    <td>{name.first + " " + name.last}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{Moment(dob.date).format("MM/DD/YYYY")}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FetchRandomUser;
