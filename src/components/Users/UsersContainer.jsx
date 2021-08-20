import React from "react";
import { connect } from "react-redux";
import { requestUsers, follow, unfollow } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
	getCurrentUsersPage,
	getFollowingInProgress,
	getIsAuth,
	getIsFetching,
	getPageUsersCount,
	getTotalUsersCount,
	getUsers,
} from "../../redux/usersSelector";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.requestUsers(
			this.props.currentUsersPage,
			this.props.pageUsersCount
		);
	}
	onPageChanged = (page) =>
		this.props.requestUsers(page, this.props.pageUsersCount);

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
					followingInProgress={this.props.followingInProgress}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageUsersCount: getPageUsersCount(state),
		totalUsersCount: getTotalUsersCount(state),
		currentUsersPage: getCurrentUsersPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: getIsAuth(state),
	};
};

export default compose(
	connect(mapStateToProps, { requestUsers, follow, unfollow })
)(UsersContainer);
