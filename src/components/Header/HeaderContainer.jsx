import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { authAPI } from "../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.me().then((data) => {
      let { id, email, login } = data;
      this.props.setAuthUserData(id, email, login);
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
