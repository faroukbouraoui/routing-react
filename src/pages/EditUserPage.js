import React, { Component } from "react";
import { getUser, updateUser } from "../Api/Users";
import UsersForm from "../Components/UsersForm";

export default class EditUserPage extends Component {
  state = {
    user: {
      name: '',
      email: ''
    },
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
  updateUser = (values)=>{
    const id = this.state.user.id;
    updateUser(id, values).then(()=>{
      alert('Success');
      this.props.history.push('/users')
    }).catch(error=>{
      alert('something happend in update');
    });
  }

  render() {
    return (
      <div>
        <h2>User</h2>
        <UsersForm values={this.state.user} onSubmit={this.updateUser} />
      </div>
    );
  }
}
