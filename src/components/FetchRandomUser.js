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

    // const emp = data.results.map((result) => ({
    //   name: `${result.name.first}, ${result.name.last}`,
    //   photo: result.picture.thumbnail,
    //   email: result.email,
    //   phone: result.phone,
    //   dob: result.dob.date,
    // }));

    this.setState({ results: data.results, loading: false });
    // console.log(emp);
  }

  render() {
    // const { emp } = this.state;
    return (
      <div>
        {/* {this.state.loading || !this.state.results.length ? (
          <div>loading...</div>
        ) : ( */}
        <div>
          {/* {this.state.people.map((person) => ( */}
          {/* <div key={person.login.uuid}> */}
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
          {/* </div> */}
          {/* // ))} */}
        </div>
        {/* // )} */}
      </div>
    );
  }
}

export default FetchRandomUser;
