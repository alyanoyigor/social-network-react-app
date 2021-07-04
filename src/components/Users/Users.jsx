import React from "react";
import axios from "axios";
import UsersItem from "./UserItem/UserItem";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    let usersElements = this.props.usersPage.map((u) => (
      <UsersItem
        id={u.id}
        photos={u.photos}
        name={u.name}
        status={u.status}
        location={u.location}
        followed={u.followed}
        followedToggleUsers={this.props.followedToggleUsers}
      />
    ));
    return (
      <div>
        <div>{usersElements}</div>
      </div>
    );
  }
}

export default Users;
