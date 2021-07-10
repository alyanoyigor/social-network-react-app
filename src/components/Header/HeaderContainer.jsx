import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        let { id, email, login } = response.data.data;
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
