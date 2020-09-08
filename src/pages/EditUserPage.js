import React, { Component } from "react";
import { getUser } from "../Api/Users";
import UsersForm from "../Components/UsersForm";

export default class EditUserPage extends Component {
  state = {
    user: {},
  };

  componentDidMount = () => {
    const userID = this.props.match.params.id;
    getUser(userID)
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        alert("connexion maybe");
      });
    console.log(userID);
  };

  render() {
    return (
      <div>
        <h2>User</h2>
        <UsersForm values={this.state.user} />
      </div>
    );
  }
}
