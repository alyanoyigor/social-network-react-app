import { connect } from "react-redux";
import { setUsersAC, toggleFollowAC } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followedToggleUsers: (id) => dispatch(toggleFollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;
