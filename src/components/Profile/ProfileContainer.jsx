import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile } from "../../redux/profileReducer";
import { usersAPI } from "../../api/api";
import Profile from "./Profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15658;
    }
    usersAPI.updateUserProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return { profile: state.profilePage.profile, isAuth: state.auth.isAuth };
};

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(withAuthRedirect(ProfileContainer))
);
