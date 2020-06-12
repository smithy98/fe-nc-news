import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import ErrorDisplayer from "./ErrorDisplayer";

class UsersMain extends Component {
  state = {
    users: [],
    isLoading: true,
    err: "",
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api
      .getUsers()
      .then((users) => {
        this.setState({ users, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  };

  render() {
    const { users, isLoading, err } = this.state;
    if (isLoading) return <Loading />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <main>
        <h2>Users</h2>
        {users.map(({ username, avatar_url, name }) => {
          return (
            <section className="user_item" key={username}>
              <p className="text">Name: {name}</p>
              <p className="text">Username: {username}</p>
              <img
                src={avatar_url}
                alt="User Avatar"
                className="user_avatar"
              ></img>
              <button onClick={() => this.props.updateUser(username)}>
                Log In as {username}
              </button>
            </section>
          );
        })}
      </main>
    );
  }
}

export default UsersMain;
