export const getUsers = (state) => state.usersPage.users;
export const getPageUsersCount = (state) => state.usersPage.pageUsersCount;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentUsersPage = (state) => state.usersPage.currentUsersPage;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) =>
	state.usersPage.followingInProgress;
export const getIsAuth = (state) => state.auth.isAuth;
