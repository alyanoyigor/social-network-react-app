const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_USERS_PAGE = "SET-CURRENT-USERS-PAGE";

let initialState = {
  users: [],
  pageUsersCount: 5,
  totalUsersCount: 0,
  currentUsersPage: 1,
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

    default:
      return state;
  }
};
export const toggleFollowAC = (id) => ({
  type: TOGGLE_FOLLOW,
  id,
});
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCountAC = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const setCurrentUsersPageAC = (currentUserPage) => ({
  type: SET_CURRENT_USERS_PAGE,
  currentUserPage,
});

export default usersReducer;
