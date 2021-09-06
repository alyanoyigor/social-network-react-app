import { followAPI, usersAPI } from "../api/api";

const TOGGLE_FOLLOW = "social-network/users/TOGGLE-FOLLOW";
const SET_USERS = "social-network/users/SET-USERS";
const SET_TOTAL_USERS_COUNT = "social-network/users/SET-TOTAL-USERS-COUNT";
const SET_CURRENT_USERS_PAGE = "social-network/users/SET-CURRENT-USERS-PAGE";
const TOGGLE_IS_FETCHING = "social-network/users/TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS =
	"social-network/users/TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
	users: [],
	pageUsersCount: 5,
	totalUsersCount: 0,
	currentUsersPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.id) {
						return { ...user, followed: !user.followed };
					}
					return user;
				}),
			};

		case SET_USERS:
			return { ...state, users: action.users };

		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalCount };

		case SET_CURRENT_USERS_PAGE:
			return { ...state, currentUsersPage: action.currentUserPage };

		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };

		case TOGGLE_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId),
			};

		default:
			return state;
	}
};
export const followedToggleUsers = (id) => ({
	type: TOGGLE_FOLLOW,
	id,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalCount,
});
export const setCurrentUsersPage = (currentUserPage) => ({
	type: SET_CURRENT_USERS_PAGE,
	currentUserPage,
});
export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
	type: TOGGLE_FOLLOWING_IN_PROGRESS,
	isFetching,
	userId,
});

export const requestUsers =
	(currentUsersPage, pageUsersCount) => async (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentUsersPage(currentUsersPage));
		let data = await usersAPI.getUsers(currentUsersPage, pageUsersCount);
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
	};

const followUnfollow = async (id, dispatch, property) => {
	dispatch(toggleFollowingInProgress(true, id));
	let data = await followAPI[property](id);
	if (data.resultCode === 0) dispatch(followedToggleUsers(id));
	dispatch(toggleFollowingInProgress(false, id));
};
export const follow = (id) => async (dispatch) => {
	followUnfollow(id, dispatch, "follow");
};
export const unfollow = (id) => async (dispatch) => {
	followUnfollow(id, dispatch, "unfollow");
};

export default usersReducer;
