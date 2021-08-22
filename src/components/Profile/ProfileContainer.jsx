import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
	getUserProfile,
	getUserStatus,
	updateUserStatus,
} from "../../redux/profileReducer";
import Profile from "./Profile";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				console.log(this.props);
				this.props.history.push("/login");
			}
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}
	render() {
		return <Profile {...this.props} />;
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.id,
	};
};

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
	withRouter
	// withAuthRedirect
)(ProfileContainer);
