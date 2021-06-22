const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullname: "Igor",
      status: "I'm learn ReactJS",
      location: { city: "LA", country: "USA" },
    },
    {
      id: 2,
      followed: false,
      fullname: "Andrew",
      status: "Axaaxaxa i'm crazy guy!",
      location: { city: "Ternopil", country: "Ukraine" },
    },
    {
      id: 3,
      followed: true,
      fullname: "Vita",
      status: "I'm hottest girl in the world not a Linda.",
      location: { city: "Lviv", country: "Ukraine" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            if (user.followed) {
              return { ...user, followed: false };
            } else {
              return { ...user, followed: true };
            }
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};
export const toggleFollowAC = (id) => ({ type: TOGGLE_FOLLOW, userId: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
