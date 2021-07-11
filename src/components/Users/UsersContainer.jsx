import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  setCurrentUsersPage,
  setTotalUsersCount,
  setUsers,
  followedToggleUsers,
  toggleIsFetching,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.pageUsersCount}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (p) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentUsersPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageUsersCount}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          currentUsersPage={this.props.currentUsersPage}
          totalUsersCount={this.props.totalUsersCount}
          pageUsersCount={this.props.pageUsersCount}
          users={this.props.users}
          followedToggleUsers={this.props.followedToggleUsers}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageUsersCount: state.usersPage.pageUsersCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentUsersPage: state.usersPage.currentUsersPage,
    isFetching: state.usersPage.isFetching,
  };
};

/* const mapDispatchToProps = (dispatch) => {
  return {
    followedToggleUsers: (id) => dispatch(toggleFollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setTotalUsersCount: (totalCount) =>
      dispatch(setTotalUsersCountAC(totalCount)),
    setCurrentUsersPage: (currentUserPage) =>
      dispatch(setCurrentUsersPageAC(currentUserPage)),
    toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
  };
}; */

export default connect(mapStateToProps, {
  followedToggleUsers,
  setUsers,
  setTotalUsersCount,
  setCurrentUsersPage,
  toggleIsFetching,
})(UsersContainer);
