import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Loading from "./Loading";

class UsersMain extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers().then((users) => {
      this.setState({ users, isLoading: false });
    });
  };

  render() {
    const { users, isLoading } = this.state;
    if (isLoading) return <Loading />;
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
