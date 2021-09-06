import { profileAPI } from "../api/api";

const ADD_POST = "social-network/profile/ADD-POST";
const SET_PROFILE = "social-network/profile/SET_PROFILE";
const SET_USER_STATUS = "social-network/profile/SET_USER_STATUS";
const DELETE_POST = "social-network/profile/DELETE_POST";

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
				postsData: initialState.postsData.filter(
					(item) => item.id !== action.id
				),
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
export const getUserProfile = (userId) => async (dispatch) => {
	let data = await profileAPI.getUserProfile(userId);
	dispatch(setUserProfile(data));
};
export const getUserStatus = (userId) => async (dispatch) => {
	let data = await profileAPI.getUserStatus(userId);
	dispatch(setUserStatus(data));
};
export const updateUserStatus = (status) => async (dispatch) => {
	let data = await profileAPI.updateUserStatus(status);
	if (data.resultCode === 0) dispatch(setUserStatus(status));
};

export default profileReducer;
