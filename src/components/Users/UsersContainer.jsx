import { connect } from "react-redux";
import {
  setCurrentUsersPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFollowAC,
} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageUsersCount: state.usersPage.pageUsersCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentUsersPage: state.usersPage.currentUsersPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followedToggleUsers: (id) => dispatch(toggleFollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setTotalUsersCount: (totalCount) =>
      dispatch(setTotalUsersCountAC(totalCount)),
    setCurrentUsersPage: (currentUserPage) =>
      dispatch(setCurrentUsersPageAC(currentUserPage)),
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;
