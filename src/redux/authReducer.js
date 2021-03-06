import { authAPI } from "../api/api";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.authData,
			};

		default:
			return state;
	}
};
export const setAuthUserData = (id, email, login, isAuth) => ({
	type: SET_USER_DATA,
	authData: { id, email, login, isAuth },
});
export const getAuthUserData = () => async (dispatch) => {
	let data = await authAPI.me();
	if (data.resultCode === 0) {
		let { id, email, login } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};
export const login =
	(email, password, rememberMe, action) => async (dispatch) => {
		let data = await authAPI.login(email, password, rememberMe);
		if (data.resultCode === 0) {
			dispatch(getAuthUserData());
			action.setSubmitting(false);
			action.resetForm();
		} else {
			const message =
				data.messages.length > 0 ? data.messages[0] : "Some error";
			action.setStatus(message);
			action.setSubmitting(false);
		}
	};
export const logout = () => async (dispatch) => {
	let data = await authAPI.logout();
	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};
export default authReducer;
