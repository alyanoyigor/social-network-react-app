import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
	postsData: [
		{ id: 1, message: "Post 1", likes: "5" },
		{ id: 2, message: "Post 2", likes: "3" },
		{ id: 3, message: "Post 3", likes: "4" },
	],
	profile: null,
	status: "",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				postsData: [
					...state.postsData,
					{ id: 4, message: action.newPostText, likes: 0 },
				],
			};

		case SET_PROFILE:
			return {
				...state,
				profile: action.profile,
			};

		case SET_USER_STATUS:
			return {
				...state,
				status: action.status,
			};

		case DELETE_POST:
			return {
				...state,
				postsData: initialState.postsData.filter((item) => item.id != action.id),
			};

		default:
			return state;
	}
};
//action creators
export const addNewPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (id) => ({ type: DELETE_POST, id });

export const setUserProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

//thunk creators
export const getUserProfile = (userId) => (dispatch) => {
	profileAPI.getUserProfile(userId).then((data) => {
		dispatch(setUserProfile(data));
	});
};
export const getUserStatus = (userId) => (dispatch) => {
	profileAPI.getUserStatus(userId).then((data) => {
		dispatch(setUserStatus(data));
	});
};
export const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateUserStatus(status).then((data) => {
		if (data.resultCode === 0) dispatch(setUserStatus(status));
	});
};

export default profileReducer;
