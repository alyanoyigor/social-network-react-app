import React from "react";
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
import { usersAPI } from "../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .updateUsers(this.props.currentUsersPage, this.props.pageUsersCount)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentUsersPage(page);
    usersAPI.updatePageUsers(page, this.props.pageUsersCount).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
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
