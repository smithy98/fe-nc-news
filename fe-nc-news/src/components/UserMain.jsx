import React, { Component } from "react";
import { Link } from "@reach/router";
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
        console.log("then");
        this.setState({ users, isLoading: false });
      })
      .catch((err) => {
        console.dir(err.response.data);
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
            <Link to={`/users/${username}`} key={username}>
              <div className="list_item" key={username}>
                Name: {name} <br />
                Username: {username} <br />
                <img
                  src={avatar_url}
                  alt="User Avatar"
                  className="user_avatar"
                ></img>
              </div>
            </Link>
          );
        })}
      </main>
    );
  }
}

export default UsersMain;
