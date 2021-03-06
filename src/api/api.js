import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0",
	headers: { "API-KEY": "56a20b68-82db-469b-b40c-77e7620a9564" },
});

export const usersAPI = {
	getUsers: (currentUsersPage, pageUsersCount) =>
		instance
			.get(`/users?page=${currentUsersPage}&count=${pageUsersCount}`)
			.then((response) => response.data),

	updatePageUsers: (page, pageUsersCount) =>
		instance
			.get(`/users?page=${page}&count=${pageUsersCount}`)
			.then((response) => response.data),
};

export const authAPI = {
	me: () => instance.get("/auth/me").then((response) => response.data),
	login: (email, password, rememberMe) =>
		instance
			.post("/auth/login", { email, password, rememberMe })
			.then((response) => response.data),

	logout: () =>
		instance.delete("/auth/login").then((response) => response.data),
};

export const followAPI = {
	unfollow: (id) =>
		instance.delete(`/follow/${id}`).then((response) => response.data),

	follow: (id) =>
		instance.post(`/follow/${id}`).then((response) => response.data),
};

export const profileAPI = {
	getUserProfile: (id) =>
		instance.get(`/profile/${id}`).then((response) => response.data),
	getUserStatus: (id) =>
		instance.get(`/profile/status/${id}`).then((response) => response.data),
	updateUserStatus: (status) =>
		instance
			.put(`/profile/status`, { status })
			.then((response) => response.data),
};
