import React from "react";
import axios from "axios";
import s from "./User.module.css";
import UsersItem from "./UserItem/UserItem";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.pageUsersCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (p) => {
    this.props.setCurrentUsersPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageUsersCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageUsersCount
    );
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    const usersPagination = pages.map((p) => (
      <span
        className={this.props.currentUsersPage === p && s.selectedPage}
        onClick={() => this.onPageChanged(p)}
      >
        {p}
      </span>
    ));
    const usersElements = this.props.users.map((u) => (
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
        <div>{usersPagination}</div>
        <div>{usersElements}</div>
      </div>
    );
  }
}

export default Users;
